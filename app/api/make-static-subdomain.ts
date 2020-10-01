import { BlitzApiRequest, BlitzApiResponse } from "blitz"

export default async function makeStaticSubDomain(req: BlitzApiRequest, res: BlitzApiResponse) {
  console.log("test req.headers.host", req.headers.host)
  console.log("test req.body", req.body)
  console.log("test req.subdomain", req["subdomain"])
  console.log("test req.subdomains", req["subdomains"])

  const currentDate = new Date()
  const datetime =
    "Static version generated at: " +
    currentDate.getDate() +
    "/" +
    (currentDate.getMonth() + 1) +
    "/" +
    currentDate.getFullYear() +
    " @ " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds()

  res.status(200).json({ datetime })
}
