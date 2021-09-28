import React from "react";

const PhoneticsBox = ({ link, text }) => {
  return (
    <div className='flex mb-4 items-center justify-start'>
      <div>
        <audio controls>
          <source src={link} type='audio/mpeg' />
          Your browser does not support the audio element.
        </audio>
      </div>
      <p className='ml-4'>{text}</p>
    </div>
  );
};

export default PhoneticsBox;
