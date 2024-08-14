/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "portfolio",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          profile: "tak-prod",
          region: "us-east-1"
        }
      }
    };
  },
  async run() {
    new sst.aws.Nextjs("MyPortfolio", {
      domain: {
        name: "takahidesato.com",
        dns: sst.aws.dns({ override: true })
      }
    });
  },
});

