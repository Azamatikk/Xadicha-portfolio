/* eslint-disable react/no-unescaped-entities */
import { CiMenuFries } from "react-icons/ci";

import './header.css'
import { Link } from 'react-router-dom'
import { useState } from "react";

const Header = () => {

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <header>
            <div className='left_div'>
                <h3>Xadicha's Portfolio</h3>
                <div>
                    <CiMenuFries onClick={toggleMenu}/>
                </div>
            </div>
            <div className={`right${menu ? 'active' : ``}`}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='blog'>Blog</Link></li>
                    <li><Link to='project'>My work</Link></li>
                    <li><Link to='contact'>Contact</Link></li>
                    <li><Link to='skills'>I know</Link></li>    
                </ul>
            </div>
            
        </header>
    )
}

export default Header