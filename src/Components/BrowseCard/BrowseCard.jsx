import React from 'react';
import { motion } from 'framer-motion';
import { FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const BrowseCard = ({ post, index }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/cardDetails/${post._id}`);
  };

  return <h1>hello browse</h1>;
};

export default BrowseCard;
