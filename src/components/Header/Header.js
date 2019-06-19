import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { header_links } from '../Data';

import logo from '../../assets/logo.png';

export class Header extends Component {
    render() {
        return (
            <Router>
                <header>
                    <div className="header_links">
                        <div className="wrapper">
                            <ul className="header_items">
                                {header_links.map(e => (
                                    <li key={e.item}><Link to="">{e.item}</Link></li>
                                ))}

                                {/* <li><Link to="#">-5C  New York</Link></li>
                                <li><Link to="#">Monday, March 6</Link></li>
                                <li><Link to="#">Blog</Link></li>
                                <li><Link to="#">Forum</Link></li>
                                <li><Link to="#">Contact</Link></li>
                                <li><Link to="#">Buy now!</Link></li> */}
                            </ul>
                            <div className="social_icons">
                                <a href="http://www.facebook.com"><i className="fab fa-facebook-square fa-1x"></i></a>
                                <a href="http://www.twitter.com"><i className="fab fa-twitter fa-1x"></i></a>
                                <a href="http://www.pinterest.com"><i className="fab fa-pinterest fa-1x"></i></a>
                            </div>
                            <div className="signin">
                                <Link to=""><i className="fas fa-user-circle"></i> <span className="signin_span">Sign in</span></Link>
                            </div>
                        </div>
                    </div>

                    <div className="wrapper">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand" href="/"> <img src={logo} alt="logo" /> </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active highlight">
                                        <a className="nav-link" href="/">Fashion <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link navbar_icons" href="/">Style Hunter </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Lifestyle
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="/">Trending</a>
                                            <a className="dropdown-item" href="/">New Arrivals</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/">Others</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/" tabindex="-1" aria-disabled="true">Celebrity</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown"
                                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Videos
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="/">Fashion</a>
                                            <a className="dropdown-item" href="/">Sports</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="/">Technology</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/" tabindex="-1" aria-disabled="true">Celebrity</a>
                                    </li>
                                </ul>
                                <i class="fas fa-search"></i>
                            </div>

                        </nav>

                    </div>
                </header>
            </Router>
        )
    }
}

export default Header;
