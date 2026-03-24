export default function handler(req, res) {
  // ✅ CORS WAJIB
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");

  // ✅ handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  res.setHeader("Content-Type", "application/json");

  res.status(200).json({
    aci_version: "1.0",
    version: "1.0.0",

    connector: {
      id: "aci-vercel",
      name: "ACI Vercel Connector"
    },

    description: "Connector dari Vercel",
    base_url: "https://aci-connector.vercel.app",

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
