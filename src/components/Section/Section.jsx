import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Title } from "./Section.styled";

class Section extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>{this.props.message}</Title>
        {this.props.children}
      </Container>
    );
  }
}

export { Section };
