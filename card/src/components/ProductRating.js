import React from "react";
import PropTypes from "prop-types";

const ProductRating = ({ rating, reviews }) => (
  <div className="product-card__rating">
    {Array.from({ length: rating }, (_, index) => (
      <span key={index} role="img" aria-label="star">⭐</span>
    ))}
    <span className="product-card__reviews"> {reviews}</span>
  </div>
);

ProductRating.propTypes = {
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
};

export default ProductRating;
