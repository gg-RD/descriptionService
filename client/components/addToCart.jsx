import React from 'react';
import FontAwesome from 'react-fontawesome';

const AddToCart = () => (
  <div className = "add-cart-main">
    <button className = "add-cart" >Add To Cart</button>
    <button className = "heart">
      <FontAwesome name='heart f004' />
    </button>    
  </div>
);


export default AddToCart;