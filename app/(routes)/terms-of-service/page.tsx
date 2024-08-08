import Link from "next/link"
import { FaChevronLeft } from "react-icons/fa"

const TermsOfServicePage = () => {
  return (
    <div className="w-full h-full min-h-screen p-6 space-y-8">
      <button className="p-6">
        <Link href="/">
          <FaChevronLeft className="w-4 h-4" />
        </Link>
      </button>

      <h1 className="text-center text-3xl my-10">Terms of Service</h1>

      <div>
        <h2 className="font-semibold text-lg">1. Acceptance of Terms</h2>
        <p>
          By using the products and services of Takahide Sato, you confirm your acceptance of, and agree to abide by these Terms and Conditions as well as our Privacy Policy. These Terms and Conditions take effect on the date you first use our products or services.
        </p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">2. Use of Services</h2>
        <p>
          <span className="font-semibold">Account: </span>You are required to create an account to access certain features of our products and services. You are responsible for maintaining the confidentiality of your account credentials and for any activity that occurs under your account. You agree to notify us immediately of any unauthorized use of your account.
        </p>
        <p>
          <span className="font-semibold">Prohibited Activities: </span>You agree not to engage in any of the following activities while using our products and services: such as but not limited to Engaging in any activity that disrupts or negatively impacts the operation of our products and services.
        </p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">3. Paid Services and Billing</h2>
        <p>
          <span className="font-semibold">Billing and Payments: </span>All payments are processed securely through third-party payment processors. You agree to provide accurate and complete billing information and authorize us to charge your chosen payment method for all fees and charges.
        </p>
        <p>
          <span className="font-semibold">Cancellation and Refunds: </span>You can cancel your subscription at any time, and you will continue to have access to the services until the end of your billing cycle. We do not offer refunds for any unused portion of a subscription. We do not offer refunds for one-time purchase.
        </p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">4. Content Ownership</h2>
        <p>
          <span className="font-semibold">Your Content: </span>You retain ownership of any content you upload or share through our products and services. By using our services, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, adapt, publish, and distribute the content solely for the purpose of providing and improving our products and services.
        </p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">5. Intellectual Property</h2>
        <p>
          <span className="font-semibold">Ownership: </span>All intellectual property rights in our products and services, including but not limited to trademarks, copyrights, and patents, are owned by or licensed to us. You may not use our intellectual property without our explicit written permission.
        </p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">6. Termination</h2>
        <p>
          <span className="font-semibold">Termination by Us: </span>We reserve the right to terminate or suspend your access to our products and services at our discretion, with or without notice, if you violate these Terms. Upon termination, all rights and licenses granted to you will immediately cease.
        </p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">7. Changes to Products/Services</h2>
        <p>
          <span className="font-semibold">Updates: </span>We may update the content of our products and services from time to time without notice due to various reasons such as usability enhancements, bug fixes, software updates, etc (reasons may not be limited to these examples). Your continued use of our products and services after any changes constitute your acceptance of the revised Terms.
        </p>
      </div>

      <div>
        <h2 className="font-semibold text-lg">7. Changes to Terms</h2>
        <p>
          <span className="font-semibold">Updates: </span>We may update these Terms from time to time, and any changes will be effective immediately upon posting. It is your responsibility to review these Terms periodically. Your continued use of our products and services after any changes constitute your acceptance of the revised Terms.
        </p>
      </div>
    </div>
  )
}

export default TermsOfServicePage