import React, {Component} from "react"


import SEO from "../components/seo";
import Navbar from "../components/heading/Navbar.js";
import Footer from '../components/footer/Footer.js';

import './style.scss';
import Header from "../components/heading/header";

class SecondPage extends Component {
  
  state = {
    loading: true,
    products: {}
  }

  componentDidMount() {
    const id = this.props['*'];
    fetch(`https://dobcn-api.herokuapp.com/products/product/${id}`)
    .then(response => {
      return response.json();
    })
    .then(json => {
      this.setState({
        product: json,
        loading: false
      })
    })
  }
  render () {
    const { loading, product } = this.state;
    return (
      <div>
        <SEO title="Page two" />
        <Navbar />
        <Header />
        {
              loading ? 
              <h1 className='cargando'>Cargando producto...</h1> 
              : product.map(product => {
                return (
                  <div key={product._id}>
                    <section className='product-container'>
                      <img src={product.image} alt={product.title} />
                      <div>
                        <section>
                          <h2 className='product-title'>{product.title}</h2>
                          <p className='product-subtitle'>{product.subtitle}</p>
                        </section>
                        <section className="product-data" >
                          <p>{product.packing}</p>
                          <p>{product.cn}</p>
                        </section>
                        <div className='button-container'>
                          <a href={`/product/`} className='shop-button'>
                            <img src='https://sandbox5.dobcn.com/epaplus/wp-content/themes/epaplus/assets/images/icons/icon-compra.svg' alt='shop' />
                            Dónde comprar
                          </a>
                          <a href='#' className='favourite-button'>
                            <img src='https://sandbox5.dobcn.com/epaplus/wp-content/themes/epaplus/assets/images/icons/icon-fav.svg' alt='heart button' />
                          </a>
                        </div>
                      </div>
                      <div>
                        <p className='product-description'>{product.description}</p>
                        <div className='product-features'>
                          {
                            product.features.map((feature, info) => {
                              return (
                                <div key={info}>
                                  <table>
                                    <tbody>
                                      <img className='table-img' src={feature.icon} alt={feature.name} />
                                    </tbody>
                                    <tbody>
                                      <span>{feature.name}</span>
                                    </tbody>
                                    
                                  </table>
                                  
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>
                    </section>
                  </div>
                )
              })
            }
        <div className='home-container'>
          <a className='return-home' href="/">Volver al catálogo</a>
        </div>
        
        <Footer />
      </div>
    )
  }
}

export default SecondPage
