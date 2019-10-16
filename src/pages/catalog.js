import React from "react"

import Navbar from '../components/heading/Navbar.js';
import SEO from "../components/seo";
import Header from "../components/heading/header.js";
import Footer from '../components/footer/Footer.js';

import './style.scss';

const IndexPage = () => (

  <>
    <SEO title="Epaplus" />
    <Navbar />
    <Header />
    <div className='div-helper'>
      <h1 className='h1-helper'>Nuestra gama de productos</h1>
      <h2 className='h2-helper'>Soluciones para el cuidado de articulaciones, bienestar digestivo, un sueño reparador, y para reforzar el sistema immunitario</h2>
    </div>
    <div className='elements-container'>
      <div className='product-filter'>
      <div className='product-container'>

      </div>
      </div>
      <Footer />
    </div>
    </>
 
)

export default IndexPage
