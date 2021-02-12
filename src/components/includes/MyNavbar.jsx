import { Component } from "react";
import {
    Navbar
  } from 'react-bootstrap'

class MyNavbar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">React POS System</Navbar.Brand>
            </Navbar>
        )
    }
}

export default MyNavbar;