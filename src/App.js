import { useState } from "react";

import LookUpForm from "./components/LookUpForm";
import DefinitionBox from "./components/DefinitionBox";
import RelatedImages from "./components/RelatedImages";

const App = () => {
  const [definition, setDefinition] = useState("");
  const [searching, setSearching] = useState(false);

  return (
    <div className='w-2/5 m-auto'>
      <h1 className='text-6xl p-8'>Dictionary App</h1>
      <LookUpForm setDefinition={setDefinition} setSearching={setSearching} />
      <DefinitionBox definition={definition} searching={searching} />
      <RelatedImages />
    </div>
  );
};

export default App;
