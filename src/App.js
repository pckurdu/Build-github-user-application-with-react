import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Info from './components/Info';
import Form from './components/Form';

class App extends Component {
  state={
    user:''
  }

  information=(user)=>{
      this.setState({
        user:user
      })
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Form info={this.information}/>
        <Info user={this.state.user}/>
      </div>
    );
  }
}

export default App;
