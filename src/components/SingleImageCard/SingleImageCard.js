import { useState } from 'react';

function SingleImageCard({ image, index }) {
  const [likeStatus, setLikeStatus] = useState(true);

  const _like = () => {
    setLikeStatus(likeStatus ? false : true);
    // console.log('liked');
    // console.log(likeStatus);
  };

  return (
    <div className="SingleImageCard single-image-container" key={index}>
      <div className="single-image-id">
        <h3>Image Name (ID): {image.id}</h3>
      </div>
      <div className="single-image-img">
        {<img src={image.img_src} alt="One of Mars Images" />}
      </div>
      <div className="single-image-date">
        <h3>Date: {image.earth_date}</h3>
      </div>
      <div className="like-button-div">
        {likeStatus ? (
          <button className="like-button" onClick={_like}>
            LIKE
          </button>
        ) : (
          <button className="like-button" onClick={_like}>
            DISLIKE
          </button>
        )}
      </div>
    </div>
  );
}

export default SingleImageCard;
