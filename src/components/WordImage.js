import React from "react";

const WordImage = ({ source }) => {
  return (
    <div className='w-1/3 h-40 p-4'>
      <img src={source} alt='Images related to the searched word' className="w-full h-full object-cover" />
    </div>
  );
};

export default WordImage;
