import React, { Component } from 'react'
import './style.scss';

 class Footer extends Component {
    render() {
        return (
            <div>
                <div className='footer-container'>
                    <div className='footer-header-buttons'>
                        <button className='f-button-style'>
                            <a href='#'><img src='https://sandbox5.dobcn.com/epaplus/wp-content/themes/epaplus/assets/images/icons/newsletter.svg' alt='Letter'/>Newsletter</a>
                        </button>
                        <button className='f-button-style'>
                            <a href='#'><img src='https://sandbox5.dobcn.com/epaplus/wp-content/themes/epaplus/assets/images/icons/profile.svg' alt='Letter'/>Regístrate</a>
                        </button> 
                    </div>
                    </div>
                    <div className='info-mobile'>
                        <div className="info-container">
                        <h3>Products:</h3>
                        <ul>
                            <li><a href='#'>Arthicare</a></li>
                            <li><a href='#'>Digestcare</a></li>
                            <li><a href='#'>Immucare</a></li>
                            <li><a href='#'>Sleepcare</a></li>
                            <li><a href='#'>Vitalcare</a></li>
                            <li><a href='#'>Vigorcare</a></li>
                            <li><a href='#'>Catálogo</a></li>
                        </ul>
                        <h3><a href='#'>Peroxfarma</a></h3>
                        <h3><a href='#'>Mussvital</a></h3>
                        <h3>Acerca del fondo Europeo</h3>
                        <p>
                            Peroxfarma, ha sido beneficiaria del Fondo Europeo de Desarrollo Regional 
                            cuyo objetivo es mejorar la competitividad de las Pymes y gracias al cual 
                            ha puesto en marcha un Plan de Internacionalización con el objetivo de mejorar 
                            su posicionamiento competitivo en el exterior durante el año 2018. Para ello 
                            ha contado con el apoyo del Programa XPANDE de la Cámara de Comercio de Barcelona.
                        </p>
                        <img src="https://sandbox5.dobcn.com/epaplus/wp-content/themes/epaplus/assets/images/footer/logos.png" alt='logos' />
                        <h3><a href='#'>Sobre nosotros</a></h3>
                        <h3><a href='#'>Contacto</a></h3>
                        <h3><a href='#'>FAQ</a></h3>
                        <h3><a href='#'>Mapa del sitio</a></h3>
                        <h3><a href='#'>Política de privacidad</a></h3>
                        <h3><a href='#'>Política de cookies</a></h3>
                        <h3><a href='#'>Nota legal</a></h3>
                        <p className='p-copyright'>© 2019 Peroxfarma. Todos los derechos reservados.</p>
                    </div> 
                    </div>
                    
            </div>
        )
    }
}

export default Footer;