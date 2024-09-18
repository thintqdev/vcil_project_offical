const faqs = [
  {
    question: "How does the billing work?",
    answer:
      "Springerdata offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.",
  },
  {
    question: "Can I get a refund for my subscription?",
    answer:
      "We offer a 30-day money-back guarantee for most of its subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions that have been active for longer than 30 days may be considered on a case-by-case basis.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "To cancel your subscription, you can log in to your account and navigate to the subscription management page. From there, you should be able to cancel your subscription and stop future billing.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "We offer a free trial of our software for a limited time. During the trial period, you will have access to a limited set of features and functionality, but you will not be charged.",
  },
  {
    question: "How do I contact support?",
    answer:
      "If you need help with our platform or have any other questions, you can contact the company's support team by submitting a support request through the website or by emailing support@ourwebsite.com.",
  },
  {
    question: "Do you offer any discounts or promotions?",
    answer:
      "We may offer discounts or promotions from time to time. To stay up-to-date on the latest deals and special offers, you can sign up for the company's newsletter or follow it on social media.",
  },
];

const FAQComponent = () => (
  <div className="text-center p-4 sm:p-8 md:p-16 w-full sm:w-3/4 md:w-2/3 mx-auto">
    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-500">
      Frequency Asked Questions
    </h2>
    <div className="flex justify-center">
      <hr className="w-1/4 sm:w-1/6 md:w-1/12 my-2 sm:my-4 md:my-6" />
    </div>
    <div className="text-left mx-auto mt-8 grid max-w-xl divide-y divide-green-200">
      {faqs.map((faq, index) => (
        <div className="py-5" key={index}>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span className="text-green-600">{faq.question}</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
              {faq.answer}
            </p>
          </details>
        </div>
      ))}
    </div>
  </div>
);

export default FAQComponent;
