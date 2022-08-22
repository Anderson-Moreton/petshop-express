import { ProductOffer } from '@components/ProductOffer/productOffer';
import React from 'react';
import productImage from '@assets/opaCheddar.jpeg'
import fotoHome from '@assets/foto home.jpg'
import '../styles.css'
import Base from '@components/Base';

export const Home = () => {
  return (
    <Base imageBanner={fotoHome}>
      <section>
          <div className="container">
              <div className="tituloPrincipal">
                  <h2>Mais Vendidos</h2>
              </div>
          </div>
      </section>
      <section className="sale">
          <div className="row-box">
            <ProductOffer productName="Produto 1" productPrice={123} productImage={productImage}/>
            <ProductOffer productName="Produto 1" productPrice={123} productImage={productImage}/>
            <ProductOffer productName="Produto 1" productPrice={123} productImage={productImage}/>
          </div>
      </section>
      <section>
          <div className="container">
            <h2>Novidades</h2>
          </div>
      </section>
      <section className="sale">
          <div className="row-box">
            <ProductOffer productName="Produto 2" productPrice={123} productImage={productImage}/>
            <ProductOffer productName="Produto 2" productPrice={123} productImage={productImage}/>
            <ProductOffer productName="Produto 2" productPrice={123} productImage={productImage}/>
          </div>
      </section>
    </Base>
  )
}
