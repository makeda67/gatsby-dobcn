import React, { Component } from 'react'
import { Link } from "gatsby";

class Cards extends Component {
  render() {
    const { image, title, subtitle, cn, packing, _id } = this.props.product;

    return (
      <div className='product'>
        <img src={image} alt={title} />
        <section>
          <h2 className='product-title'>{title}</h2>
          <p className='product-subtitle'>{subtitle}</p>
        </section>
        <section>
          <p>{packing}</p>
          <p>{cn}</p>
        </section>
        <a  className='product-view' href={`/product/${_id}`}>ver producto</a>
      </div>
    )
  }
}

export default Cards;