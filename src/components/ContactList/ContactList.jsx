import React, { Component } from "react";
import PropTypes from "prop-types"
import { DeleteButton, Item, List } from "./ContactList.styled";

class ContactList extends Component {
  static propTypes = {
    filteredContacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    deleteContact: PropTypes.func.isRequired,
  };

  render() {
    const { filteredContacts, deleteContact } = this.props;
    return (
      <List>
        {filteredContacts.map(({ name, number, id }) => (
          <Item key={id}>
            <div>
              <span>{name}: </span>
              <span>{number}</span>
            </div>
            <DeleteButton onClick={() => deleteContact(id)}>
              Delete
            </DeleteButton>
          </Item>
        ))}
      </List>
    );
  }
}

export { ContactList };
