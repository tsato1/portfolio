import Link from "next/link"
import { FaChevronLeft } from "react-icons/fa"

const CommerceDisclosurePage = () => {
  return (
    <div className="w-full h-full min-h-screen p-6 space-y-8">
      <button className="p-6">
        <Link href="/">
          <FaChevronLeft className="w-4 h-4" />
        </Link>
      </button>

      <h1 className="text-center text-3xl my-10">Commerce Disclosure</h1>

      <div className="grid grid-cols-[1fr_3fr] gap-y-4 gap-x-1 text-xs sm:text-sm">
        <p>Name:</p><p>Takahide Sato</p>

        <p>Physical Address:</p><p>14-5, Kitatakamori, Izumi, Sendai, Miyagi, Japan</p>

        <p>Phone Number:</p><p>We will disclose if requested through the email below.</p>

        <p>Email Address:</p><p>takahidesato7@gmail.com</p>

        <p>Head of Business:</p><p>Takahide Sato</p>

        <p>Products/Services:</p>
        <ol className="list-decimal">
          <li>Saas (Software as a Service) products</li>
          <li>Software Developnemt</li>
          <li>Consultation</li>
          <li>1 on 1 Online Education (via tools such as Zoom, Webex, Google Meet, Skype, etc.)</li>
        </ol>

        <p>Pricing*:</p>
        <ol className="list-decimal">
          <li>SaaS products: All of our SaaS products have a pricing page that contains necessary information regarding prices. Please refer to them.</li>
          <li>Software Development: Depends on the type and size of project.</li>
          <li>Consulation: starting 7500 JPY per hour</li>
          <li>1 on 1 Online Education: starting 5000 JPY per hour</li>
        </ol>

        <p>Additional Fees:</p>
        <ol className="list-decimal">
          <li>SaaS products: No additional fees will be charged for the service we offer otherwise stipulated on the pricing page.</li>
          <li>Software Development: No additional fees will be charged for the service we offer otherwise discussed and agreed by the involved parties.</li>
          <li>Consultation: No additional fees will be charged otherwise discussed and agreed by the involved parties.</li>
          <li>1 on 1 Online Education: No additional fees will be charged otherwise discussed and agreed by the involved parties.</li>
        </ol>

        <p>Returns/Exchanges:</p><p>Because of the nature of our products/services, we do not accept returns or exchanges of items after purchase.</p>

        <p>Delivery Times:</p>
        <ol className="list-decimal">
          <li>Saas products: Products should be delivered as soon as you place an order.</li>
          <li>Software Development: Depends on the agreement made between the involved parties.</li>
          <li>Consultation: Depends on the agreement made between the involved parties.</li>
          <li>1 on 1 Online Education: Depends on the agreement made between the involved parties.</li>
        </ol>

        <p>Accepted Payment Methods:</p><p>Credit card, Bank transfer</p>

        <p>Payment Period</p><p>Credit card payments are processed immediately, while local bank transfers must be sent within 3 days of the date of order.</p>
      </div>

      <p className="text-xs">*Prices could change at any time.</p>
    </div>
  )
}

export default CommerceDisclosurePage