import React from 'react';
import Logo from '../../assets/Artworkslogo.png';

import './SideDrawer.css';

const sideDrawer=props => {
    let drawerClasses='side-drawer';
    if (props.show) {
        drawerClasses='side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li ><img className="side-drawer-logo" src={Logo}></img> </li>
                <li><a href="/">Home</a> </li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/submit">Submit Artwork</a></li>
                <li><a href="/store">Store</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;