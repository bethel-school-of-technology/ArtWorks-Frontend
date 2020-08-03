import React from 'react';
import Logo from '../../assets/Artworkslogo.png';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './NavBar.css';

const NavigationBar=props => (
    <header className="nav">
        <nav className="navbar">
            <div className="nav-toggle-button" >
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="nav-logo"> <a href="/"><img src={Logo} alt="" /> </a></div>
            <div className="spacer" />
            <div className="nav-items">
                <ul>
                    <li><a href="/">Home</a> </li>
                    <li><a href="/admin">Login</a></li>
                    <li><a href="/add-submissions">Submit Artwork</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/store">Store</a></li>

                </ul>
            </div>
        </nav>
    </header>
)


export default NavigationBar;

