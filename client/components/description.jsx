import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import FontAwesome from 'react-fontawesome';
import SizeTable from './sizeTable.jsx';
import ShippingReturns from './shippingReturns.jsx';
import Reviews from './reviews.jsx';
import ShoeDescription from './shoeDescription.jsx';
import AddToCart from './addToCart.jsx';
import ShoeName from './shoeName.jsx';






export default class Description extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: [{
        _id:'1',
        shoe_type: 'Men\'s running shoes',
        shoe_name: 'Nike Epic React Flyknit',
        shoe_price: '$150',
        shoe_descpription: "The Nike Epic React Flyknit Men's Running Shoe provides crazy comfort that lasts as long as you can run. Its Nike React foam cushioning is responsive yet lightweight, durable yet soft. This attraction of opposites creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.",
        shoe_shown: "Shown: CollegeNavy/Hyper Jade/Sail/Red Orbit Style: AR5413-400",
        shoe_style: "Style: AR5413-400",
        shoe_size: []

      }],
      visible_shippings: false,
      visible_reviews: false,
   
     

    }; 
  

  }



 

  // componentDidMount(){
  //  this.getDescriptions();
  // }

  // getDescriptions(){
  //   var setState = this.setState.bind(this);

  //   $.get('http://localhost:3001/description/air_force_1', function(data){
  //     var parsedData = JSON.parse(data);
  //     console.log(parsedData);
  //     setState({
  //       description: parsedData
  //     })
  //   });

  // }

  



  render() {
    return (
      <div className = "container">
       <div className = "blank">
         something else
       </div>
       <div className = "content">
        <ShoeName />
        <SizeTable/>
        <AddToCart/>
        <div className = "shippings-main" onClick = {() => {this.setState({visible_shippings : !this.state.visible_shippings}) } }>FREE SHIPPING & RETURNS
        <div className = "icon">{this.state.visible_shippings ? <FontAwesome name='fas fa-minus' /> : <FontAwesome name='fas fa-plus' />} </div>
        
        </div>
        <div className = {this.state.visible_shippings ? "shippings": "hidden" }><ShippingReturns /></div>
        <div className = "shippings-main" onClick = {() => {this.setState({visible_reviews : !this.state.visible_reviews}) } }>REVIEWS (3) 
          <div className = "icon">{this.state.visible_reviews ? <FontAwesome name='fas fa-minus' /> : <FontAwesome name='fas fa-plus' />} </div>
        </div>
        <div className = {this.state.visible_reviews ? "shippings": "hidden"}><Reviews /></div>
        <ShoeDescription/>
       </div> 
      
      </div>

      );
  }

}
