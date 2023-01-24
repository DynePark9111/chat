import express, { Express, Request, Response } from "express";

const app: Express = express();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

const PORT = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send(`Chat server is running on port: ${PORT}.`);
});

app.listen(PORT, () => {
  console.log(`[server]: Chat server is running on port: ${PORT}`);
});
