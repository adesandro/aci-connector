export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  res.setHeader("Content-Type", "application/json");

  return res.status(200).json({
    aci_version: "1.0",
    version: "1.0.0",

    connector: {
      id: "aci-vercel",
      name: "ACI Vercel Connector"
    },

    description: "Connector dari Vercel",
    base_url: "https://api.smaxavour.sch.id",

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
