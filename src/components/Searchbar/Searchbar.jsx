import React from 'react';
import { Button, ButtonLabel, Form, Header, Input } from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useState } from 'react';

export function Searchbar({ onSubmit, state }) {
  const [pageName, setPageName] = useState('');
  //   state = {
  //     pageName: '',
  //      };

  const handleInputChange = e => {
      setPageName(e.currentTarget.value.toLowerCase());
      console.log(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (pageName.trim() === '') {
      toast.error('Search field is empty!');
      return;
    }
    onSubmit(pageName);
    setPageName( '' );
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <AiOutlineSearch size="26px" />
          <ButtonLabel>Поиск</ButtonLabel>
        </Button>
        <Input
          value={pageName}
          type="text"
          className="input"
          autocomplete="off"
          onChange={handleInputChange}
          placeholder="Search images and photos"
        ></Input>
      </Form>
    </Header>
  );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  onChange:PropTypes.func,
};