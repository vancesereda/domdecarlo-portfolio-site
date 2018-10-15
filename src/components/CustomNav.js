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
        const { isOpen } = this.state;
        return (
    <Col md={{size: 3}} className="fix-scroll" style={{'padding-left':'0px'}}>
        <Navbar color="inherit" light expand="md"style={{'padding-left':'0px'}}>
          <NavbarToggler onClick={this.toggle} style={isOpen ? {} : {'width':'65%'}}/>
          <Collapse isOpen={this.state.isOpen} navbar className="collapse-right">
          <Nav className="flex-column">
            
                    <NavMap items={navItems.filter(i=>i["className"]!=='tags')} />
               
            
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
