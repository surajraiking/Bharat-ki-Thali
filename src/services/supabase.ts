import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL = 'https://wdjcqtzadqiaooeqeocd.supabase.co';
export const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_ynU0jaAKjE21tGlLU2X3iw_lVpPlbzU';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export interface CloudProfile {
  user_id: string;
  display_name: string | null;
  email: string | null;
  favorites: string[];
  recently_viewed: string[];
  shopping_list: unknown[];
  meal_plan: unknown;
  saved_thalis: unknown[];
  settings: unknown;
  created_at?: string;
  updated_at?: string;
}
