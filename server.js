import { createServer } from "http"
import { parse } from "url"
import next from "next"

// Use a fixed default port instead of relying on environment variable
const port = 3000
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true)
    handle(req, res, parsedUrl)
  }).listen(port)

  console.log(`> Server listening at http://localhost:${port} as ${dev ? "development" : process.env.NODE_ENV}`)
})
