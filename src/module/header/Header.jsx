import React from 'react'
import logo from '../../resources/img/logo.png';


function Header() {
    return (
        <>
            <header>
               <nav>
                   <div className="row">
                        <img src={logo} alt="logo-img" />
                        <ul class="main-nav">
                            <li><a href="#feature">Food delivery</a></li>
                            <li><a href="#hiw">How it work</a></li>
                            <li><a href="#city">Our Cities</a></li>
                            <li><a href="#signup">Sign-up</a></li>
                        </ul>
                    </div>
                    <div className="hero-text-box">
                        <h1>Goodbye juck food<br />Hello Super helthy food</h1>
                        <a className="btn btn-full" href="#plans">I'm Hungry</a>
                        <a className="btn btn-ghost" href="#feature">Show me more</a>
                    </div>
                </nav>
            </header>
        </>
    )
}




export default Header