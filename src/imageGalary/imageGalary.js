import React, { useState, useEffect } from 'react';
import styles from './imageGalary.module.css';

const ImageGalary = () => {
  const [imgList, setImgList] = useState(null);

  useEffect(()=>{
    fetch("/api/images")
      .then(data => data.json())
      .then(data => setImgList(data));
  }, [])

  return (
    <div>
      <div className={styles.imageContainer}>
        { imgList && imgList.map((imgSrc) => 
          <img src={"/api/images/" + imgSrc} key={imgSrc} /> )}
      </div>
    </div>
  );
};

export default ImageGalary;
