import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "./FeedbackOptions.styled";

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <>
        {options.map((option) => (
          <Button onClick={() => onLeaveFeedback(option)} key={option}>
            {option}
          </Button>
        ))}
      </>
    );
  }
}


export { FeedbackOptions };
