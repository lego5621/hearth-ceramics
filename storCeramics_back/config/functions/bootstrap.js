'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

"use strict";

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

module.exports = () => {
  const prefix = strapi.config.server.url;
  if (prefix) {
    strapi.router.stack.forEach((i) => (i.path = i.path.replace(prefix, "")));
    strapi.router.prefix(prefix);
    strapi.app.middleware.forEach((i) => i.router && i.router.prefix(prefix));

    strapi.app.use(async (ctx, next) => {
      if (
        ctx.request.url === prefix + "/_health" &&
        ctx.request.method === "HEAD"
      ) {
        ctx.set("strapi", "You are so French!");
        ctx.status = 204;
      } else {
        await next();
      }
    });
    fixUploads(prefix);
  }
  // Uncomment next lines for print list of all routes. 
  // strapi.router.stack.forEach((i) => console.log(i.path));
  // strapi.app.middleware.forEach(
  //   (i) => i.router && i.router.stack.forEach((j) => console.log(j.path))
  // );
};
function fixUploads(prefix) {
  const uploads = strapi.router.stack.find(
    (i) => i.path == prefix + "/uploads/(.*)"
  );
  const serve_ix = uploads.stack.findIndex((i) => i.name == "serve");
  const serve = uploads.stack[serve_ix];

  uploads.stack[serve_ix] = (ctx, next) => serve(Object.assign(ctx, { path: ctx.path.replace(prefix, "") }), next);
}
