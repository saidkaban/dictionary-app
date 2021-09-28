import React from "react";
import { ClockLoader } from "react-spinners";

import DefinitionItem from "./DefinitionItem";
import Card from "./UI/Card";

const DefinitionBox = ({ definition, searching, notFound, enteredWord }) => {
  if (enteredWord.trim() === "") {
    return (
      <Card>
        <div className='h-60 flex items-center justify-center'>
          <h3 className='p-8'>Search a word to find its meaning!</h3>
        </div>
      </Card>
    );
  }
  return (
    <Card>
      {searching || definition.length === 0 ? (
        <div className='h-60 flex items-center justify-center'>
          <ClockLoader />
        </div>
      ) : notFound ? (
        <div className='h-60 flex items-center justify-center'>
          <h3 className='p-8'>Searched word couldn't be found!</h3>
        </div>
      ) : (
        definition.map((item, idx) => (
          <DefinitionItem
            key={idx}
            word={item.word}
            phoneticsArr={item.phonetics}
            origin={item.origin}
            meaningsArr={item.meanings}
            index={idx + 1}
          />
        ))
      )}
    </Card>
  );
};

export default DefinitionBox;
