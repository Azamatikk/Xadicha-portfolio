import './home.css'
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import logo from '../images/my_photo.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        
        <main>
        <div className='about_me'>
                <div className="my_photo">
                    <img src={logo} alt="dddd" />
                </div>
            <div className="hammasi">
                <div className="my_name">
                    <h1>Xadicha Shokirova</h1>
                    <h2>Frontend Developer</h2>
                </div>
                <div className="my_icons">
                    <ul>
                        <li><FaYoutube /></li>
                        <li><FaGithub /></li>
                        <li><FaLinkedin /></li>
                        <li><FaTelegram /></li>
                    </ul>
                    <p>I write about non-technical stuff in the technical world.</p>
                </div>
                <div className='my_buttons'>

                <button>Read Blog</button>
                <button>About Me</button>

                </div>
            </div>
            </div>
        </main>
    </>
  )
}

export default Home