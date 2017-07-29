import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Modal, Button} from 'react-bootstrap'

class App extends Component {
  // constructor(props){
  //   super(props);
     
  //}
  buttonClick(){
    console.log(this);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={(e)=>this.buttonClick()}>Show Modal</Button>
        <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Some Text</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         Modal Content
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal> 
      </div>
      
    );
  }
}

export default App;
