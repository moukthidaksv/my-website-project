// BuildMate — Supabase connection

const SUPABASE_URL = "https://nioicvluznlbdclegqjx.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "YOUR_KEY_HERE";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

console.log("BuildMate: Supabase client initialized.");
