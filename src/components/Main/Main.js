import { useEffect, useState } from 'react';
import SingleImageCard from '../SingleImageCard/SingleImageCard';
const API_KEY = process.env.REACT_APP_NASA_API_KEY;

function Main() {
  const API_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3000&page=1&api_key=${API_KEY}`;

  const [images, setImages] = useState([]);

  const [likeStatus, setLikeStatus] = useState(true);

  const _like = () => {
    setLikeStatus(likeStatus ? false : true);
    // console.log('liked');
    // console.log(likeStatus);
  };

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const firstValueFromData = Object.values(data);
        const firstItemFromArray = firstValueFromData[0];
        setImages(firstItemFromArray);
      } catch (error) {
        console.error(error);
      }
    };
    getImages();
  }, []);
  //   console.log(images);

  return (
    <div className="Main">
      {images.length > 0 ? (
        <>
          <SingleImageCard
            images={images}
            likeStatus={likeStatus}
            _like={_like}
          />
        </>
      ) : (
        <h2>Loading images...</h2>
      )}
    </div>
  );
}

export default Main;
