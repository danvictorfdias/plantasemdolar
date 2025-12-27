import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

function createStubClient(): SupabaseClient {
  return {
    from: () => ({
      insert: () => Promise.resolve({ data: null, error: null }),
      select: () => ({
        eq: () => ({
          maybeSingle: () => Promise.resolve({ data: null, error: null }),
          single: () => Promise.resolve({ data: null, error: null }),
        }),
      }),
    }),
  } as unknown as SupabaseClient;
}

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : createStubClient();

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase not configured - using stub client');
}
