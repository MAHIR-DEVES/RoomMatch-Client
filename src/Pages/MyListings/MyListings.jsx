import React, { use, useEffect, useState } from 'react';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';
import { motion } from 'framer-motion';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import MyListingTable from '../../Components/MyListingTable/MyListingTable';
import { toast } from 'react-toastify';

const MyListings = () => {
  TabTitle('RoomMatch - My Listings');
  const { user } = use(AuthContext);
  const [myPosts, setMyPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://assigment-10-server-two.vercel.app/my-posts/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setMyPosts(data);
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
          Loading your listings...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#eef4ff] dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-6">
            My Listings ({myPosts.length})
          </h1>

          {myPosts.length === 0 ? (
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                You haven't created any listings yet.
              </p>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-700 shadow overflow-hidden rounded-lg transition-all duration-300">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                  <thead className="bg-indigo-50 dark:bg-gray-600">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-indigo-800 dark:text-indigo-200 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-indigo-800 dark:text-indigo-200 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-indigo-800 dark:text-indigo-200 uppercase tracking-wider">
                        Location
                      </th>

                      <th className="px-6 py-3 text-left text-xs font-medium text-indigo-800 dark:text-indigo-200 uppercase tracking-wider">
                        Room Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-indigo-800 dark:text-indigo-200 uppercase tracking-wider">
                        Avertable
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-indigo-800 dark:text-indigo-200 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
                    {myPosts.map(tableData => (
                      <MyListingTable
                        key={tableData._id}
                        post={tableData}
                        myPosts={myPosts}
                        setMyPosts={setMyPosts}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MyListings;
