import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tqieavyfwrcfknqszyiv.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxaWVhdnlmd3JjZmtucXN6eWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MzIwNjAsImV4cCI6MjA2OTMwODA2MH0.WGnAkBP0ohrPA4rhtUA7P0d8RY9NWqZTJD61kBsaMZM";

// Create Supabase client with provided credentials
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to get current view count
export async function getViewCount() {
  try {
    const { data, error } = await supabase
      .from("site_views")
      .select("views")
      .eq("id", 1)
      .single();

    if (error) {
      console.error("Error fetching view count:", error);
      return 934; // Default fallback value
    }

    return data?.views || 934;
  } catch (error) {
    console.error("Error in getViewCount:", error);
    return 934; // Default fallback value
  }
}

// Function to increment view count
export async function incrementViewCount() {
  try {
    // First, try to get the current count
    const { data: currentData, error: fetchError } = await supabase
      .from("site_views")
      .select("views")
      .eq("id", 1)
      .single();

    if (fetchError && fetchError.code !== "PGRST116") {
      console.error("Error fetching current view count:", fetchError);
      return 935;
    }

    if (!currentData) {
      // If no record exists, create one with initial count
      const { error: insertError } = await supabase
        .from("site_views")
        .insert({ id: 1, views: 935 });

      if (insertError) {
        console.error("Error creating initial view count:", insertError);
      }
      return 935;
    } else {
      // If record exists, increment it
      const newCount = currentData.views + 1;
      const { error: updateError } = await supabase
        .from("site_views")
        .update({ views: newCount })
        .eq("id", 1);

      if (updateError) {
        console.error("Error updating view count:", updateError);
      }
      return newCount;
    }
  } catch (error) {
    console.error("Error in incrementViewCount:", error);
    return 935; // Return incremented default value
  }
}
