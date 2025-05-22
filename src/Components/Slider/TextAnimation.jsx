import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TextAnimation = () => {
  return (
    <h1 className="text-2xl md:text-5xl font-bold ">
      Find Your Perfect Roommate{' '}
      <span className="font-bold text-blue-400">
        <Typewriter
          words={['in Minutes!', 'Without the Hassle!', 'In No Time!']}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h1>
  );
};

export default TextAnimation;
