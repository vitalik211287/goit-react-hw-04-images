import React, { Component } from 'react';
import { Button, ButtonLabel, Form, Header, Input } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    pageName: '',
     };

  handleInputChange = e => {
    this.setState({ pageName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.pageName.trim() === '') {
      toast.error('Search field is empty!');
      return;
    }
    this.props.onSubmit(this.state);
      this.setState({ pageName: '' })
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <AiOutlineSearch size="26px" />
            <ButtonLabel>Поиск</ButtonLabel>
          </Button>
          <Input
            value={this.state.pageName}
            type="text"
            className="input"
            autocomplete="off"
            onChange={this.handleInputChange}
            placeholder="Search images and photos"
          ></Input>
        </Form>
      </Header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  onChange:PropTypes.func,
};