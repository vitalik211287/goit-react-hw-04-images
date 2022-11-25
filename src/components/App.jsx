import React, { Component } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
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
    pageInfo: '',
  };

  fetchImages = () => {
    const API_KEY = '30108062-264069135fbcff220b3f8c28b';
    const URL = 'https://pixabay.com/api/?key=';
    const { page, pageName, images } = this.state;
    this.setState({ loading: true });
    setTimeout(() => {
      fetch(
        `${URL}${API_KEY}&q=${pageName}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
      )
        .then(res => res.json())
        .then(pageInfo => {
          if (page * 12 >= pageInfo.totalHits && pageInfo.totalHits > 0) {
            toast.error(
              "We're sorry, but you've reached the end of search results."
            );
          }
          if (pageInfo.totalHits === 0) {
            toast.error(
              'Sorry, there are no images matching your search query. Please try again.'
            );
          }
          this.setState({ pageInfo });
        })
        .then(() =>
          this.setState(({ pageInfo }) => ({
            images: [...images, ...pageInfo.hits],
          }))
        )
        .finally(() => this.setState({ loading: false }));
    }, 0);
  };

  formSubmitHandler = ({ pageName }) => {
    this.setState({ pageName, page: 1, images: [] });
  };

  toggleModal = e => {
    this.setState(({ largeImageURL }) => ({ largeImageURL: !largeImageURL }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, pageName} = this.state;
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
    const { images, loading, largeImageURL, page } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.formSubmitHandler} state={this.state} />
        <ImageGallery
          modalClick={this.modalClick}
          pageInfo={images}
          toggleModal={this.toggleModal}
        />
        {images.length >= page * 12 && <Button onClick={this.pageCounter} />}
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
