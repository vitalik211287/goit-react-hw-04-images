import React, { Component } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Modal from './Modal';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    pageName: '',
  };

  formSubmitHandler = pageName => {
    console.log(pageName);
    this.setState({ pageName });
  };

  render() {
    console.log(this.state.pageName);
    // console.log(this.formSubmitHandler());
    // console.log(data);
    return (
      <div>
        <Searchbar onSubmit={this.formSubmitHandler} />

        <ImageGallery state={this.state.pageName} />
        <Button />
        {/* <ImageGalleryItem />
        <Loader /> */}
        {/* <Modal /> */}
      </div>
    );
  }
}
