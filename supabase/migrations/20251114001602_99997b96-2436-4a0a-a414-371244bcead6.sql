-- Enable realtime for diary_replies and diary_entries tables
ALTER PUBLICATION supabase_realtime ADD TABLE diary_replies;
ALTER PUBLICATION supabase_realtime ADD TABLE diary_entries;
