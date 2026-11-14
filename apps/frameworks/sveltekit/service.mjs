// @ts-check
import node from "@prisma/composer/node";
import { compute } from "@prisma/composer-prisma-cloud";

export default compute({
  name: "framework-sveltekit",
  deps: {},
  build: node({ module: import.meta.url, dir: "build", entry: "index.js", dependencies: "external" }),
});
