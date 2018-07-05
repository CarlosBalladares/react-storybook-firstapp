import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import NavBar from './components/navbar'


function concat(a:string, b:string){
  return a+b;
}

class App extends Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Button variant="contained" color="primary">
              Hello World
            </Button>
            <NavBar/>
        </p>
      </div>
    );
  }
}

export default App;
