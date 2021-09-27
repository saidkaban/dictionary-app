import React from "react";

const PhoneticsBox = ({ link, text }) => {
  return (
    <div className='flex mb-4 items-center'>
      <a
        href={link}
        target='_blank'
        rel='noreferrer'
        className='border-2 rounded-2xl p-2 hover:bg-black hover:text-white hover:border'
      >
        Listen
      </a>
      <p className='ml-4'>{text}</p>
    </div>
  );
};

export default PhoneticsBox;
