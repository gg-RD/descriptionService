//render description
import React from 'react';
import ReactDOM from 'react-dom'



export default class Description extends React.Component {
  constructor() {
    super();

    this.state = {
      term: 'This should render...'
    }; 
  }

  

 

  render() {
    return (
      <div>
        this should render
      </div>
    );
  }
}