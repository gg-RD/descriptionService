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
        shoe_cat: '',
        shoe_price: '',
        shoe_name: '',
        shoe_size: [],
        shoe_descpription: '',
        shoe_shown: '',
        shoe_style: ''
      }],
      visible_shippings: false,
      visible_reviews: false,

    }; 

    this.getDescriptions =this.getDescriptions.bind(this);
  

  }



 

  componentDidMount(){
   this.getDescriptions();
  }

  getDescriptions(){
    var setState = this.setState.bind(this);

    $.get('http://localhost:3001/description/air_force_1', function(data){
      var parsedData = JSON.parse(data);
      setState({
        description: parsedData
      })
    });
    console.log(this.state.description);

  }

  
  


  render() {
    return (
      <div className = "container">
       <div className = "blank">
         something else
       </div>
       <div className = "content">
        <ShoeName data = {this.state.description}/>
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
        <ShoeDescription data = {this.state.description}/>
       </div> 
      
      </div>

      );
  }

}
