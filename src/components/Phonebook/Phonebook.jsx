import React, { Component } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "../ContactForm/ContactForm ";
import { Section } from "../Section/Section";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";
import { ContactsTitle } from "./Phonebook.styled";

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  addContact = (text, number) => {
    if (this.state.contacts.some((contact) => contact.name === text)) {
      alert(`${text} is already in contacts`);
      return;
    }
    if (this.state.contacts.some((contact) => contact.number === number)) {
      alert(`Number ${number} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name: text,
      number: number,
    };

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <Section message="Phonebook">
        <ContactForm
          addContact={this.addContact}
        />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter filter={filter} onChange={this.changeFilter} />
        <ContactList
          filteredContacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </Section>
    );
  }
}

export { Phonebook };
