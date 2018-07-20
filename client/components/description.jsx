//render description
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'




export default class Description extends React.Component {
  constructor() {
    super();

    this.state = {
      description: [{
        _id:''
        shoe_name: '',
        shoe_price: '',
        shoe_descpription: '',
        shoe_size: []

      }]
    }; 

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
      }, function(){
        console.log(this.state.description)
      });
    });

      console.log(this.state.description);

  }

  

 

  render() {
    return (
      <div>
        {this.state.description[0].shoe_name}
      </div>
    );
  }
}