import Router from "koa-router";
import { Session } from "../controllers";

const router = new Router({ prefix: "/sessions" });
router.get("", Session.findAll);
router.get("/:id", Session.findById);
router.post("/", Session.create);

export default () => router.routes();
