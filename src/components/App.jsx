import React from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';

export function App() {
  const [pageName, setPageName] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  const fetchImages = () => {
    const API_KEY = '30108062-264069135fbcff220b3f8c28b';
    const URL = 'https://pixabay.com/api/?key=';

    setLoading(true);
    setTimeout(() => {
      fetch(
        `${URL}${API_KEY}&q=${pageName}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
      )
        .then(res => res.json())
          .then(pageInfo =>
          {
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
           setImages([...images, ...pageInfo.hits])
          })
         .finally(setLoading(false));
    }, 500);
  };

  const formSubmitHandler = pageName => {
    setPageName(pageName);
    setPage(1);
    setImages([]);
  };

  const toggleModal = e => {
    setLargeImageURL(!largeImageURL);
  };

  useEffect(() => {
    if (!pageName ?? page !== 1) {
      return;
    } else fetchImages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageName, page]);

  const pageCounter = () => {
    setPage(page + 1);
  };
  const modalClick = largeImageURL => {
    setLargeImageURL(largeImageURL);
  };

  return (
    <div>
      <Searchbar onSubmit={formSubmitHandler} />
      <ImageGallery
        modalClick={modalClick}
        pageInfo={images}
        toggleModal={toggleModal}
      />
      {images.length >= page * 12 && <Button onClick={pageCounter} />}
      {loading && <Loader />}
      {largeImageURL && (
        <Modal toggleModal={toggleModal} largeImageURL={largeImageURL} />
      )}
      <ToastContainer autoClose={3000} theme="colored" />
    </div>
  );
}
