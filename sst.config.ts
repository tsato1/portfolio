import { SSTConfig } from "sst";
import { Site } from "./stacks/Site";

export default {
  config(_input) {
    return {
      name: "portfolio",
      region: "us-east-1",
      profile: _input.stage === "prod" ? "tak-prod" : "tak-dev",
    };
  },
  stacks(app) {
    app.stack(Site);
  },
} satisfies SSTConfig;
