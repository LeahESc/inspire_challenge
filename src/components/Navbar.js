import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

const Navbar = () => { 

    return (
        < div >
            <nav className="navbar navbar-light" style={{background: '#ffff'}}>
                <Link to='/'>
                    <Icon name='home' size='huge' color='yellow'/>
                </Link>
            </nav>
        </div>
    )
}

export default Navbar
