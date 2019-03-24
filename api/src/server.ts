import http from "http";
import WebSocket from "ws";
import Koa from "koa";
import middlewares from "./middlewares";
import connect from "./db";
import routes from "./routes";

const mongoDB = "mongodb://mongodb:27017/scrum-poker";
connect({ url: mongoDB }).then(() => {
  const app = new Koa();
  app.use(middlewares());
  app.use(routes());

  const server = http.createServer(app.callback());
  const wss = new WebSocket.Server({ server });

  wss.on("connection", function connection(ws, req) {
    console.log("connected: ", req.connection.remoteAddress);
    ws.on("message", function incoming(message) {
      console.log("received: %s", message);
    });

    // TODO: add broadcasting
    ws.send("something");
  });

  server.listen(5000, () => {
    console.info(`App listening on localhost:5000`);
  });
});
