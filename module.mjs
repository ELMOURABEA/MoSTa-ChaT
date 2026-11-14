// @ts-check
import { module } from "@prisma/composer";
import eveDocsService from "./apps/docs/service.mjs";
import eveService from "./packages/eve/service.mjs";
import frameworkNextMultiAgentService from "./apps/frameworks/next-multi-agent/service.mjs";
import frameworkNextService from "./apps/frameworks/next/service.mjs";
import frameworkNuxtService from "./apps/frameworks/nuxt/service.mjs";
import frameworkSveltekitService from "./apps/frameworks/sveltekit/service.mjs";
import frameworkTanstackService from "./apps/frameworks/tanstack/service.mjs";

export default module("mosta-chat", ({ provision }) => {
  provision(eveDocsService, { id: "evedocs" });
  provision(eveService);
  provision(frameworkNextMultiAgentService, { id: "frameworknextmultiagent" });
  provision(frameworkNextService, { id: "frameworknext" });
  provision(frameworkNuxtService, { id: "frameworknuxt" });
  provision(frameworkSveltekitService, { id: "frameworksveltekit" });
  provision(frameworkTanstackService, { id: "frameworktanstack" });
});
