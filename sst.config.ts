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
          region: "ap-northeast-1"
        }
      }
    };
  },
  async run() {
    // todo: link email once the domain is expired.
    // const email = new sst.aws.Email("MyEmail", {
    //   sender: "takahidesato.com"
    // })

    // const api = new sst.aws.Function("MyApi", {
    //   handler: "sender.handler",
    //   link: [email],
    //   url: true,
    // })

    new sst.aws.Nextjs("MyPortfolio", {
      domain: {
        name: "takahidesato.com",
        // redirects: ["www.takahidesato.com"],
        dns: sst.aws.dns({ override: true })
      },
      // link: [api]
    });
  },
});
