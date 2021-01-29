import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import avatar from '../img/avatar.png';
import '../components/Navbar.css';
import '../components/base.css';
import Card from '../components/Card';
import Skill from '../components/Skill';
import TimeLine from '../components/TimeLine';
import Project from '../components/Project';
import ContactForm from '../components/ContactForm';

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showMenu = () => {
        if (window.innerWidth <= 960 ) {
            setClick(false);
        } else {
            setClick(false);
        }
    }
    window.addEventListener('resize', showMenu);

    const [darkMode, setDarkMode] = useState(getInitialMode);

    useEffect(() => {
        localStorage.setItem('dark', JSON.stringify(darkMode));
    })

    function getInitialMode() {
       const saveMode = JSON.parse(localStorage.getItem('dark'));
        return saveMode
    }   

return (
<div className= { darkMode ? 'dark-mode' : 'light-mode'}>
    <div className="toogle-dark-mode" onClick={ () => setDarkMode(preMode => !preMode) }>
        <i className="fas fa-adjust"></i>
    </div>

    <div className="hamburger-menu" onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
    </div>
    
    {/* Navbar */}
    <nav className={click ? 'nav-active' : 'nav'}>
        <div className="intro">
            <h1 className="intro-heading">Nguyen</h1>
            <h2 className="intro-subhead">Web Developer</h2>
        </div>

        <ul className="nav-list">
            <li className="nav-item">
                <Link to='/' className="nav-link" onClick={closeMobileMenu}> 
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/about' className="nav-link" onClick={closeMobileMenu}> 
                    About
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/myskill' className="nav-link" onClick={closeMobileMenu}> 
                    Product
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/contact' className="nav-link" onClick={closeMobileMenu}> 
                    Contact
                </Link>
            </li>
        </ul>

        <div className="social-media-wrapper">
            <span>Follow me on</span>
            <div className="social-media">
                <Link to='/facebook' className="sm-link"><i className="fab fa-facebook"></i></Link>
                <Link to='/instagram' className="sm-link"><i className="fab fa-instagram"></i></Link>
            </div>
            <div className="copyright-notice">
                <p>Copyright &copy; 2020. All rights reserved</p>
            </div>
        </div>

    </nav>


    <div className="main">
        <section className="hero">
            <h5 className="name-heading">Nguyen</h5>
            <img className='hero-person-image' src={avatar} alt="avatar"/>
        </section>
    </div>
    {/* END Navbar */}

    {/* About me */}
    <section className="about-me" id='about'>
            <div className="container">
                <div className="heading-group">
                    <span className="section-head-small">About</span>
                    <h5 className="section-head-large">Who am I?</h5>
                </div>

                <div className="about-me-intro">
                    <div className="intro-description">
                        <p>
                            <span>Hi guy! I'm Nguyen Van Dang</span> ipsum dolor sit amet consectetur adipisicing elit. Adipisci, cumque temporibus enim facilis excepturi ex officiis, cupiditate
                            laboriosam ipsa odio itaque totam corporis aperiam! Officia deleniti officiis, ut nam, vero omnis iure adipisci soluta, dicta dignissimos quo sequi. Vel nulla unde id repudiandae iusto.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt cupiditate nihil a! Quas, voluptate cumque? Velit debitis, ipsum amet aliquid animi repellendus quod esse. Voluptate odit ab excepturi esse,
                        </p>
                    </div>
                    <div className="call-to-action">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ducimus fugiat repudiandae iste necessitatibus laudantium rem, magni consectetur nemo quae fuga saepe id eum aut esse impedit ad quos exercitationem,
                        </p>
                        <Link to='/' className='btn cta-btn'>Hire me </Link>
                    </div>
                </div>

            </div>
    </section>
    {/* END About */}

    {/* My skill */}
    <section className='my-skill' id='my-skill'>
        <div className="container">
            <div className="heading-group">
                <span className="section-head-small">My skill</span>
                <h5 className="section-head-large">Web developer</h5>
            </div>

            <div className="skil-item">
                <Skill/>
            </div>

            <div className="heading-group margin-top">
                <span className="section-head-small">What I use</span>
                <h5 className="section-head-large">Software &amp; Technoligies </h5>
            </div>

            <div className="card-item">
                <Card/>
            </div>
        </div>
    </section>
    {/* END My skill */}

    {/* Work experience */}
    <section className="motto">
        <div className="container">
            <div className="quote-wrapper">
                <blockquote className="quote">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, adipisci?</blockquote>
                <cite className="quote-by">This is artist</cite>
            </div>
        </div>
    </section>

    <section className="work-experience" id='experience'>
        <div className="container">
            <div className="heading-group">
                <span className="section-head-small">previous employment</span>
                <h5 className="section-head-large">Work experience</h5>
            </div>

            <div className="timeline">
              <TimeLine/>
              <TimeLine/>
              <TimeLine/>
            </div>
        </div>
    </section>
    {/* END Work experience  */}

    {/* My project  */}

    <section className="my-project">
        <div className="container">
            <div className="heading-group">
                <span className="section-head-small">Portfolio</span>
                <h5 className="section-head-large">My Projects</h5>
            </div>

            <div className="grid">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    </section>
    {/* END My project  */}

    {/* Footer */}
    <section className="footer">
        <div className="container">
            <div className="heading-group">
                <span className="section-head-small">Contact me</span>
                <h5 className="section-head-large">Let's work together</h5>
            </div>

            <div className="contact-info-wrapper">
                <div className="contact-info">
                    <div className="contact-info-item">
                        <div className="info-item-icon">
                            <i className="far fa-address-card"></i>
                        </div>
                        <div className="info-address">
                            <p className="info-address-data">238 Nguyễn Sinh Cung</p>
                            <p className="info-address-data">Phường Vĩ Dạ</p>
                            <p className="info-address-data">Thừa Thiên Huế</p>
                        </div>
                    </div>
                    <div className="contact-info-item">
                        <div className="info-item-icon">
                            <i className="fas fa-phone"></i>
                        </div>
                        <div className="info-address">
                            <p className="info-address-data">03 323 828 67</p>
                        </div>
                    </div>
                </div>
                <ContactForm/>
            </div>
        </div>
    </section>

    {/* END Footer  */}
</div>
)
}

export default Navbar
