import React, { Component } from 'react'
// import {browserHistory} from 'react-router-dom'
// import axios from 'axios'

import getAllBeers from './components/getAllBeers.js'
// import RandomBeers from './components/getRandomBeers.js'
import getRandomBeers from './components/getRandomBeers'
// import GetRandomBeers from './components/getRandomBeers.js'

import Details from './components/Details'
// import ScrollMemory from 'react-router-scroll-memory';
import ImgOne from '../src/Img/christin-hume-08tX2fsuSLg-unsplash.png'
import ImgTwo from '../src/Img/proriat-hospitality-flENqflm6xU-unsplash.jpg'
import Img from './Img/bier 1 svg final.svg'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Post from './components/Post'

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
    // getAllBeers().then(data => 
    //   this.setState({beers: data}));

    // Get a random beer
    // GetRandomBeers().then(data => console.log(data))
  }
  render() {
    return (
      <div className="App">
        {/* <ul>{ this.state.beers.map((beer, index) => 
      <li key={index}>{ beer.name }</li>) }
      </ul> */}
        <Router>
          <Switch>
            <Route path='/details/:id' component={Post} />
            <Route path='/details' component={Details} />

            <Route path='/randomBeers' component={getRandomBeers} />

            <Route path='/' component={Home} />

          </Switch>
        </Router>
      </div>

    )
  }
}

export default App;

const Home = () => (
  <div>
    <div className='home-page'>
      <div className='cajitas'>
        <img className='img-home' to='/randomBeers' src={ImgOne} alt="erst-beers" />
        <figure> <Link to='/randomBeers'>Random Beers</Link></figure>
        <figcaption>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum accusantium animi quas tempore delectus, porro ab magni nisi eligendi sint minima, nam deleniti cum cumque modi nobis est? Saepe, cum? </figcaption>
      </div>

      <div className='cajitas'>
        <img className='img-home' to='/' src={ImgTwo} alt="zweites-beers" />
        <figure> Random BEERS</figure>
        <figcaption>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quaerat minima aperiam fugiat perspiciatis numquam qui natus laboriosam architecto culpa excepturi quasi sequi quibusdam, delectus hic? Quas sed velit eum?</figcaption>
      </div>

    </div>
    <div className='box-footer'>
      <div className='div-cirle-white'>
        <img src={Img} alt="none" />
      </div>
    </div>
  </div>

)