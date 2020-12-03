import React from 'react';
import {Navbar} from 'react-bootstrap';

function NavbarComponent() {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">COVID - 19 Tracker</Navbar.Brand>              
            </Navbar>
        </div>
    )
}

export default NavbarComponent
