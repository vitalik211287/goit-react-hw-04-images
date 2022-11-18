import React, { Component } from 'react';
import { Button, ButtonLabel, Form, Header, Input } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';

export class Searchbar extends Component {
  state = {
    pageName: '',
  };

  handleInputChange = e => {
    // console.log(hits);
    this.setState({ pageName: e.currentTarget.value.toLowerCase() });
    console.log(this.state.pageName);
  };

  handleSubmit = e => {
      e.preventDefault();
      if (this.state.pageName.trim() === '') {
          alert('введите имя')
          return
      }
      this.props.onSubmit(this.state.pageName);
      this.reset()
  };

  reset = () => {
    this.setState({ pageName: '' });
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
            //   name="filter"
            //   value={value}
            placeholder="Search images and photos"
          ></Input>
        </Form>
      </Header>
    );
  }
}


