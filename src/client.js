import { createClient } from '@supabase/supabase-js';
const URL = 'https://higfewykteutelavxfyd.supabase.co';
const API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpZ2Zld3lrdGV1dGVsYXZ4ZnlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyMDM4MjYsImV4cCI6MjAwNjc3OTgyNn0.l9-4fGRwmH4gHKkUOzMGHsYAEGJ1eUUL0syombPie7A';
const supabase = createClient(URL, API_KEY);
export const supabase = createClient(URL, API_KEY);