import React from 'react';

import { FaUsers, FaHome, FaHandshake } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-[#eef4ff] dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-4 dark:bg-indigo-900 dark:text-indigo-200">
            Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Connecting People, Creating Homes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            RoomMatch was born from a simple idea: everyone deserves a
            compatible roommate and a comfortable home.
          </p>
        </div>

        {/* Stats & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Happy roommates"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Why We Exist
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              After struggling with bad roommate matches in college, our
              founders created RoomMatch in 2022 to solve the problem using
              smart algorithms and community verification.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-indigo-600 dark:text-indigo-400 text-3xl mb-2">
                  <FaUsers className="inline-block" />
                </div>
                <span className="block text-xl font-bold text-gray-900 dark:text-white">
                  50K+
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Users
                </span>
              </div>
              <div className="text-center">
                <div className="text-indigo-600 dark:text-indigo-400 text-3xl mb-2">
                  <FaHome className="inline-block" />
                </div>
                <span className="block text-xl font-bold text-gray-900 dark:text-white">
                  12K+
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Listings
                </span>
              </div>
              <div className="text-center">
                <div className="text-indigo-600 dark:text-indigo-400 text-3xl mb-2">
                  <FaHandshake className="inline-block" />
                </div>
                <span className="block text-xl font-bold text-gray-900 dark:text-white">
                  98%
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Success Rate
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '🔍',
              title: 'Transparency',
              desc: 'Verified profiles and honest listings with no hidden fees.',
            },
            {
              icon: '🤝',
              title: 'Compatibility',
              desc: 'Our matching system analyzes 20+ lifestyle factors.',
            },
            {
              icon: '🛡️',
              title: 'Safety',
              desc: 'Secure messaging and community reporting features.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 inline-flex items-center">
            Join Our Community
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
