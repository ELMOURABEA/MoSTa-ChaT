// @ts-check
import node from "@prisma/composer/node";
import { compute } from "@prisma/composer-prisma-cloud";

export default compute({
  name: "framework-nuxt",
  deps: {},
  build: node({ module: import.meta.url, dir: ".output", entry: "server/index.mjs" }),
});
