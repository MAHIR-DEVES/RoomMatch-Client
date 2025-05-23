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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="text-indigo-800 text-xl">Loading your listings...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto scroll">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-indigo-800 mb-6">
            My Listings {myPosts.length}
          </h1>

          {myPosts.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <p className="text-gray-600">
                You haven't created any listings yet.
              </p>
            </div>
          ) : (
            <div className="bg-white shadow overflow-hidden rounded-lg ">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-indigo-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-indigo-800 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-indigo-800 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-indigo-800 uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-indigo-800 uppercase tracking-wider">
                        Room Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-indigo-800 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {myPosts.map(tableData => (
                      <MyListingTable
                        key={tableData._id}
                        post={tableData}
                        myPosts={myPosts}
                        setMyPosts={setMyPosts}
                      ></MyListingTable>
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
