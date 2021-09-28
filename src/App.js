import { useState } from "react";

import LookUpForm from "./components/LookUpForm";
import DefinitionBox from "./components/DefinitionBox";
import RelatedImages from "./components/RelatedImages";

const App = () => {
  const [enteredWord, setEnteredWord] = useState("hello");
  const [definition, setDefinition] = useState("");
  const [searching, setSearching] = useState(false);
  const [notFound, setNotFound] = useState(false);  

  return (
    <div className='w-2/5 m-auto'>
      <h1 className='text-6xl p-8'>Dictionary App</h1>
      <LookUpForm
        setDefinition={setDefinition}
        setSearching={setSearching}
        setNotFound={setNotFound}
        setEnteredWord={setEnteredWord}
        enteredWord={enteredWord}
      />
      <DefinitionBox
        definition={definition}
        searching={searching}
        notFound={notFound}
        enteredWord={enteredWord}
      />
      <RelatedImages />
    </div>
  );
};

export default App;
