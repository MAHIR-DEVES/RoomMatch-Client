import React from 'react';
import Slider from '../../Components/Slider/Slider';
import { useLoaderData, useNavigate } from 'react-router';
import Cards from '../../Components/Cards/Cards';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';

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
            Restaurants Events
          </span>
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-black mb-4">
            Available Post Section
          </h2>
          <p className="text-lg dark:text-white text-blackmax-w-2xl mx-auto">
            Explore the most popular restaurant posts in your area
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <div className="py-16 bg-white dark:bg-gray-800 ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold dark:text-white text-black sm:text-4xl">
                Featured Restaurants
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl dark:text-white text-black sm:mt-4">
                Discover top-rated venues for your next event or dining
                experience
              </p>
            </div>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Restaurant Card 1 */}
              <div className="group relative ">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none ">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Fine dining restaurant"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium dark:text-white text-black">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        The Gourmet Experience
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Fine Dining • $$$
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

              {/* Restaurant Card 2 */}
              <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Italian restaurant"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium dark:text-white text-black">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        Bella Italia
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Italian • $$</p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-gray-600">4.7</span>
                  </div>
                </div>
              </div>

              {/* Restaurant Card 3 */}
              <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGRlc2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="Asian fusion restaurant"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium dark:text-white text-black">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        East Meets West
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Asian Fusion • $$$
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

              {/* Restaurant Card 4 */}
              <div className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="Steakhouse"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium dark:text-white text-black">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        The Prime Cut
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Steakhouse • $$$$
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
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => navigate('/restaurants')}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
              >
                View All Restaurants
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
      <div className="relative my-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co.com/9995hrR2/images-2.jpg"
            alt="Tech background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center  p-8">
          <div className="lg:flex items-center">
            <div className="max-w-4xl w-full">
              <div className="text-red-500 font-mono text-lg mb-2 tracking-widest">
                May 15-18, 2023
              </div>

              <h1 className="text-5xl sm:text-7xl md:text-5xl font-bold mb-8 leading-tight">
                <span className="block text-white">LIVEWORX</span>
                <span className="block text-red-500">IS BACK</span>
              </h1>

              <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-3xl leading-relaxed">
                Save the code for WTCs preview errands over dedicated to digital
                transformation for the hydraulic enterprise. Learn how you can
                create enterprise value, empower greater worker productivity,
                and make the world a better place through advanced technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <button className="bg-red-600 hover:bg-red-700 text-white py-4 px-8 text-lg font-bold transition-all duration-300 transform hover:scale-105">
                  Sign Up For Arrangements →
                </button>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <p className="text-red-500 font-bold text-lg tracking-wider">
                  CALL FOR PAPERS IS OPEN
                </p>
                <p className="text-gray-300 font-mono">
                  Submit your Presentation/Installed
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-10 lg:mt-0">
              <img
                className="lg:w-4xl"
                src="https://i.ibb.co.com/Q7SXpsDZ/Untitled-design-4.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
