import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import Clscomponent from './Clscomponent';
import Profile from './Profile'
import Simple from './Simple'
import Event from './Event'

export default class App extends Component {
  render() {
    return (
    <center>
        <div>
          <Event />
        <Simple />
         <h1>Function Component</h1>
         <Profile />

        <header className='App-header'>
          <img src={logo} classname="App-logo" alt="logo" />
         
        </header>
        <Clscomponent />
      </div>
    </center>
    );
  }
}
