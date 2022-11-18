import React, { Component } from 'react';
import { GalleryList, ImageGalleryItem, Img } from './ImageGallery.styled';

export default class ImageGallery extends Component {
  state = {
    pageInfo: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const API_KEY = '30108062-264069135fbcff220b3f8c28b';
    const URL = 'https://pixabay.com/api/?key=';
    if (prevProps.state !== this.props.state) {
      fetch(
        `${URL}${API_KEY}&q=${this.props.state}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(pageInfo => this.setState({ pageInfo }));
    }
  }
  render() {
    return (
      <div>
        {this.state.pageInfo && (
          <GalleryList>
            {this.state.pageInfo.hits.map(
              ({ id, tags, webformatURL }) => {
                console.log(webformatURL);
                return (
                  <ImageGalleryItem key={id}>
                    <Img src={webformatURL} alt={tags} />
                  </ImageGalleryItem>
                );
              }
            )}
          </GalleryList>
        )}
      </div>
    );
  }
}
