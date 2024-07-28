import React, { useState } from 'react';

export const StarRating = ({ totalStars = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
  
    return (
      <div className="flex space-x-1">
        {[...Array(totalStars)].map((_, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={`text-2xl ${index <= (hover || rating) ? "text-yellow-400" : "text-gray-300"}`}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              &#9733;
            </button>
          );
        })}
      </div>
    );
  };