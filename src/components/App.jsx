import React, { Component } from 'react';
import Notiflix from 'notiflix';
// ============ Section ============
import Section from './Section/Section';
// ============ ContactForm ============
import ContactForm from './ContactForm/ContactForm';
// ============ ContactList ============
import Filter from './Filter/Filter';
// ============ ContactList ============
import ContactList from './ContatctList/ContactList';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

 
  addContact = newContact => {
    const isExist = this.state.contacts.find(el => el.name === newContact.name);
    if (isExist) {
      return Notiflix.Report.warning(
        'Alert',
        `Contact with this name already exists!`,
        'Okay'
      );
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };


  changeFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };


  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <Section title="Phonebook ">
        <ContactForm onSubmit={this.addContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.changeFilter}></Filter>
        <ContactList
          contacts={this.filteredContacts()}
          handleDeleteContact={this.deleteContact}
        ></ContactList>
      </Section>
    );
  }
}
