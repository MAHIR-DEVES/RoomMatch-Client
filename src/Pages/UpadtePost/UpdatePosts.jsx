import React, { use, useState } from 'react';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLoaderData, useNavigate } from 'react-router';

const UpdatePosts = () => {
  const { user } = use(AuthContext);
  const loadedPost = useLoaderData();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: loadedPost.title,
    photo: loadedPost.photo,
    location: loadedPost.location,
    rentAmount: loadedPost.rentAmount,
    roomType: loadedPost.roomType,
    lifestylePreferences: loadedPost.lifestylePreferences || [],
    description: loadedPost.description,
    contactInfo: loadedPost.contactInfo,
    email: user?.email || loadedPost.email,
    name: user?.displayName || loadedPost.name,
    availability: loadedPost.availability,
  });

  const roomTypes = ['Single', 'Shared', 'Studio', 'Other'];
  const lifestyleOptions = [
    'Pets allowed',
    'No pets',
    'Smoking allowed',
    'Non-smoking',
    'Night owl',
    'Early riser',
    'Quiet',
    'Social',
  ];

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = e => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      lifestylePreferences: checked
        ? [...prev.lifestylePreferences, value]
        : prev.lifestylePreferences.filter(item => item !== value),
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://assigment-10-server-two.vercel.app/posts/${loadedPost._id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.modifiedCount > 0) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Post updated successfully!',
        });
        navigate('/myListings');
      } else {
        Swal.fire({
          icon: 'info',
          title: 'No Changes',
          text: 'No data was changed.',
        });
      }
    } catch (error) {
      console.error('Error updating post:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong while updating!',
      });
    }
  };

  TabTitle('Hood Happenings - Update data');

  return (
    <div className="min-h-screen bg-[#eef4ff] dark:bg-gray-800 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Form Card */}
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transition-all duration-300">
          {/* Header */}
          <div className="bg-indigo-600 dark:bg-indigo-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white text-center">
              Update Roommate Listing
            </h2>
          </div>

          {/* Form Content */}
          <div className="p-6 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Looking for a roommate in NYC"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:bg-gray-600 dark:text-white transition"
                  required
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Neighborhood or address"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:bg-gray-600 dark:text-white transition"
                  required
                />
              </div>

              {/* Rent Amount */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Rent Amount ($)
                </label>
                <input
                  type="number"
                  name="rentAmount"
                  value={formData.rentAmount}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:bg-gray-600 dark:text-white transition"
                  required
                />
              </div>

              {/* Room Type */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Room Type
                </label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:bg-gray-600 dark:text-white transition"
                >
                  {roomTypes.map(type => (
                    <option
                      key={type}
                      value={type}
                      className="dark:bg-gray-700"
                    >
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Lifestyle Preferences */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Lifestyle Preferences
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {lifestyleOptions.map(option => (
                    <div key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`pref-${option}`}
                        value={option}
                        checked={formData.lifestylePreferences.includes(option)}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600 rounded dark:bg-gray-600 dark:checked:bg-indigo-500"
                      />
                      <label
                        htmlFor={`pref-${option}`}
                        className="ml-2 text-gray-700 dark:text-gray-300"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:bg-gray-600 dark:text-white transition"
                  placeholder="Tell potential roommates about the place, your preferences, etc."
                ></textarea>
              </div>

              {/* Contact Info */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Contact Information
                </label>
                <input
                  type="text"
                  name="contactInfo"
                  value={formData.contactInfo}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:bg-gray-600 dark:text-white transition"
                  required
                />
              </div>

              {/* Photo URL */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  value={formData.photo}
                  onChange={handleChange}
                  placeholder="Your photo URL"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:bg-gray-600 dark:text-white transition"
                  required
                />
              </div>

              {/* Name */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:bg-gray-600 dark:text-white transition"
                  required
                />
              </div>

              {/* Email (readonly) */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-gray-100 dark:bg-gray-600 dark:text-gray-300 cursor-not-allowed"
                  required
                  readOnly
                />
              </div>

              {/* Availability */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Availability
                </label>
                <div className="flex space-x-6">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="availability"
                      value="available"
                      checked={formData.availability === 'available'}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 dark:text-indigo-400"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">
                      Available
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="availability"
                      value="not available"
                      checked={formData.availability === 'not available'}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 dark:text-indigo-400"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">
                      Not Available
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  Update Listing
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 bg-indigo-700 dark:bg-indigo-800 rounded-t-xl text-white py-4 text-center">
          <h2 className="text-2xl font-bold">RoomMatch</h2>
        </div>
      </div>
    </div>
  );
};

export default UpdatePosts;
