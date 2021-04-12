import './App.css';
import { getAllBeers, getBeer, getRandomBeer } from './BeerApi/api';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import BeerApi from './BeerApi.js'


class List extends Component {

    state={
      posts: []
    }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: []
  //   }
  // }

  componentDidMount() {

    axios.get('https://ih-beers-api2.herokuapp.com/beers/'+this.state.posts.map(()=>{
      
    }))
    .then(response=>{
      this.setState({posts: response.data});
      console.log(response);
    })
    // // Get 1 beer
    // getBeer('5fb6a86265b9c209606e10e2').then(data => console.log(data));

    // // Get all beers
    // getAllBeers().then(data => this.setState({beers: data}));

    // // Get a random beer
    // const posts = this.state.posts.map((post => {
    // getRandomBeer().then(data => console.log(data))
  }
  

  render() {
    //nur JS RETUNR
      return <Post 
      key={this.state.posts.id}
      image={this.state.posts.image_url}
      name={this.state.posts.name}
      tagline={this.state.posts.tagline}
      first_brewed={this.state.posts.first_brewed}
      description={this.state.posts.description}
      id={this.state.posts._id} />;
      // return(
      //   <div>
      //   {posts}
      //   </div>
      // )
  }

  //no es funcion
    // return (<ul>{ this.state.beers.map((beer, index) => 
    //   <li key={index}>{ beer.name }</li>
    //   ) 
    //   }</ul>
    //   )
  }

export default List;