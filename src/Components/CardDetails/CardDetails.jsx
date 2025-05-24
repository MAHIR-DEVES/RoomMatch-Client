import { useLoaderData } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { use, useState } from 'react';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const CardDetails = () => {
  TabTitle('RoomMatch - Card Details');
  const user = use(AuthContext);
  const post = useLoaderData();

  const [showContact, setShowContact] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likeCount || 0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLike = async () => {
    try {
      if (user?.user?.email === post.email) return;
      const newLikeCount = likeCount + 1;
      setLikeCount(newLikeCount);

      setIsModalOpen(true);

      const response = await fetch(
        `https://assigment-10-server-two.vercel.app/posts/like/${post._id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        setLikeCount(likeCount);
        throw new Error(data.message || 'Failed to update like count');
      }

      setLikeCount(data.likeCount);
    } catch (error) {
      toast.error('Error updating like:', error);
    }
    setShowContact(true);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#eef4ff] dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transition-all duration-300">
        <div className="md:flex">
          {/* Image Section */}
          <div className="md:w-1/3">
            <img
              src={post.photo}
              alt={post.title}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 md:w-2/3 space-y-5">
            {/* Header with title and like button */}
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                  {post.roomType}
                </span>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mt-2">
                  {post.title}
                </h1>
              </div>
              <div className="flex items-center space-x-1">
                <button
                  onClick={handleLike}
                  className="p-1 focus:outline-none hover:scale-110 transition-transform"
                  aria-label="Like this post"
                >
                  <FaHeart
                    size={24}
                    className={likeCount > 0 ? 'text-red-500' : 'text-gray-400'}
                  />
                </button>
                <span className="text-gray-700 dark:text-gray-200 font-medium">
                  {likeCount}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300">
              {post.description}
            </p>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Location */}
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-indigo-50 dark:bg-gray-600">
                  <svg
                    className="w-5 h-5 text-indigo-600 dark:text-indigo-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-200">
                  {post.location}
                </span>
              </div>

              {/* Rent */}
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-indigo-50 dark:bg-gray-600">
                  <svg
                    className="w-5 h-5 text-indigo-600 dark:text-indigo-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-200">
                  ${post.rentAmount}/month
                </span>
              </div>

              {/* Contact */}
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-indigo-50 dark:bg-gray-600">
                  <svg
                    className="w-5 h-5 text-indigo-600 dark:text-indigo-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span
                  className={`cursor-pointer ${
                    showContact
                      ? 'text-gray-700 dark:text-gray-200'
                      : 'text-indigo-600 dark:text-indigo-300 hover:underline'
                  }`}
                  onClick={() => setShowContact(!showContact)}
                >
                  {showContact ? post.contactInfo : 'Show Contact'}
                </span>
              </div>

              {/* Posted By */}
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-indigo-50 dark:bg-gray-600">
                  <svg
                    className="w-5 h-5 text-indigo-600 dark:text-indigo-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-200">
                  {post.name}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Like Modal */}
        <input
          type="checkbox"
          id="like-modal"
          className="modal-toggle"
          checked={isModalOpen}
          onChange={() => {}}
        />
        <div className="modal">
          <div className="modal-box bg-white dark:bg-gray-700">
            <h3 className="font-bold text-lg text-gray-800 dark:text-white">
              Thanks for your like!
            </h3>
            <p className="py-4 text-gray-600 dark:text-gray-300">
              This post now has {likeCount} {likeCount === 1 ? 'like' : 'likes'}
            </p>
            <div className="modal-action">
              <button
                className="btn bg-indigo-600 hover:bg-indigo-700 text-white border-none"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
