import React from 'react'

import AllBeers from './components/AllBeers.js'
import RandomBeers from './components/RandomBeer.js'
import Footer from './components/Footer'
import ScrollMemory from 'react-router-scroll-memory';

// import {Component} from 'react';
// import {AllBeers, Randombier};

// import Img from './Img/bier 1 svg final.svg'

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


import './App.css';
// import { getAllBeers, getBeer, getRandomBeer } from './BeerApi/api';
import { Component } from 'react';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beers: []
    }
  }

  componentDidMount() {

    // Get 1 beer
    // getBeer('5fb6a86265b9c209606e10e2').then(data => console.log(data));

    // // Get all beers
    // getAllBeers().then(data => this.setState({beers: data}));

    // // Get a random beer
    // getRandomBeer().then(data => console.log(data))
  }



  render() {
      return (
        <div className="App">
      <ul>{ this.state.beers.map((beer, index) => <li key={index}>{ beer.name }</li>) }</ul>
    <Router>
      <ScrollMemory></ScrollMemory>
      <Switch>
        <Route>

          <Router> <div>To all</div>
            <AllBeers/>
          </Router>

          <Router>
      <RandomBeers/>
          </Router>



          <Router>
            <Footer/>
          </Router>

        </Route>
      </Switch>
    </Router>
  </div>
       
      )
}  
}