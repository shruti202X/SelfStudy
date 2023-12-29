import { createClient } from "@supabase/supabase-js";

/*
const projectURL = import.meta.env.SUPABASE_PROJECT_URL;
const projectKey = import.meta.env.SUPABASE_PROJECT_KEY;

export const supabase = createClient(projectURL, projectKey);

*/

const supabaseURL = "https://osuzstezstvaxvxlkles.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zdXpzdGV6c3R2YXh2eGxrbGVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NzIyODcsImV4cCI6MjAxOTI0ODI4N30.gy4SJMCVKEWCQyLalzHalDZ-q0yX5JndMqBfBnjXPqw";
export const supabase = createClient(supabaseURL, supabaseAnonKey);
//https://stackoverflow.com/a/60070006/15421809
