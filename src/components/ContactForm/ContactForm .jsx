import React, { Component } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { object, string } from "yup";
import {
  Button,
  ContactsForm,
  FormError,
  Input,
  InputContainer,
} from "./ContactForm .styled";

const initialValues = {
  name: "",
  number: "",
};

let userSchema = object({
  name: string()
    .required()
    .matches(
      /^[a-zA-Za-zA-Z]+(([' -][a-zA-Za-zA-Z ])?[a-zA-Za-zA-Z]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: string()
    .required()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    ),
});

class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    const { addContact } = this.props;

    addContact(name, number);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={userSchema}
      >
        <ContactsForm>
          <InputContainer>
            <label>
              Name:
              <Input type="text" name="name" />
              <FormError name="name" component="p" />
            </label>
          </InputContainer>
          <InputContainer>
            <label>
              Phone:
              <Input type="tel" name="number" />
            </label>
            <FormError name="number" component="p" />
          </InputContainer>

          <Button type="submit">Add contact</Button>
        </ContactsForm>
      </Formik>
    );
  }
}

export { ContactForm };
