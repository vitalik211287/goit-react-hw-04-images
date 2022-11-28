import React, { Component } from 'react';
import { Backdrop, Modals, Image } from './Modal.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';

const modalRoot = document.querySelector('#modal-root');
 function Modal(toggleModal, largeImageURL) {
   //  const  componentDidMount() {
   //     window.addEventListener('keydown', this.escapeClickHandler);
   //   }

   //  const  componentWillUnmount() {
   //     window.removeEventListener('keydown', this.escapeClickHandler);
   //   }

   const escapeClickHandler = e => {
     if (e.code === 'Escape') {
       toggleModal();
     }
   };

   const handleBackdropClick = e => {
     if (e.currentTarget === e.target) {
       toggleModal();
     }
   };

   return createPortal(
     <Backdrop onClick={handleBackdropClick}>
       <Modals>
         <Image src={largeImageURL} />
       </Modals>
     </Backdrop>,
     modalRoot
   );
 }

Modal.propTypes = {
  largeImageURL: PropTypes.string,
};
export default Modal