import { SSTConfig } from "sst";
import { Api, Config, NextjsSite } from "sst/constructs";

import * as cdk from "aws-cdk-lib";

const DOMAIN_NAME = "takahidesato.com"

export default {
  config(_input) {
    return {
      name: "portfolio",
      region: "us-east-1",
      profile: _input.stage === "production" ? "tak-prod" : "tak-dev",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      /* Define static parameters here (cannot use .env file) */
      const AWS_SES_SENDER_EMAIL = new Config.Parameter(stack, "AWS_SES_SENDER_EMAIL", { value: "contact@takahidesato.com" });
      const AWS_SES_REGION = new Config.Parameter(stack, "AWS_SES_REGION", { value: "ap-northeast-1" })
      const AWS_SES_API_KEY = new Config.Secret(stack, "AWS_SES_API_KEY")
      const AWS_SES_API_SECRET = new Config.Secret(stack, "AWS_SES_API_SECRET")

      /* Create a hosted zone on your domain name */
      const hostedZone = new cdk.aws_route53.HostedZone(stack, "HostedZone", {
        zoneName: DOMAIN_NAME,
      });

      /* Create a SSL certificate linked to the hosted zone */
      const certificate = new cdk.aws_certificatemanager.Certificate(stack, "Certificate", {
        domainName: DOMAIN_NAME,
        validation: cdk.aws_certificatemanager.CertificateValidation.fromDns(hostedZone),
      });

      /* Add the hosted zone and the certificate to the Next.js site */
      const site = new NextjsSite(stack, "site", {
        bind: [AWS_SES_SENDER_EMAIL, AWS_SES_API_KEY, AWS_SES_API_SECRET, AWS_SES_REGION],
        customDomain: {
          domainName: DOMAIN_NAME,
          cdk: {
            hostedZone,
            certificate,
          }
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
