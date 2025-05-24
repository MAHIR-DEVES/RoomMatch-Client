import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const BrowseCard = ({ post, index }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/cardDetails/${post._id}`);
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
    >
      <div className="relative">
        <img
          src={post.photo}
          alt={post.title}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
          <h3 className="text-xl font-semibold text-white dark:text-gray-100">
            {post.title}
          </h3>
        </div>
      </div>

      <div className="p-5 text-left">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {post.location}
            </p>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium">
              ${post.rentAmount}/mo &middot; {post.roomType}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <span className="flex gap-2 items-center">
              <FaHeart
                size={20}
                className={
                  post.likeCount > 0
                    ? 'text-red-500'
                    : 'text-gray-400 dark:text-gray-500'
                }
              />
              <p className="font-semibold text-gray-700 dark:text-gray-200">
                {post.likeCount}
              </p>
            </span>
            <button
              onClick={handleClick}
              className="mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white text-sm font-medium rounded-lg transition-colors duration-300"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BrowseCard;
