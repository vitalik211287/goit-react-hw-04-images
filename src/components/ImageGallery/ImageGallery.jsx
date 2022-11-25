import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
ImageGallery.propTypes = {
    modalClick: PropTypes.func,
    pageInfo: PropTypes.arrayOf(PropTypes.object)
};