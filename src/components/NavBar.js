import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">OptOutside</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href='/parks'>All Parks</Nav.Link>
                    <Nav.Link href="/parks/new">Add A Park</Nav.Link>
                    <Nav.Link href="/trail/new">Add A Trail</Nav.Link>
                    <Nav.Link href="/trails">All Trails</Nav.Link>
                </Nav>
            </Navbar>
            </>
        </div>
    )
}


export default NavBar;