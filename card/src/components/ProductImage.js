import React from "react";
import PropTypes from "prop-types";

const ProductImage = ({ src, alt }) => (
  <img src={src} alt={alt} className="product-card__image" loading="lazy" />
);

ProductImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ProductImage;
