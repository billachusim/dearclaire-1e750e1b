-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  nickname TEXT NOT NULL,
  email TEXT NOT NULL,
  is_alter_ego BOOLEAN DEFAULT FALSE,
  claire_id TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view all profiles"
  ON public.profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Create diary entries table
CREATE TABLE public.diary_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_public BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on diary entries
ALTER TABLE public.diary_entries ENABLE ROW LEVEL SECURITY;

-- Diary entries policies
CREATE POLICY "Users can view own entries"
  ON public.diary_entries FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Alter egos can view public entries"
  ON public.diary_entries FOR SELECT
  USING (
    is_public = true 
    AND EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() 
      AND is_alter_ego = true
    )
  );

CREATE POLICY "Users can insert own entries"
  ON public.diary_entries FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own entries"
  ON public.diary_entries FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own entries"
  ON public.diary_entries FOR DELETE
  USING (auth.uid() = user_id);

-- Create diary replies table
CREATE TABLE public.diary_replies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  entry_id UUID NOT NULL REFERENCES public.diary_entries(id) ON DELETE CASCADE,
  author_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  author_type TEXT NOT NULL CHECK (author_type IN ('claire', 'alter_ego')),
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on diary replies
ALTER TABLE public.diary_replies ENABLE ROW LEVEL SECURITY;

-- Diary replies policies
CREATE POLICY "Users can view replies to their entries"
  ON public.diary_replies FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.diary_entries 
      WHERE id = entry_id 
      AND user_id = auth.uid()
    )
  );

CREATE POLICY "Alter egos can view replies to public entries"
  ON public.diary_replies FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.diary_entries 
      WHERE id = entry_id 
      AND is_public = true
    )
    AND EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() 
      AND is_alter_ego = true
    )
  );

CREATE POLICY "System can insert claire replies"
  ON public.diary_replies FOR INSERT
  WITH CHECK (author_type = 'claire');

CREATE POLICY "Alter egos can insert replies to public entries"
  ON public.diary_replies FOR INSERT
  WITH CHECK (
    author_type = 'alter_ego'
    AND EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() 
      AND is_alter_ego = true
    )
    AND EXISTS (
      SELECT 1 FROM public.diary_entries 
      WHERE id = entry_id 
      AND is_public = true
    )
  );

-- Create trigger function for profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, nickname, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'nickname', 'User'),
    NEW.email
  );
  RETURN NEW;
END;
$$;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_diary_entries_updated_at
  BEFORE UPDATE ON public.diary_entries
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();