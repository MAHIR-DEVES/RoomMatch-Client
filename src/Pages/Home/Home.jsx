import React from 'react';
import Slider from '../../Components/Slider/Slider';
import { useLoaderData, useNavigate } from 'react-router';
import Cards from '../../Components/Cards/Cards';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';
import { FaRegStarHalfStroke } from 'react-icons/fa6';

const Home = () => {
  TabTitle('RoomMatch - Home');
  const navigate = useNavigate();
  const data = useLoaderData();

  return (
    <div className="  bg-white dark:bg-gray-800 ">
      <Slider />

      <section className="py-12 lg:px-4 sm:px-6  lg:w-10/12 mx-auto ">
        <div className="text-center mb-12  bg-white dark:bg-gray-800">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-red-600 bg-red-100 rounded-full mb-4">
            Posts Events
          </span>
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-black mb-4">
            Available Post Section
          </h2>
          <p className="text-lg dark:text-white text-blackmax-w-2xl mx-auto">
            Explore the most popular restaurant posts in your area
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-0">
          {data.map(card => (
            <Cards card={card} key={card._id} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button
            onClick={() => navigate('/browseListing')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
          >
            Browse All Post
            <svg
              className="ml-3 -mr-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>
      <section>
        <div className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold dark:text-white text-black sm:text-4xl">
                Available Rooms
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl dark:text-white text-black sm:mt-4">
                Find your perfect shared living space with compatible roommates
              </p>
            </div>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Room Card 1 */}
              <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Modern apartment living room"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium dark:text-white text-black">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        Downtown Loft
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      $1200/mo • 2 roommates • Private bath
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-gray-600">4.8</span>
                  </div>
                </div>
              </div>

              {/* Room Card 2 */}
              <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Cozy bedroom"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium dark:text-white text-black">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        University District
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      $850/mo • 3 roommates • Shared bath
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-gray-600">4.5</span>
                  </div>
                </div>
              </div>

              {/* Room Card 3 */}
              <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Modern shared kitchen"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium dark:text-white text-black">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        Riverside Apartment
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      $950/mo • 1 roommate • Private bath
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-gray-600">4.9</span>
                  </div>
                </div>
              </div>

              {/* Room Card 4 */}
              <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Spacious shared house"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium dark:text-white text-black">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        Suburban House
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      $700/mo • 4 roommates • Shared bath
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-gray-600">4.3</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => navigate('/browseListing')}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
              >
                View All Post
                <svg
                  className="ml-3 -mr-1 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="relative my-10 overflow-hidden bg-gray-900 min-h-[70vh] flex items-center">
        {/* Background with apartment image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Modern shared apartment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
          <div className="lg:flex items-center justify-between gap-12">
            {/* Text Content */}
            <div className="max-w-2xl lg:max-w-3xl w-full">
              <div className="text-blue-400 font-medium text-lg mb-4 tracking-wider uppercase">
                Find Your Perfect Match
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white">FIND YOUR</span>
                <span className="block text-blue-400 bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  IDEAL ROOMMATE
                </span>
              </h1>

              <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
                Connect with compatible roommates who share your lifestyle,
                habits, and budget. Our smart matching system helps you avoid
                conflicts and find the perfect living situation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={() => navigate('/browseListing')}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 text-lg font-bold rounded-md transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/20"
                >
                  Browse Roommates →
                </button>
                <button
                  onClick={() => navigate('/myListings')}
                  className="border-2 border-white text-white hover:bg-white/10 py-3 px-8 text-lg font-medium rounded-md transition-all duration-300"
                >
                  List Your Room
                </button>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <p className="text-blue-400 font-bold text-lg tracking-wider mb-2">
                  TRUSTED BY 50,000+ USERS
                </p>
                <p className="text-gray-300">
                  "Found my perfect roommate in just 3 days!" – Sarah, NYC
                </p>
              </div>
            </div>

            {/* Side Image - Roommate profile cards */}
            <div className="hidden lg:block flex-1 max-w-xl space-y-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-gray-600/30 animate-float">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
                    alt="Roommate profile"
                  />
                  <div>
                    <h3 className="text-white font-bold">Alex, 28</h3>
                    <p className="text-blue-200">
                      Software Engineer • Clean • $1,200 budget
                    </p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaRegStarHalfStroke
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-gray-600/30 animate-float-delay ml-8">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
                    alt="Roommate profile"
                  />
                  <div>
                    <h3 className="text-white font-bold">Jamal, 25</h3>
                    <p className="text-blue-200">
                      Grad Student • Social • $900 budget
                    </p>
                    <div className="flex mt-1">
                      {[...Array(4)].map((_, i) => (
                        <FaRegStarHalfStroke
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes float-delay {
          0% {
            transform: translateY(-5px);
          }
          50% {
            transform: translateY(5px);
          }
          100% {
            transform: translateY(-5px);
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 6s ease-in-out infinite;
        }
      `}</style>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold dark:text-white text-black sm:text-4xl">
              What Our Users Say
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl dark:text-white text-black sm:mt-4">
              Trusted by thousands of students and professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-bold dark:text-white">Sarah K.</h4>
                  <p className="text-gray-500 dark:text-gray-400">Student</p>
                </div>
              </div>
              <p className="dark:text-gray-300">
                "Found my perfect roommate in 2 days! The matching system really
                understands preferences."
              </p>
              <div className="flex mt-3">
                {[...Array(5)].map((_, i) => (
                  <FaRegStarHalfStroke
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                  />
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-bold dark:text-white">Alex M.</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Software Engineer
                  </p>
                </div>
              </div>
              <p className="dark:text-gray-300">
                "Saved me from awkward interviews. My roommate and I share the
                same work schedule!"
              </p>
              <div className="flex mt-3">
                {[...Array(5)].map((_, i) => (
                  <FaRegStarHalfStroke
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                  />
                ))}
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-bold dark:text-white">Priya R.</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Graphic Designer
                  </p>
                </div>
              </div>
              <p className="dark:text-gray-300">
                "As an introvert, I appreciate the detailed filters. Found
                someone who respects quiet hours!"
              </p>
              <div className="flex mt-3">
                {[...Array(4)].map((_, i) => (
                  <FaRegStarHalfStroke
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  How It Works */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold dark:text-white text-black sm:text-4xl">
              Find a Roommate in 3 Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center p-6">
              <div className="bg-indigo-100 dark:bg-indigo-900 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <span className="text-indigo-600 dark:text-indigo-300 text-2xl font-bold">
                  1
                </span>
              </div>
              <h3 className="text-xl font-bold dark:text-white mb-2">
                Create a Profile
              </h3>
              <p className="dark:text-gray-300">
                Share your lifestyle, budget, and preferences to help us match
                you accurately.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center p-6">
              <div className="bg-indigo-100 dark:bg-indigo-900 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <span className="text-indigo-600 dark:text-indigo-300 text-2xl font-bold">
                  2
                </span>
              </div>
              <h3 className="text-xl font-bold dark:text-white mb-2">
                Browse Matches
              </h3>
              <p className="dark:text-gray-300">
                View compatible roommates or listings based on your criteria.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center p-6">
              <div className="bg-indigo-100 dark:bg-indigo-900 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <span className="text-indigo-600 dark:text-indigo-300 text-2xl font-bold">
                  3
                </span>
              </div>
              <h3 className="text-xl font-bold dark:text-white mb-2">
                Connect Safely
              </h3>
              <p className="dark:text-gray-300">
                Message through our platform and meet only when comfortable.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Safety Tips Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold dark:text-white text-black sm:text-4xl">
              Roommate Safety Tips
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl dark:text-white text-black sm:mt-4">
              Your safety is our priority
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tip 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 dark:text-indigo-400 mb-3">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-bold dark:text-white mb-2">
                Verify Profiles
              </h3>
              <p className="dark:text-gray-300">
                Look for verified badges and linked social media accounts.
              </p>
            </div>

            {/* Tip 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 dark:text-indigo-400 mb-3">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-bold dark:text-white mb-2">
                Meet in Public First
              </h3>
              <p className="dark:text-gray-300">
                Always arrange the first meeting in a café or campus.
              </p>
            </div>

            {/* Tip 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 dark:text-indigo-400 mb-3">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="font-bold dark:text-white mb-2">
                Secure Payments
              </h3>
              <p className="dark:text-gray-300">
                Use our platform for deposits to avoid scams.
              </p>
            </div>

            {/* Tip 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="text-indigo-600 dark:text-indigo-400 mb-3">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold dark:text-white mb-2">
                Trust Your Instincts
              </h3>
              <p className="dark:text-gray-300">
                If something feels off, don’t hesitate to say no.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* offer Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Badge */}
            <span className="inline-block px-3 py-1 text-xs font-bold text-indigo-600 bg-white rounded-full mb-4 uppercase tracking-wider">
              Limited Time Offer
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get <span className="text-yellow-300">50% Off</span> on Premium
            </h2>

            {/* Description */}
            <p className="text-lg text-indigo-100 mb-8">
              Upgrade today and unlock priority listings, verified badges, and
              unlimited messages. Offer ends{' '}
              <span className="font-bold">June 30</span>!
            </p>

            {/* CTA Button & Timer */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate('/premium')}
                className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:scale-105"
              >
                Claim Your Discount →
              </button>

              {/* Countdown Timer */}
              <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-white font-mono">
                  <span className="font-bold">07</span>d :
                  <span className="font-bold">23</span>h :
                  <span className="font-bold">59</span>m
                </span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-indigo-100 text-sm">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Verified Profiles
              </div>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Secure Payments
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cities We Serve */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold dark:text-white text-black sm:text-4xl">
              Popular Cities
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl dark:text-white text-black sm:mt-4">
              Find roommates and listings in these hotspots
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'New York',
              'Los Angeles',
              'Chicago',
              'Austin',
              'Seattle',
              'Boston',
            ].map(city => (
              <div
                key={city}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                onClick={() =>
                  navigate(`/browseListing?city=${city.toLowerCase()}`)
                }
              >
                <h3 className="font-bold dark:text-white">{city}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  100+ listings
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
