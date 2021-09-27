import React from "react";
import { ClockLoader } from "react-spinners";

import DefinitionItem from "./DefinitionItem";
import Card from "./UI/Card";

const DefinitionBox = ({ definition, searching }) => {
  return (
    <Card>
      {definition.length === 0 || searching ? (
        <div className='h-60 flex items-center justify-center'>
          <ClockLoader />
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
