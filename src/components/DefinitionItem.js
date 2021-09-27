import React from "react";
import MeaningBox from "./MeaningBox";
import PhoneticsBox from "./PhoneticsBox";

const DefinitionItem = ({ word, origin, phoneticsArr, meaningsArr, index }) => {
  return (
    <div className='m-4 p-4 flex-col'>
      <h1 className='text-5xl mb-4 flex items-center'>
        <span className='text-2xl mr-2'>({index}) </span>
        {word}
      </h1>
      {phoneticsArr.length > 0 &&
        phoneticsArr.map(
          (phonetic, idx) =>
            phonetic.audio && (
              <PhoneticsBox
                key={idx}
                link={phonetic.audio}
                text={phonetic.text}
              />
            )
        )}
      {origin && (
        <p className='mb-8'>
          <span className='font-bold text-lg'>Origin:</span> {origin}
        </p>
      )}

      {meaningsArr.length > 0 &&
        meaningsArr.map((meaning, idx) => (
          <MeaningBox
            key={idx}
            context={meaning.partOfSpeech}
            definitions={meaning.definitions}
          />
        ))}
    </div>
  );
};

export default DefinitionItem;
