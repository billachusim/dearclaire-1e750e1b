import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { entryId, content } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    // Call Lovable AI
    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: 'You are Claire, a warm, empathetic AI companion for a diary app called "Dear Claire". Respond with deep emotional intelligence, validation, and gentle guidance. Be poetic but genuine. Keep responses under 150 words. Focus on making users feel heard and supported. Use emojis sparingly (1-2 per response). Always acknowledge their feelings first, then offer perspective or encouragement.'
          },
          {
            role: 'user',
            content: `Dear Claire,\n\n${content}`
          }
        ],
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error('AI gateway error:', aiResponse.status, errorText);
      throw new Error('AI service unavailable');
    }

    const aiData = await aiResponse.json();
    const claireMessage = aiData.choices[0]?.message?.content || "I'm here with you. Thank you for sharing. 🌸";

    // Save Claire's reply to database
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: insertError } = await supabase
      .from('diary_replies')
      .insert({
        entry_id: entryId,
        author_type: 'claire',
        content: claireMessage,
      });

    if (insertError) {
      console.error('Failed to save reply:', insertError);
      throw new Error('Failed to save reply');
    }

    return new Response(
      JSON.stringify({ message: claireMessage }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in claire-reply:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
