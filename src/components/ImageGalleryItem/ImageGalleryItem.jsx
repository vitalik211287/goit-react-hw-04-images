import React, { Component } from 'react';
import { GalleryList } from 'components/ImageGallery/ImageGallery.styled';
import { ImageGalleryItems, Img } from './ImageGalleryItem.styled';


const ImageGalleryItem = ({ pageInfo, modalClick }) => {
  return (
    <GalleryList>
      {pageInfo.map(image => {
        const { id, tags, webformatURL, largeImageURL } = image;
        return (
          <ImageGalleryItems key={id} onClick={() => modalClick(largeImageURL)}>
            <Img src={webformatURL} alt={tags} id={id} />
          </ImageGalleryItems>
        );
      })}
    </GalleryList>
  );
};
export default ImageGalleryItem;
