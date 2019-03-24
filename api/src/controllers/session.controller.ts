import * as Router from "koa-router";
import { Session } from "../models";

export default {
  async findById(ctx: Router.IRouterContext) {
    const id = ctx.params.id;
    const session = await Session.findOne(id);
    if (!session) {
      ctx.throw(404, "session not found");
    }

    ctx.body = session;
  },

  async findAll(ctx: Router.IRouterContext) {
    const sessions = await Session.find({});

    ctx.body = sessions;
  },

  async create(ctx: Router.IRouterContext) {
    const session = new Session({
      name: ctx.request.body.name,
      nOfVoters: ctx.body.nOfVoters,
      stories: ctx.request.body.stories.map((s: string) => ({
        name: s,
        givenPoints: new Array(ctx.request.body.nOfVoters).fill(-1),
        result: -1,
      })),
    });

    await session.save();

    ctx.status = 201;
    ctx.body = { id: session._id };
  },
};
