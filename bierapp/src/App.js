import React, { Component } from 'react'
import {browserHistory} from 'react-router-dom'
import axios from 'axios'

import getAllBeers from './components/getAllBeers.js'
// import RandomBeers from './components/getRandomBeers.js'
import getRandomBeers from './components/getRandomBeers.js'
import Footer from './components/Footer'
import Details from './components/Details'
import ScrollMemory from 'react-router-scroll-memory';
import ImgOne from '../src/Img/christin-hume-08tX2fsuSLg-unsplash.png'
import ImgTwo from '../src/Img/proriat-hospitality-flENqflm6xU-unsplash.jpg'
// import {AllBeers, Randombier};
// import Img from './Img/bier 1 svg final.svg'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// import {Component} from 'react-router-dom'
import './App.css';
// import { render } from '@testing-library/react'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beers: []
    }
  }

  componentDidMount() {

    // Get 1 beer
    // getBeer('5fb6a86265b9c209606e10e2').then(data => console.log(data));

    // Get all beers
    getAllBeers().then(data => this.setState({beers: data}));

    // Get a random beer
    getRandomBeers().then(data => console.log(data))
  }
    render(){


      return (
        <div className="App">
      <ul>{ this.state.beers.map((beer, index) => 
      <li key={index}>{ beer.name }</li>) }
      </ul>
    <Router>

      <Switch>
        <Route>
          <Router path='/details' component={Details}/>
          <Route/>
          <Details/>
          <RandomBeers/>
        </Route>
      </Switch>

    </Router>
  </div>

      )
    }
  }

export default App;

const Home = () => (
  <div>
      <figure className='home-page'>
          <img className='img-home' onClick={getAllBeers} src={ImgOne} alt=""/>
          <figure>Random Beers</figure>
          <figcaption>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum accusantium animi quas tempore delectus, porro ab magni nisi eligendi sint minima, nam deleniti cum cumque modi nobis est? Saepe, cum?</figcaption>
          <img className='img-home' onClick={RandomBeers} src={ImgTwo} alt=""/>
          <figure>RANDOM BEERS</figure>
          <figcaption>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quaerat minima aperiam fugiat perspiciatis numquam qui natus laboriosam architecto culpa excepturi quasi sequi quibusdam, delectus hic? Quas sed velit eum?</figcaption>
      </figure>
      <div className='box-home'>
    <h1>Welcome to my Simple Blog</h1>
    <Link to='/details' path='/details' component={Details}>
     <button className='button-border'>
        Go to Articles</button>
    </Link>
      </div>
  </div>
)