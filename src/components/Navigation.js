import React from 'react'
//import { NavLink } from 'react-router-dom'
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

// const link = {
//     width: '100px',
//     padding: '12px',
//     margin: '0 6px 6px',
//     background: 'blue',
//     textDecoration: 'none',
//     color: 'white'
// }

// const Navigation = () => {
//     return (
//         <div>
//             <NavLink 
//                 to='/'
//                 exact
//                 style= {link}
//                 activestyle={{
//                     background: 'darkblue'
//                 }}>
//             Home</NavLink>

//             <NavLink 
//                 to='/parks'
//                 exact
//                 style= {link}
//                 activestyle={{
//                     background: 'darkblue'
//                 }}>
//             All Parks</NavLink>

//             <NavLink 
//                 to='/parks/new'
//                 exact
//                 style= {link}
//                 activestyle={{
//                     background: 'darkblue'
//                 }}>
//             Add Park</NavLink>

//             <NavLink 
//                 to='/trails'
//                 exact
//                 style= {link}
//                 activestyle={{
//                     background: 'darkblue'
//                 }}>
//             All Trails</NavLink>
            

//         </div>
//     )
// }


export default Navigation;




