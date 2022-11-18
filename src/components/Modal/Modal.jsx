import React, { Component } from 'react';
import { Backdrop, Modals } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
   }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
   }

  render() {
    return (
      <Backdrop>
        <Modals>{this.props.children}</Modals>
      </Backdrop>
    );
  }
}
