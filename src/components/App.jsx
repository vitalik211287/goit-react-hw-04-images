import React, { Component } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Modal from './Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    pageName: '',
    page: 1,
    images: [],
    loading: false,
    largeImageURL: '',
  };

  fetchImages = () => {
    const API_KEY = '30108062-264069135fbcff220b3f8c28b';
    const URL = 'https://pixabay.com/api/?key=';
    const { page, pageName, images, loading, id } = this.state;
    this.setState({ loading: true });
    setTimeout(() => {
      fetch(
        `${URL}${API_KEY}&q=${pageName}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
      )
        .then(res => res.json())
        .then(pageInfo => this.setState({ pageInfo }))
        .then(() =>
          this.setState(({ pageInfo }) => ({
            images: [...images, ...pageInfo.hits],
          }))
        )
        .finally(() => this.setState({ loading: false }));
    }, 1000);
  };

  formSubmitHandler = ({ pageName }) => {
    this.setState({ pageName, page: 1, images: [] });
  };

  toggleModal = e => {
    this.setState(({ largeImageURL }) => ({ largeImageURL: !largeImageURL }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, pageName, images, loading } = this.state;
    if (prevState.pageName !== pageName || prevState.page !== page) {
      this.fetchImages();
    }
  }

  pageCounter = () => {
    this.setState({ page: this.state.page + 1 });
  };
  modalClick = largeImageURL => {
    this.setState({ largeImageURL });
  };

  render() {
    const { images, loading, largeImageURL } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.formSubmitHandler} state={this.state} />
        <ImageGallery
          modalClick={this.modalClick}
          pageInfo={images}
          toggleModal={this.toggleModal}
        />
        {images.length > 0 && <Button onClick={this.pageCounter} />}
        {loading && <Loader />}
        {largeImageURL && (
          <Modal
            toggleModal={this.toggleModal}
            largeImageURL={this.state.largeImageURL}
          />
        )}
        <ToastContainer autoClose={3000} theme="colored" />
      </div>
    );
  }
}
