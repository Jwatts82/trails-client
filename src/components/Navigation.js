import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div className="Navigation">
            <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Trails</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href='/parks'>All Parks</Nav.Link>
                    <Nav.Link href="/parks/new">Add Park</Nav.Link>
                    <Nav.Link href="/trails">All Trails</Nav.Link>
                </Nav>
            </Navbar>
            </>
        </div>
    )
}



export default Navigation;




