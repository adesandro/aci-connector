export default function handler(req, res) {
  const baseUrl = "https://aci-connector.vercel.app";

  res.status(200).json({
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
