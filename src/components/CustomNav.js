import React, { Component } from 'react';
import { Navbar, NavbarToggler, Collapse, Col, Nav, Row } from 'reactstrap';
import navItems from './navItems'
import NavMap from './NavMap'
import '../css/Navbar.css'

class CustomNavbar extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false
        };
    }
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
    <Col md={{size: 3}} style={{'overflow-y':'scroll'}}>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar className="collapse-right">
          <Nav className="flex-column">
            <Row>
                <Col>
                    <NavMap items={navItems.filter(i=>i["className"]!=='tags')} />
                    </Col>
            </Row>
            <div className="tags">
            <p className="contact">
             © {new Date().getFullYear()}<br />dom "at" dominicdecarlo "dot" com<br/></p>
            <NavMap items={navItems.filter(i=> i["className"]==="tags")} />
           </div>
        </Nav>  
          </Collapse>
        </Navbar>
    </Col>
        );
    }
}

export default CustomNavbar;
