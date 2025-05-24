import React from 'react';
import { useNavigate } from 'react-router';

const Cards = ({ card }) => {
  const { _id, title, photo, location, name } = card;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/cardDetails/${_id}`);
  };

  return (
    <div className="card bg-[#eef4ff] dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
      <figure className="relative overflow-hidden group">
        <img
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          src={photo}
          alt={name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 flex items-end">
          <h2 className="text-xl font-bold text-white drop-shadow-md">
            {name}
          </h2>
        </div>
      </figure>

      <div className="p-5 space-y-4">
        {/* Info Items */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <svg
              className="w-5 h-5 flex-shrink-0 text-indigo-600 dark:text-indigo-400" /* icon */
            />
            <span className="truncate">{title}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <svg
              className="w-5 h-5 flex-shrink-0 text-indigo-600 dark:text-indigo-400" /* icon */
            />
            <span className="truncate">{location}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <svg
              className="w-5 h-5 flex-shrink-0 text-indigo-600 dark:text-indigo-400" /* icon */
            />
            <span className="truncate">{title}</span>
          </div>
        </div>

        {/* Button */}
        <div className="pt-2">
          <button
            onClick={handleClick}
            className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
