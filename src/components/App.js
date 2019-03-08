import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap';

import Profile from './Profile';
import Slider from './Slider';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      currentTab: 'profile'
    }
  }
  render() {
    return (
      <div className="App">
         <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">My Github Profile</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#slider" onClick={() => this.setState({currentTab:'slider'})}>Slider</Nav.Link>
            <Nav.Link href="#profile" onClick={()=> this.setState({currentTab:'profile'})}>Profile</Nav.Link>
          </Nav>
         </Navbar>
         <div>
            {this.state.currentTab === 'slider' ? <Slider/> : false }
            {this.state.currentTab === 'profile' ? <Profile/> : false} 
         </div>
      </div>
    );
  }
}

export default App;
