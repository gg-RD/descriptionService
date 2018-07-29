import React from "react";


const ShoeDescription = (props) => {
  return (
    <div>
     <div className = "description-main">{props.data[0].shoe_descpription}</div>
     <div className = "description-shown">Shown: {props.data[0].shoe_shown}</div>
     <div className = "description-style">Style: {props.data[0].shoe_style}</div>

    </div>
  );
};

export default ShoeDescription;