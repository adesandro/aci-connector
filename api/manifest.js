export default function handler(req, res) {
  const host = req.headers.host || "aci-connector.vercel.app";
  const baseUrl = `https://${host}`;

  res.setHeader("Content-Type", "application/json");

  return res.status(200).send({
    aci_version: "1.0",
    version: "1.0.0",

    connector: {
      id: "aci-vercel",
      name: "ACI Vercel Connector"
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
