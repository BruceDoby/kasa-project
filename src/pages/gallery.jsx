import React from 'react';
import data from '../../public/data.json'

function Gallery() {
  return (
    <div className="gallery">
      <div className='gallery__container'>
      {data.map((item) => (
        <div key={item.id} className="gallery__card">
          <img src={item.cover} alt={item.title} className="gallery__image" />
          <h2 className="gallery__title">{item.title}</h2>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Gallery;
