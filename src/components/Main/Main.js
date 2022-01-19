import { useEffect } from 'react';
const API_KEY = process.env.REACT_APP_NASA_API_KEY;

function Main() {
  const API_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3000&page=1&api_key=${API_KEY}`;

  async function getImages() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getImages();
  }, []);
  return <div className="Main">This is main</div>;
}

export default Main;
