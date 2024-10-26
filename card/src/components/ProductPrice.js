import React from "react";
import PropTypes from "prop-types";

const ProductPrice = ({ price, originalPrice, discount }) => (
  <div className="product-card__price">
    <span className="product-card__current-price">₹{price.toLocaleString()}</span>
    {originalPrice && (
      <>
        <span className="product-card__original-price">M.R.P: ₹{originalPrice.toLocaleString()}</span>
        <span className="product-card__discount">({discount}% off)</span>
      </>
    )}
  </div>
);

ProductPrice.propTypes = {
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number,
  discount: PropTypes.number,
};

export default ProductPrice;
