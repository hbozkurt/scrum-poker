import Router from "koa-router";
import compose from "koa-compose";
import sessionRoutes from "./session.routes";

const router = new Router().use(sessionRoutes());

export default () => compose([router.routes(), router.allowedMethods()]);
