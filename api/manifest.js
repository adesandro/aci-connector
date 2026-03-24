export default function handler(req, res) {
  const baseUrl = `https://${req.headers.host}`;

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.status(200).json({
    aci_version: "1.0",

    connector: {
      id: "aci-vercel", // 🔥 WAJIB
      name: "ACI Vercel Connector" // 🔥 WAJIB
    },

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
