import React, { Component } from 'react';
import './style.css';

class Catalog extends Component {
    render() {
        return (
            <div>
                <div className='div-helper'>
                    <h1 className='h1-helper'>Nuestra gama de productos</h1>
                    <h2 className='h2-helper'>Soluciones para el cuidado de articulaciones, bienestar digestivo, un sueño reparador, y para reforzar el sistema immunitario</h2>
                </div>
                <div className='elements-container'>
                    <div className='product-filter'>
                    <div className='product-container'>

                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Catalog;