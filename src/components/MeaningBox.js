import React from "react";

const MeaningBox = ({ context, definitions }) => {
  return (
    <div className="mb-8">
      <h3 className="text-3xl mb-4">{context}</h3>
      {definitions.map((definition, idx) => (
        <div key={idx} className="mb-4">
          <p>
            <span className='font-bold'>{idx + 1}: </span>{" "}
            {definition.definition}
          </p>
          <p>
            <span className='font-bold'>Example:</span> {definition.example}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MeaningBox;
