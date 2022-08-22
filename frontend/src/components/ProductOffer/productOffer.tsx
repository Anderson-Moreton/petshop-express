import React from "react";

interface IProductOffer {
  productName: string;
  productPrice: number;
  productImage: string;
}

export const ProductOffer = ({productName, productPrice, productImage}: IProductOffer) => {
  return (
    <article>
        <div className="product-offer-container">
            <div>
                <img className="product-offer-image" src={productImage} alt=""/>
            </div>
            <div className="product-offer-details">
                <h3>
                  {productName}
                </h3>
                <h3>
                  {productPrice}
                </h3>
            </div>
            <div className="product-offer-button">
                <button className="button-secondary" type="button">Ver detalhes</button>
                <button type="submit">Adicionar</button>
            </div>
        </div>
    </article>
  )
}
