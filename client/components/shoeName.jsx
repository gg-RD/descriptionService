import React from 'react';

const ShoeName = (props) => (
  <div >

   <div className = "price">
    <h6 >{props.data[0].shoe_cat}</h6>
    <h6>{props.data[0].shoe_price}</h6>
   </div>
    <h4 className = "shoe-name">{props.data[0].shoe_name}</h4> 
  </div>
  );


export default ShoeName;