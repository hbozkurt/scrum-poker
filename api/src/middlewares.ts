import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import compose from "koa-compose";
import cors from "koa-cors";

const bodyParserOptions = {
  enableTypes: ["json", "form"],
  formLimit: "56kb",
  jsonLimit: "1mb",
  textLimit: "1mb",
  strict: true,
};

const middlewares = [cors({ origin: true, credentials: true }), logger(), bodyParser(bodyParserOptions)];

export default () => compose(middlewares);
