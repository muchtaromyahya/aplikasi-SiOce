import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';

const NavbarClass = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/classroom">My Class</Navbar.Brand>
        <Nav className="ml-auto">
          <Button variant="primary" href="/createclass">
            Buat Kelas
          </Button>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavbarClass;
