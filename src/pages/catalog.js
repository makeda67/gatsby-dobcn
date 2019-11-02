import React, {Component} from "react"

import Navbar from '../components/heading/Navbar.js';
import SEO from "../components/seo";
import Header from "../components/heading/header.js";
import Footer from '../components/footer/Footer.js';
import Cards from '../components/Cards.js';

import './style.scss';

class IndexPage extends Component {

  state = {
    products: [],
    loading: true
  }

  componentDidMount() {
    fetch(`https://dobcn-api.herokuapp.com/products/all/es`)
    .then(response => {
      return response.json();
    })
    .then(json => {
      this.setState({
        products: json,
        loading: false
      })
    })
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div>
        <SEO title="Epaplus" />
        <Navbar />
        <Header />
        <div className='div-helper'>
          <h1 className='h1-helper'>Nuestra gama de productos</h1>
          <h2 className='h2-helper'>Soluciones para el cuidado de articulaciones, bienestar digestivo, un sueño reparador, y para reforzar el sistema immunitario</h2>
        </div>
        <div className='elements-container'>
          <div className='product-container'>
            { loading ? 
              <>
              <h1 className="cargando">Cargando productos...</h1> 
              </>
              : products.map(product => {
                return (
                  <Cards key={product._id} product={product} />
                )
              })
            }
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default IndexPage
