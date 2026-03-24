export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");

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
