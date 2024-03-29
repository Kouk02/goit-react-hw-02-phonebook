import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  FormWrap,
  InputContainer,
  ContactLabel,
  ContactInput,
  AddContactButton,
} from './ContactForm.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
 
  handleSubmitForm = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      ...this.state,
    };
    this.props.onSubmit(newContact);
    this.reset();
  };

  reset = () => {
    this.setState({ number: '', name: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <FormWrap type="submit" onSubmit={this.handleSubmitForm}>
        <InputContainer>
          <ContactLabel $hasValue={name}>Name</ContactLabel>
          <ContactInput
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputContainer>
        <InputContainer>
          <ContactLabel $hasValue={number}>Number</ContactLabel>
          <ContactInput
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputContainer>
        <AddContactButton type="submit">Add contact</AddContactButton>
      </FormWrap>
    );
  }
}