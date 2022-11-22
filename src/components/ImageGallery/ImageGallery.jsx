import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';

export default class ImageGallery extends Component {
  render() {
    return (
      <div>
        {this.props.pageInfo && (
          <ImageGalleryItem
            modalClick={this.props.modalClick  }
            pageInfo={this.props.pageInfo}
           />
        )}
      </div>
    );
  }
}
