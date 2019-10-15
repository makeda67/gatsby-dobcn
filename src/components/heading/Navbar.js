import React, { Component } from 'react';
import './style.scss';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                {/* <div className='elements-container-navbar'>
                    <a className='home-link' href='/'>
                        <img className='logo-header' src='https://sandbox5.dobcn.com/hiring/maqueda/wp-content/themes/epaplus/assets/images/epaplus.png' alt='Logo Epaplus'/>
                    </a> 
                </div> */}
                <div className='left-thingo'>
                <label for="menu-toggle">
                        <div className="boton">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        </label>
                        <input type="checkbox" id="menu-toggle"/>
                        <ul id="menu">
                        <li><a href='#'>First link</a></li>
                        <li><a href='#'>Second link</a></li>
                        <li><a href='#'>Third link</a></li>
                        </ul>
                </div>
                <div className='center-thingo'>
                   <img className='logo-navbar' src='https://sandbox5.dobcn.com/hiring/maqueda/wp-content/themes/epaplus/assets/images/epaplus.png' alt='company logo' /> 
                </div>
                
                <div className='right-thingo'>
                    <img src='https://sandbox5.dobcn.com/epaplus/wp-content/themes/epaplus/assets/images/icons/profile.svg' alt='profile icon' />
                </div>
            </div>
        )
    }
}

export default Navbar;