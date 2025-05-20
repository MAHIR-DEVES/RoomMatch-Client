import React from 'react';
import { motion } from 'framer-motion';
import { FaRegHeart } from 'react-icons/fa';
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
        <p className="text-gray-600 text-sm mb-4">{post.location}</p>
        <div className="text-sm text-gray-500">
          <span>{post.rentAmount}</span> &middot; <span>{post.roomType}</span>
        </div>
        <div className="flex justify-between items-center">
          <button onClick={handleClick} className="btn btn-primary mt-2">
            Details
          </button>
          <button className=" ">
            <FaRegHeart size={25} color="red" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BrowseCard;
