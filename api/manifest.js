export default function handler(req, res) {
  const baseUrl = `https://${req.headers.host}`;

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.status(200).json({
    aci_version: "1.0", // 🔥 INI WAJIB
    name: "aci-vercel",
    version: "1.0.0",
    description: "Connector dari Vercel",
    base_url: baseUrl,
    tools: [
      {
        name: "hello",
        description: "Test koneksi",
        method: "GET",
        path: "/api/hello",
        parameters: []
      }
    ]
  });
}
