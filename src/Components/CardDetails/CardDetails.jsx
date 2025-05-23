import { useLoaderData } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';

const CardDetails = () => {
  TabTitle('RoomMatch - Card Details');
  const post = useLoaderData();
  const [showContact, setShowContact] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likeCount || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLike = async () => {
    try {
      const newLikeCount = likeCount + 1;
      setLikeCount(newLikeCount);
      setIsLiked(true);
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
        setIsLiked(false);
        throw new Error(data.message || 'Failed to update like count');
      }

      setLikeCount(data.likeCount);
    } catch (error) {
      console.error('Error updating like:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card w-full max-w-4xl bg-white dark:bg-gray-400 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image Section */}
            <div className="md:w-1/3">
              <figure>
                <img
                  src={post.photo}
                  alt={post.title}
                  className="w-full h-64 md:h-full object-cover rounded-lg"
                />
              </figure>
            </div>

            {/* Content Section */}
            <div className="md:w-2/3 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="badge badge-primary">{post.roomType}</div>
                  <h2 className="card-title text-2xl mt-2">{post.title}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleLike}
                    className="p-1 focus:outline-none"
                    aria-label="Like this post"
                  >
                    <FaRegHeart
                      className={`text-2xl ${
                        isLiked ? 'text-red-500' : 'text-gray-500'
                      } hover:text-red-500 transition-colors`}
                    />
                  </button>
                  <span className="text-gray-700 dark:text-gray-200">
                    {likeCount}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-200">
                {post.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Location */}
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-gray-500"
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
                  <span className="text-gray-700 dark:text-gray-200">
                    {post.location}
                  </span>
                </div>

                {/* Rent */}
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-gray-500"
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
                  <span className="text-gray-700 dark:text-gray-200">
                    ${post.rentAmount}/month
                  </span>
                </div>

                {/* Contact */}
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-gray-500"
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
                  {showContact ? (
                    <span className="text-gray-700 dark:text-gray-200">
                      {post.contactInfo}
                    </span>
                  ) : (
                    <button
                      onClick={() => setShowContact(true)}
                      className="link link-primary"
                    >
                      Show Contact
                    </button>
                  )}
                </div>

                {/* Posted By */}
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-gray-500"
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
                  <span className="text-gray-700 dark:text-gray-200">
                    {post.name}
                  </span>
                </div>
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
          <div className="modal-box bg-white dark:bg-gray-600">
            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">
              Thanks for your like!
            </h3>
            <p className="py-4 text-gray-700 dark:text-gray-200">
              This post now has {likeCount} {likeCount === 1 ? 'like' : 'likes'}
            </p>
            <div className="modal-action">
              <button className="btn" onClick={() => setIsModalOpen(false)}>
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
