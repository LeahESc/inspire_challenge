import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

const Navbar = () => { 

    return (
        < div >
            <nav className="navbar navbar-light" style={{background: '#ffff', margin: '1%'}}>
                <Link to='/'>
                    <Icon name='home' size='big' color='green'/>
                </Link>
            </nav>
        </div>
    )
}

export default Navbar
