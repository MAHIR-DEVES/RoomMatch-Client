import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const MyListingTable = ({ post, setMyPosts, myPosts }) => {
  const handelDelete = id => {
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
              const reamingData = myPosts.filter(pot => pot._id !== id);
              setMyPosts(reamingData);
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };

  //

  const handelEdit = () => {
    console.log('edit');
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
            <div className="text-sm font-medium text-gray-900">
              {post.title}
            </div>
            <div className="text-sm text-gray-500">
              {post.description?.substring(0, 30)}...
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 font-medium">
          ${post.rentAmount || 'N/A'}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{post.location || 'N/A'}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${
                              post.availability === 'available'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
        >
          {post.roomType || 'unknown'}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <Link to={`/updatePosts/${post._id}`}>
          <button className="text-indigo-600 hover:text-indigo-900 mr-4 cursor-pointer">
            Edit
          </button>
        </Link>
        <button
          onClick={() => handelDelete(post._id)}
          className="text-red-600 hover:text-red-900 cursor-pointer"
        >
          Delete
        </button>
      </td>
    </motion.tr>
  );
};

export default MyListingTable;
