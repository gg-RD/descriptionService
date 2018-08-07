import React from 'react'; 
import ReactDOM from 'react-dom'; 
import $ from 'jquery';
import style from 'styled-components'
import FontAwesome from 'react-fontawesome';
import SizeTable from './sizeTable.jsx';
import ShippingReturns from './shippingReturns.jsx';
import Reviews from './reviews.jsx';
import ShoeDescription from './shoeDescription.jsx';
import AddToCart from './addToCart.jsx';
import ShoeName from './shoeName.jsx';
//


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
        shoe_style: '',
      }],
      visible_shippings: false,
      visible_reviews: false,
    };
    this.getDescriptions = this.getDescriptions.bind(this);
  }


  componentDidMount() {
    this.getDescriptions();
  }

  getDescriptions() {
    const setState = this.setState.bind(this);

    $.get('http://ec2-54-183-12-206.us-west-1.compute.amazonaws.com/description', (data) => {
      const parsedData = JSON.parse(data);
      setState({
        description: parsedData
      });
    });
  }


  render() {
    let shipping;
    if(this.state.visible_shippings){
      shipping = <ShippingReturns />
    } else {
      shipping = '';
    }

    let review;
    if(this.state.visible_reviews){
      review = <Reviews />
    } else {
      review = '';
    }
    return (
     

        <Content >
          <ShoeName data = {this.state.description}/>
          <SizeTable/>
          <AddToCart/>

          <ShippingMain onClick = {() => {this.setState({visible_shippings : !this.state.visible_shippings}) } }>FREE SHIPPING & RETURNS
            <div>{this.state.visible_shippings ? <FontAwesome name='fas fa-minus' /> : <FontAwesome name='fas fa-plus' />} 
            </div>
          </ShippingMain>
          <div >
            {shipping}
          </div>

          <ShippingMain onClick = {() => {this.setState({visible_reviews : !this.state.visible_reviews}) } }>REVIEWS (3) 
            <div>{this.state.visible_reviews ? <FontAwesome name='fas fa-minus' /> : <FontAwesome name='fas fa-plus' />} 
            </div>
          </ShippingMain>
          <div>
            {review}
          </div>

          <ShoeDescription data = {this.state.description}/>
        </Content> 
        
  

      );
  }


}



const Content = style.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:flex-start;
    margin: 0;
`
const ShippingMain = style.div `
    display: flex;
    justify-content: space-between;
    margin: 10px 20px 10px 0px;

`






