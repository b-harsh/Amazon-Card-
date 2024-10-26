import React from "react";
import PropTypes from "prop-types";
import "../ProductCard.css"
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";

const ProductCard = ({ product }) => {
  const {
    title,
    brand,
    price,
    originalPrice,
    discount,
    rating,
    reviews,
    isSponsored,
    image,
    primeDeliveryDate,
    specialMessage,
  } = product;

  return (
    <div className="product-card">
      {isSponsored && <p className="product-card__sponsored">Sponsored</p>}
      <ProductImage src={image} alt={title} />
      <h3 className="product-card__brand">{brand}</h3>
      <p className="product-card__title">{title}</p>
      <ProductRating rating={rating} reviews={reviews} />
      <ProductPrice price={price} originalPrice={originalPrice} discount={discount} />
      <div className="product-card__prime-info">
        <span className="product-card__prime-icon">✔️ Prime</span>
        <span className="product-card__delivery-date">
          Get it by <strong>{primeDeliveryDate}</strong>
        </span>
      </div>
      <p className="product-card__delivery-info">FREE Delivery by Amazon</p>
      <p className="product-card__special-message">{specialMessage}</p>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    discount: PropTypes.number,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    isSponsored: PropTypes.bool,
    image: PropTypes.string.isRequired,
    primeDeliveryDate: PropTypes.string.isRequired,
    specialMessage: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
