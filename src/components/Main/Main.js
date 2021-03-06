import { useEffect, useState } from 'react';
import SingleImageCard from '../SingleImageCard/SingleImageCard';
const API_KEY = process.env.REACT_APP_NASA_API_KEY;

function Main() {
  const API_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3000&page=1&api_key=${API_KEY}`;

  const [images, setImages] = useState([]);

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
          <h2>Images of Mars</h2>
          <div className="multiple-image-container">
            {images.map((image, index) => {
              return <SingleImageCard image={image} key={index} />;
            })}
          </div>
        </>
      ) : (
        <h2>Loading images...</h2>
      )}
    </div>
  );
}

export default Main;
