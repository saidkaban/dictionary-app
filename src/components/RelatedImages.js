import React, { useState, useEffect } from "react";
import { createClient } from "pexels";

import WordImage from "./WordImage";

const RelatedImages = ({ searching, notFound, enteredWord }) => {
  const [photos, setPhotos] = useState([]);
  const client = createClient(process.env.REACT_APP_DICTIONARY_IMAGES_API_KEY);

  useEffect(() => {
    const identifier = setTimeout(async () => {
      const res = await client.photos.search({
        query: enteredWord,
        per_page: 9,
      });

      const photosArray = res?.photos.map((photo) => photo.src.small);
      setPhotos(photosArray);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enteredWord]);

  return (
    <div className='flex flex-wrap mb-12'>
      {searching || notFound ? (
        <></>
      ) : photos.length > 0 ? (
        photos.map((photo, idx) => <WordImage key={idx} source={photo} />)
      ) : (
        <></>
      )}
    </div>
  );
};

export default RelatedImages;
