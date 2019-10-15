import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import Navbar from '../components/heading/Navbar.js';
import Image from "../components/image"
import SEO from "../components/seo"

import './style.scss';

const IndexPage = () => (
  // <Layout>
  <>
    <SEO title="Home" />
    <Navbar />
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
    </>
  // </Layout>
)

export default IndexPage
