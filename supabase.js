// BuildMate — Supabase connection

const SUPABASE_URL = "https://nioicvluznlbdclegqjx.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_4EGw7_3td1salgWpqoo06w_bJllQNPW";

const supabaseClient = window.supabase.createClient(

  SUPABASE_URL,

  SUPABASE_PUBLISHABLE_KEY

);

console.log("BuildMate: Supabase client initialized.");

document.body.insertAdjacentHTML(

  "beforeend",

  "<p style='color:green;text-align:center;font-weight:bold;'>✅ Supabase connected!</p>"

);

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

testDatabase();
