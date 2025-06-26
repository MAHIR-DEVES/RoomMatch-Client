import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const DashProfile = () => {
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(true);
  const [myItems, setItems] = useState([]);

  // Mock data - replace with actual data from your API
  const userStats = {
    joinedDate: 'January 15, 2023',
    lastActive: '2 hours ago',
    totalItems: 42,
    completedTasks: 28,
  };

  useEffect(() => {
    if (user?.email) {
      fetch(`https://assigment-10-server-two.vercel.app/my-posts/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setItems(data);
          setLoading(false);
        })
        .catch(error => {
          toast.error('Error fetching posts:', error);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#eef4ff] dark:bg-gray-800">
        <div className="text-indigo-600 dark:text-indigo-400 text-xl">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#eef4ff] dark:bg-gray-800 min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Profile
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage your account information and settings
          </p>
        </div>

        {/* Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile Info */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden">
            <div className="bg-blue-500 h-24 relative">
              {user?.photoURL && (
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-700 object-cover"
                  />
                </div>
              )}
            </div>
            <div className="pt-16 pb-6 px-6 text-center">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                {user?.displayName || 'No name provided'}
              </h2>
              <p className="text-blue-500 dark:text-blue-400">{user?.email}</p>

              <div className="mt-6 space-y-4 text-left">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    Joined {userStats.joinedDate}
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    Last active {userStats.lastActive}
                  </span>
                </div>
              </div>

              <button className="mt-6 w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-200">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Right Column - Stats and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 mr-4">
                    <svg
                      className="w-6 h-6 text-blue-500 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Total My Post
                    </p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">
                      {myItems.length}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30 mr-4">
                    <svg
                      className="w-6 h-6 text-green-500 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Completed Tasks
                    </p>
                    <p className="text-2xl font-bold text-gray-800 dark:text-white">
                      {userStats.completedTasks}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Details */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Account Details
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      defaultValue={user?.displayName?.split(' ')[0] || ''}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      defaultValue={user?.displayName?.split(' ')[1] || ''}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue={user?.email || ''}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    Bio
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Tell us about yourself..."
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-200">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashProfile;
