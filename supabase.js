// BuildMate — Supabase connection

const SUPABASE_URL = "https://nioicvluznlbdclegqjx.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_4EGw7_3td1salgWpqoo06w_bJllQNPW";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

console.log("BuildMate: Supabase client initialized.");


// Supabase connection message

document.body.insertAdjacentHTML(
  "beforeend",
  "<p style='color:green;text-align:center;font-weight:bold;'>✅ Supabase connected!</p>"
);


// Test test_connection table

async function testDatabase() {

  const { data, error } = await supabaseClient
    .from("test_connection")
    .select("message")
    .limit(1);

  if (error) {

    document.body.insertAdjacentHTML(
      "beforeend",
      "<p style='color:red;text-align:center;font-weight:bold;'>❌ Database error: " +
      error.message +
      "</p>"
    );

    return;
  }

  if (!data || data.length === 0) {

    document.body.insertAdjacentHTML(
      "beforeend",
      "<p style='color:orange;text-align:center;font-weight:bold;'>⚠️ Connected, but no data found.</p>"
    );

    return;
  }

  document.body.insertAdjacentHTML(
    "beforeend",
    "<p style='color:blue;text-align:center;font-weight:bold;'>📦 Database: " +
    data[0].message +
    "</p>"
  );
}


// Test profiles table

async function testProfiles() {

  const { data, error } = await supabaseClient
    .from("profiles")
    .select("name, role, bio, skills")
    .limit(1);

  if (error) {

    document.body.insertAdjacentHTML(
      "beforeend",
      "<p style='color:red;text-align:center;font-weight:bold;'>❌ Profiles error: " +
      error.message +
      "</p>"
    );

    return;
  }

  if (!data || data.length === 0) {

    document.body.insertAdjacentHTML(
      "beforeend",
      "<p style='color:orange;text-align:center;font-weight:bold;'>⚠️ Profiles table is empty.</p>"
    );

    return;
  }

  const profile = data[0];

  document.body.insertAdjacentHTML(
    "beforeend",

    "<div style='text-align:center;margin:20px;padding:15px;" +
    "border:1px solid #ddd;border-radius:10px;'>" +

    "<h3>👤 Profile Test</h3>" +

    "<p><strong>Name:</strong> " +
    profile.name +
    "</p>" +

    "<p><strong>Role:</strong> " +
    profile.role +
    "</p>" +

    "<p><strong>Bio:</strong> " +
    profile.bio +
    "</p>" +

    "<p><strong>Skills:</strong> " +
    profile.skills +
    "</p>" +

    "</div>"
  );
}


// Start database tests

testDatabase();
testProfiles();

document.body.insertAdjacentHTML(
  "beforeend",
  "<p style='color:purple;text-align:center;font-weight:bold;'>🧪 Database tests started</p>"
);
