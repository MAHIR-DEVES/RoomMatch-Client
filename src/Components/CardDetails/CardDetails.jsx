import { useLoaderData } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';

const CardDetails = () => {
  const post = useLoaderData();
  const [showContact, setShowContact] = useState(false);

  const handleLike = id => {
    setShowContact(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto my-10 p-6  rounded-2xl shadow-xl border bg-gray-100 dark:bg-gray-300 border-gray-100 ">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/5">
            <img
              src={post.photo}
              alt={post.title}
              className="w-full h-80 md:h-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="md:w-3/5">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full mb-2">
                {post.roomType}
              </span>
              <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
              <p className="mt-3 text-gray-600 text-lg">{post.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-lg mr-4">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Location
                  </h3>
                  <p className="text-lg font-medium text-gray-900">
                    {post.location}
                  </p>
                </div>
              </div>

              {/* Rent */}
              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-lg mr-4">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Rent</h3>
                  <p className="text-lg font-medium text-gray-900">
                    {post.rentAmount}
                  </p>
                </div>
              </div>

              {/* Room Type */}
              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-lg mr-4">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Room Type
                  </h3>
                  <p className="text-lg font-medium text-gray-900">
                    {post.roomType}
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-lg mr-4">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Availability
                  </h3>
                  <p className="text-lg font-medium text-gray-900">
                    {post.availability}
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex items-start">
                <div className="p-2 rounded-lg mr-4">
                  <button onClick={() => handleLike(post._id)}>
                    <span className="flex items-center justify-center text-2xl cursor-pointer">
                      <FaRegHeart size={25} color="red" />
                    </span>
                  </button>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Contact</h3>
                  {showContact ? (
                    <p className="text-lg font-medium text-gray-900">
                      {post.contactInfo}
                    </p>
                  ) : (
                    <p className="text-lg font-medium text-blue-600 hover:text-blue-800">
                      Show Contact
                    </p>
                  )}
                </div>
              </div>

              {/* Posted By */}
              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-lg mr-4">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Posted by
                  </h3>
                  <p className="text-lg font-medium text-gray-900">
                    {post.name} ({post.email})
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
