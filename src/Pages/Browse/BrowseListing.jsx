import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaRegHeart } from 'react-icons/fa';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';
import BrowseCard from '../../Components/BrowseCard/BrowseCard';
import { useNavigate } from 'react-router';
import axios from 'axios';

const BrowseListing = () => {
  TabTitle('Hood Happenings - Browse Listing');

  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(1);
  const [availability, setAvailability] = useState('available');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://assigment-10-server-two.vercel.app/AllPosts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Failed to load blog data:', err));
  }, []);

  useEffect(() => {
    axios
      .get('https://assigment-10-server-two.vercel.app/toggleAscending', {
        params: {
          toggle: toggle,
        },
      })
      .then(res => setPosts(res?.data))
      .catch(err => {
        console.log(err);
      });
  }, [toggle]);

  useEffect(() => {
    axios
      .get('https://assigment-10-server-two.vercel.app/toggleAvailable', {
        params: {
          availability: availability,
        },
      })
      .then(res => {
        setPosts(res?.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [availability]);

  console.log(availability);

  return (
    <div className="min-h-screen bg-[#eef4ff] dark:bg-gray-800 mb-5 md:pb-0 md:py-12 md:px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Roommate Finder Hero Section */}
        <div className="hero py-8 lg:py-16 bg-indigo-50 dark:bg-gray-700 rounded-xl mb-12">
          <div className="md:flex md:gap-5 justify-between w-full items-center px-0 md:px-5">
            <div className="text-center lg:text-left mb-5 md:mb-0">
              <motion.h1
                className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Find Your Perfect{' '}
                <span className="text-indigo-600 dark:text-indigo-400">
                  Roommate
                </span>
              </motion.h1>
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Connect with compatible roommates who share your lifestyle,
                budget, and preferences. Whether you're looking for a place or
                someone to share yours, we make the process easy and safe.
              </motion.p>
              <motion.div
                className="md:flex"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <button
                  className=" py-3 px-8  bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={() => navigate('/myListings')}
                >
                  List Your Space
                </button>
                <button
                  className="px-8 py-3 ml-4 border border-indigo-600 text-indigo-600 dark:text-indigo-300 dark:border-indigo-400 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-600 transition-all duration-300"
                  onClick={() => navigate('/addToFindRoommate')}
                >
                  Add new post
                </button>
              </motion.div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt="Happy roommates sharing an apartment"
              className="lg:max-w-md rounded-lg shadow-2xl object-cover h-64 lg:h-96 w-full"
            />
          </div>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-700 dark:text-indigo-400 mb-10 text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Latest From Our Post
          </motion.h1>

          <div className="flex justify-between pb-5">
            <div className=""></div>
            <div className="flex items-center gap-4 ">
              <button
                onClick={() => setToggle(toggle === 1 ? -1 : 1)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors shadow-sm"
              >
                {toggle === 1 ? 'Ascending ↑' : 'Descending ↓'}
              </button>

              <div className="dropdown relative">
                <button
                  tabIndex={0}
                  role="button"
                  className="px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg shadow-sm flex items-center gap-2"
                >
                  Filter Posts
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <ul
                  tabIndex={0}
                  className="dropdown-content absolute top-12 right-0 menu rounded-lg w-52 p-2 shadow-lg bg-white border border-gray-100 z-10"
                >
                  <li className="hover:bg-gray-50 rounded-md">
                    <span
                      onClick={() => setAvailability('available')}
                      className="block px-4 py-2 text-gray-700 hover:text-indigo-600 cursor-pointer"
                    >
                      Available Posts
                    </span>
                  </li>
                  <li className="hover:bg-gray-50 rounded-md">
                    <span
                      onClick={() => setAvailability('not available')}
                      className="block px-4 py-2 text-gray-700 hover:text-indigo-600 cursor-pointer"
                    >
                      All Posts
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4 ">
            {posts.map((post, index) => (
              <BrowseCard post={post} key={post._id} index={index % 6} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BrowseListing;
