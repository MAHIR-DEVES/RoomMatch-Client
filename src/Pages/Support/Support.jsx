import React from 'react';
import { FaHeadset, FaQuestionCircle, FaTools, FaClock } from 'react-icons/fa';

const Support = () => {
  return (
    <div className="bg-[#eef4ff] dark:bg-gray-800 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How Can We Help?
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers or contact our support team 24/7
          </p>
        </div>

        {/* Help Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: (
                <FaQuestionCircle className="text-3xl text-indigo-600 dark:text-indigo-400" />
              ),
              title: 'FAQs',
              desc: 'Browse common questions',
              link: '/faq',
            },
            {
              icon: (
                <FaTools className="text-3xl text-indigo-600 dark:text-indigo-400" />
              ),
              title: 'Guides',
              desc: 'Step-by-step tutorials',
              link: '/guides',
            },
            {
              icon: (
                <FaHeadset className="text-3xl text-indigo-600 dark:text-indigo-400" />
              ),
              title: 'Live Chat',
              desc: 'Instant messaging support',
              link: '/chat',
            },
            {
              icon: (
                <FaClock className="text-3xl text-indigo-600 dark:text-indigo-400" />
              ),
              title: 'Status',
              desc: 'Service uptime monitor',
              link: '/status',
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </a>
          ))}
        </div>

        {/* FAQ Preview */}
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Top Questions
          </h2>
          <div className="space-y-4">
            {[
              'How do I report a suspicious profile?',
              'Can I change my move-in date after matching?',
              'What payment methods are accepted?',
              'How does the compatibility algorithm work?',
            ].map((question, index) => (
              <div
                key={index}
                className="border-b border-gray-200 dark:border-gray-600 pb-4"
              >
                <button className="w-full text-left flex justify-between items-center">
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {question}
                  </span>
                  <svg
                    className="w-5 h-5 text-indigo-600 dark:text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href="/faq"
              className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
            >
              View all FAQs →
            </a>
          </div>
        </div>

        {/* Contact Card */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 rounded-xl shadow-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <FaHeadset className="text-4xl mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Still Need Help?
            </h2>
            <p className="text-indigo-100 mb-6">
              Our support team responds within 1 hour during business hours
              (9AM-5PM EST).
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:support@roommatch.com"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Email Us
              </a>
              <a
                href="tel:+18005551234"
                className="bg-black/20 px-6 py-3 rounded-lg font-medium hover:bg-black/30 transition-colors"
              >
                Call Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
