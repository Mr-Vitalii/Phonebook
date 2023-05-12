import React, { Component } from "react";
import PropTypes from "prop-types";
import { Option, Title } from "./Statistics.styled";

class Statistics extends Component {
  static propTypes = {
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        <Title>Statistics</Title>
        <Option>Good: {good}</Option>
        <Option>Neutral: {neutral}</Option>
        <Option>Bad: {bad}</Option>
        <Option>Total: {total}</Option>
        <Option>
          PositivePercentage: {positivePercentage > 0 ? positivePercentage : 0}{" "}
          %
        </Option>
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export { Statistics };
