import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaRegHeart } from 'react-icons/fa';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';
import BrowseCard from '../../Components/BrowseCard/BrowseCard';

const BrowseListing = () => {
  TabTitle('Hood Happenings | Blogs');

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://assigment-10-server-two.vercel.app/AllPosts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Failed to load blog data:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12  lg::px-16">
      <div className="">
        {/* <div className="hero  py-3 lg:py-20">
          <div className="lg:hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co.com/Q7SXpsDZ/Untitled-design-4.png"
              className="lg:max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-3xl mt-2 md:mt-0 lg:text-5xl font-bold">
                Encompasses the entire process !
              </h1>
              <p className="py-6">
                Event management encompasses the entire process of planning,
                organizing, and executing events, from conception to conclusion.
                It involves various aspects, including venue selection,
                budgeting, logistics, marketing, and post-event analysis.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div> */}
      </div>
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-3xl md:text-3xl text-left lg:text-5xl font-bold text-indigo-800 mb-10 md:text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Latest From Our Post
        </motion.h1>

        <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2">
          {posts.map(post => (
            <BrowseCard post={post} key={post._id}></BrowseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseListing;
