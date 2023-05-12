import React, { Component } from "react";
import PropTypes from 'prop-types'
import { Container, Input } from "./Filter.styled";

class Filter extends Component {
  static propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { filter, onChange } = this.props;

    return (
      <Container>
        <label>
          Fined contacts by name
          <br />
          <Input type="text" value={filter} onChange={onChange} />
        </label>
      </Container>
    );
  }
}

export { Filter };
