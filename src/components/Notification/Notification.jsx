import React, { Component } from "react";
import { Container } from "./Notification.styled";

class Notification extends Component {

    render() {
        return <Container>{this.props.message}</Container>;
    }
}

export { Notification };