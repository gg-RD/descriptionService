import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styles from "../../public/style.css"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
      visible_info: false,

    }; 

  }

  slideUpShippings() {
    this.setState({ visible_shippings: !this.state.visible_shippings });
  }

  slideUpReviews() {
    this.setState({ visible_reviews: !this.state.visible_reviews });
  }

  slideUpInfo() {
    this.setState({ visible_info: !this.state.visible_info });
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
        <ShoeName />
        <SizeTable/>
        <AddToCart/>
        <div >FREE SHIPPING & RETURNS</div>
        <div ><ShippingReturns /></div>
        <div >REVIEWS (154)</div>
        <div ><Reviews /></div>
        <ShoeDescription/>
      
      </div>

      );
  }

}
