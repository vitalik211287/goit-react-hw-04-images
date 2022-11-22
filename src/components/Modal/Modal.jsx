import React, { Component } from 'react';
import { Backdrop, Modals, Image } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.escapeClickHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.escapeClickHandler);
  }

  escapeClickHandler = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <Modals>
          <Image src={this.props.largeImageURL} />
        </Modals>
      </Backdrop>,
      modalRoot
    );
  }
}
