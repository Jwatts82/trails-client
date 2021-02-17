import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'


const Navigation = () => {
    const activeStyle = {
        color: "green"
    }

    return (
        <div className="Navigation">
            <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Trails</Navbar.Brand>
                <Nav className="mr-auto">
                    <NavLink exact activeStyle={activeStyle} to='/parks'>All Parks</NavLink>
                    <NavLink exact activeStyle={activeStyle} to="/parks/new">Add Park</NavLink>
                    <NavLink exact activeStyle={activeStyle} to="/trails">All Trails</NavLink>
                </Nav>
            </Navbar>
            </>
        </div>
    )
}



export default Navigation;




