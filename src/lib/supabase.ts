
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pbwuwwviboxwefsaaiqf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBid3V3d3ZpYm94d2Vmc2FhaXFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxNDg1OTAsImV4cCI6MjA1NTcyNDU5MH0.3-BQbT-hAJ_jgbxoooboXrwDA5TWd-eFm7dYLQPLTYM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
