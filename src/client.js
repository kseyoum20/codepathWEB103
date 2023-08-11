import { createClient } from "@supabase/supabase-js";

const URL = "https://higfewykteutelavxfyd.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpZ2Zld3lrdGV1dGVsYXZ4ZnlkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MTIwMzgyNiwiZXhwIjoyMDA2Nzc5ODI2fQ.YDAiwJIGAnx9gD61Novmd1hekvw-bqcG2U0aofF8yvw"; // Replace with your actual API key

export const supabase = createClient(URL, API_KEY);
export const apiEndpoint = URL;
export const accessToken = API_KEY; // Just the API key
