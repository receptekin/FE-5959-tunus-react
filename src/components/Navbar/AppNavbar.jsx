import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from './AppNavbar.module.css';

const AppNavbar = () => {
    return (
        <Navbar className={styles.startNavbar} bg="primary" data-bs-theme="dark" expand="lg">
            <Container>
                <div className="d-flex justify-content-between w-100">
                    <Navbar.Brand className={styles.NavbarBrand} href="#home">DiscoverTunisia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </div>
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link className={styles.navLink} href="#home">Home</Nav.Link>
                        <Nav.Link className={styles.navLink} href="#features">Features</Nav.Link>
                        <Nav.Link className={styles.navLink} href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
