import React, { use, useState } from 'react';
import { TabTitle } from '../../Layouts/Utils/DynamicTitle/DynamicTitle';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const AddToFindRoommate = () => {
  const { user } = use(AuthContext);
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    rentAmount: '',
    roomType: 'Single',
    lifestylePreferences: [],
    description: '',
    contactInfo: '',
    email: '',
    name: '', // Changed from password to name
    availability: 'available',
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
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = e => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          lifestylePreferences: [...prev.lifestylePreferences, value],
        };
      } else {
        return {
          ...prev,
          lifestylePreferences: prev.lifestylePreferences.filter(
            item => item !== value
          ),
        };
      }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const postData = Object.fromEntries(formData.entries());
    // send data form db
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  TabTitle('Hood Happenings | Contact ');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 md:px-6 py-12 flex flex-col justify-center">
      {/*  */}
      <div className="w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Roommate Listing Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Looking for a roommate in NYC"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Neighborhood or address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="rentAmount">
              Rent Amount ($)
            </label>
            <input
              type="number"
              id="rentAmount"
              name="rentAmount"
              value={formData.rentAmount}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="roomType">
              Room Type
            </label>
            <select
              id="roomType"
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {roomTypes.map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Lifestyle Preferences
            </label>
            <div className="grid grid-cols-2 gap-2">
              {lifestyleOptions.map(option => (
                <div key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`pref-${option}`}
                    value={option}
                    checked={formData.lifestylePreferences.includes(option)}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={`pref-${option}`}
                    className="ml-2 text-gray-700"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell potential roommates about the place, your preferences, etc."
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="contactInfo">
              Contact Information
            </label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              placeholder="Phone number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* photo */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Your photo
            </label>
            <input
              type="text"
              id="name"
              name="photo"
              placeholder="Your photo Url"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Name Field (Replaced Password) */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={user?.displayName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user?.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Availability</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="availability"
                  value="available"
                  checked={formData.availability === 'available'}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Available</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="availability"
                  value="not available"
                  checked={formData.availability === 'not available'}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Not Available</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Listing
          </button>
        </form>
      </div>

      {/* Purple footer bar mimic */}
      <div className="h-20 bg-purple-700 mt-16 rounded-t-xl text-2xl text-white flex items-center justify-center">
        <h2 className="font-bold" style={{ fontFamily: '-moz-initial' }}>
          RoomMatch{' '}
        </h2>
      </div>
    </div>
  );
};

export default AddToFindRoommate;
