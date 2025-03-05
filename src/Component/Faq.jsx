import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const Faqs = [
  {
    question: "Why do this instead of hiring a COO?",
    answer:
      "Hiring a skilled COO takes months and costs *a ton* (average $121,000/yr). You're also on the hook for benefits + severance, and there's no guarantee they'll deliver what you want them to. Subscription models like ours are simply quantitatively & qualitatively better for the vast majority of companies under $3M/yr: you pay less, get results faster, and can pause or cancel your arrangement any time.",
  },
  {
    question: "How much more cost-effective is this, really?",
    answer:
     "When you take into account payroll, benefits, severance, and the opportunity cost of hiring, our service is ~30% of the price of hiring in-house, and ~70% of the price of hiring an agency. You also get access to two world-class ops executives that have helped scale several 8-figure companies, as well as a 100% satisfaction guarantee + the ability to pause or cancel anytime.",
  },
  {
    question: "How does payment work?",
    answer:
      "When you click one of the payment options above, you’ll be taken to a Stripe Checkout page. After you pay, we’ll automatically create a subscription for you that renews on the same day every month. You can cancel or pause at any time.",
  },
  {
    question: "What do you mean by '100% satisfied'?",
    answer:
      "Our project management flow includes a simple way to request changes or revisions after a delivery. If you’re not completely satisfied with the systems you receive (think sales, hiring, onboarding, etc), you’d simply leave a comment and we’d continue revising your deliverable until you are.",
  },
  {
    question: "How do I submit a request?",
    answer:
      "After your thirty-minute onboarding call, you’ll receive access to your own ClickUp board, where you can view and manage ongoing projects. To create a request, you merely click the + button on your board and add the task to our queue directly.",
  },
  {
    question: "What’s your refund policy?",
    answer:
      "If you’re not 100% satisfied with your service, we’ll keep working for free until you are.",
  },
  {
    question: "What does 'unlimited' mean?",
    answer:
      "You can submit an unlimited number of requests. Most clients often have 10-15 in the queue at any one time, and their board acts as a to-do list. Our team works on one at a time (prioritized by you), and our average turnaround time on a system deliverable is between 1-4 days. The moment we’re done, we get to work on the next. In this way, we often deliver 10+ systems per month (whereas an in-house hire might deliver one or two).",
  },
  {
    question: "How do we communicate?",
    answer:
      "Vast majority of our comms are async, through Slack and ClickUp. Minimizing call-time provides much more flexibility, allowing us to deliver more projects and higher quality services. That said, we offer an optional weekly ops consultation to discuss bottlenecks, prioritize, and track progress.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto p-6 text-white bg-gray-900 w-full"
    >
      <div className="text-center w-full py-10 px-4 sm:px-8 border border-gray-800 rounded-xl mt-10 bg-gray-800/20">
        <div className="mt-16 w-full">
          <span className="bg-gray-700 text-white px-4 py-1 rounded-full text-sm font-medium">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6">FAQ'S</h2>
        </div>
        <div className="space-y-4 mt-10 mb-10">
          {Faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-4 cursor-pointer shadow-md"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-300 break-words">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Faq;