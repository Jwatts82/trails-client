import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white'
}

const Navigation = () => {
    return (
        <div>
            <NavLink 
                to='/'
                exact
                style= {link}
                activestyle={{
                    background: 'darkblue'
                }}>
            Home</NavLink>

            <NavLink 
                to='/parks'
                exact
                style= {link}
                activestyle={{
                    background: 'darkblue'
                }}>
            All Parks</NavLink>

            <NavLink 
                to='/parks/new'
                exact
                style= {link}
                activestyle={{
                    background: 'darkblue'
                }}>
            Add Park</NavLink>

            <NavLink 
                to='/trails'
                exact
                style= {link}
                activestyle={{
                    background: 'darkblue'
                }}>
            All Trails</NavLink>
            

        </div>
    )
}


export default Navigation;