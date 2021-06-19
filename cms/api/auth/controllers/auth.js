"use strict";

/**
 * A set of functions called "actions" for `auth`
 */

module.exports = {
  async me(ctx) {
    if (ctx.state.user) {
      return ctx.state.user;
    }

    ctx.unauthorized("You're not logged in");
  },
};
