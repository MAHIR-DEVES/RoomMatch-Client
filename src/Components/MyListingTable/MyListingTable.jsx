import React from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MyListingTable = ({ post, setMyPosts, myPosts }) => {
  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://assigment-10-server-two.vercel.app/posts/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              const remainingData = myPosts.filter(pot => pot._id !== id);
              setMyPosts(remainingData);
              Swal.fire({
                title: 'Deleted!',
                text: 'Your listing has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };

  return (
    <motion.tr
      key={post._id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        backgroundColor: 'rgba(99, 102, 241, 0.05)',
      }}
      className="dark:hover:bg-gray-600/50"
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={post.photo || 'https://via.placeholder.com/150'}
              alt={post.title}
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {post.title}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {post.description?.substring(0, 30)}...
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 dark:text-gray-100 font-medium">
          ${post.rentAmount || 'N/A'}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 dark:text-gray-100">
          {post.location || 'N/A'}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
            ${
              post.availability === 'available'
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
            }`}
        >
          {post.roomType || 'unknown'}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <Link to={`/updatePosts/${post._id}`}>
          <button className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 mr-4 cursor-pointer transition-colors">
            Update
          </button>
        </Link>
        <button
          onClick={() => handleDelete(post._id)}
          className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 cursor-pointer transition-colors"
        >
          Delete
        </button>
      </td>
    </motion.tr>
  );
};

export default MyListingTable;
