import React, { useState, useEffect } from "react";

let firstMount = true;

const LookUpForm = ({ setDefinition, setSearching }) => {
  const [enteredWord, setEnteredWord] = useState("hello");

  const inputChangeHandler = (event) => {
    setEnteredWord(event.target.value);
  };

  useEffect(() => {
    let identifier;
    if (firstMount) {
      (async function () {
        const res = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${enteredWord}`
        );
        const data = await res.json();
        setDefinition(data);
        firstMount = false;
      })();
    } else {
      setSearching(true);
      identifier = setTimeout(async () => {
        const res = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${enteredWord}`
        );
        const data = await res.json();
        setDefinition(data);
        setSearching(false);
      }, 500);
    }
    return () => {
      clearTimeout(identifier);
    };
  }, [enteredWord, setDefinition, setSearching]);

  return (
    <form
      className='flex flex-col m-4 p-4 mt-0 mb-12'
      onSubmit={(event) => event.preventDefault()}
    >
      <label htmlFor='wordLookUp'>What word do you want to look up?</label>
      <input
        id='wordLookUp'
        onChange={inputChangeHandler}
        value={enteredWord}
        className='w-3/6 p-3 mt-3 focus:outline-none'
      />
    </form>
  );
};

export default LookUpForm;
