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
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
    >
      <img
        src={post.photo}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 text-left">
        <h3 className="text-xl font-semibold text-indigo-700 mb-2">
          {post.title}
        </h3>

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            <p className="text-gray-600 text-sm mb-4">{post.location}</p>
            <span>{post.rentAmount}</span> &middot; <span>{post.roomType}</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="flex gap-2">
              {' '}
              <FaHeart size={25} color="red" />{' '}
              <p className=" font-semibold">{post.likeCount}</p>
            </span>
            <button onClick={handleClick} className="btn btn-primary mt-2">
              Details
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BrowseCard;
