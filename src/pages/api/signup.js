export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    first_name,
    last_name,
    email,
    password,
    confirmPassword,
    role = "user", // Default role
  } = req.body;

  // Basic validation
  if (!first_name || !last_name || !email || !password || !confirmPassword) {
    return res.status(400).json({ error: "Please fill all fields" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/register/`;
    console.log("Registering to:", url);

    const payload = {
      password,
      first_name,
      last_name,
      role,
      email,
    };

    const backendResponse = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    let data;
    const text = await backendResponse.text();  // Read raw response once

    try {
      data = JSON.parse(text);                   // Try parsing JSON
    } catch {
      console.error("Non-JSON response:", text);
      return res.status(500).json({ error: "Invalid response from server" });
    }

    if (!backendResponse.ok) {
      const error =
        data?.detail ||
        data?.error ||
        Object.values(data).flat().join(" ") ||
        "Backend registration failed";
      return res.status(backendResponse.status).json({ error });
    }

    return res.status(200).json({
      message: "Registration successful. Check your email for verification.",
    });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
