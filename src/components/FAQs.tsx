import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting every 6 months for regular checkups and cleanings. However, some patients may need more frequent visits based on their oral health condition. Dr. Mehra will create a personalized schedule that's right for you."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major dental insurance plans. Our team will help verify your benefits and maximize your coverage. We also offer flexible payment plans for treatments not covered by insurance."
    },
    {
      question: "Are your treatments painful?",
      answer: "We prioritize your comfort and use the latest pain management techniques. Most procedures are completely painless with our advanced anesthesia methods. We also offer sedation options for anxious patients."
    },
    {
      question: "How long does a typical appointment take?",
      answer: "Routine cleanings typically take 45-60 minutes. More complex procedures vary in length, and we'll provide you with an estimated timeframe when scheduling. We respect your time and stay on schedule."
    },
    {
      question: "Do you offer emergency dental care?",
      answer: "Yes, we provide 24/7 emergency dental care for urgent situations like severe toothaches, broken teeth, or dental trauma. Call our emergency line at +91 98765 43210 for immediate assistance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit/debit cards, UPI payments, and bank transfers. We also offer EMI options for expensive treatments and work with various financing companies to make dental care affordable."
    },
    {
      question: "How do I prepare for my first visit?",
      answer: "Bring a valid ID, insurance cards (if applicable), and a list of current medications. Arrive 15 minutes early to complete paperwork. If you're anxious, let us know - we're here to make you comfortable."
    },
    {
      question: "Do you treat children?",
      answer: "Absolutely! We have specialized pediatric dentistry services and create a fun, comfortable environment for children. We recommend bringing children for their first visit by age 1 or within 6 months of their first tooth."
    },
    {
      question: "How long do dental implants last?",
      answer: "With proper care, dental implants can last 20-30 years or even a lifetime. They have a 95% success rate and are the most durable tooth replacement option available. Regular checkups help ensure their longevity."
    },
    {
      question: "Can you help with dental anxiety?",
      answer: "Yes, we specialize in treating anxious patients. We offer various sedation options, explain procedures thoroughly, and create a calming environment. Many of our most anxious patients become our most relaxed ones!"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-blue-600 font-medium mb-4">
            <HelpCircle className="w-5 h-5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Got Questions? We Have Answers
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to the most common questions about our dental services, 
            appointments, and what to expect during your visit.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-blue-100 mb-6">
              Our friendly team is here to help! Contact us directly for personalized answers 
              to your dental care questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Call: +91 98765 43210
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;