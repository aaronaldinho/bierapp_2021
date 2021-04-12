import React, { useEffect, useState, Fragment } from 'react';
// import BeerApi from './BeerApi.js'
import Home from 'react'
import {
    Link
  } from "react-router-dom";
import RandomBeers from './getRandomBeers';

const Details = () => {

    const API_BASE = 'https://ih-beers-api2.herokuapp.com/beers/';


    const [details, setDetails] = useState();

    useEffect(()=>{
        showMe()
    }, []);

    const showMe = async () =>{
        const api = await fetch(API_BASE)
        const getShow = await api.json()
        setDetails(getShow)
    }

    //const details = 0;

    return (
        <Fragment>{}
            <img src={details} alt=""/>
            <div className='div-info-details'>
                <h3>you are</h3>
                <p> <strong>A real ....</strong></p>
                <figcaption></figcaption>
                <figcaption></figcaption>
                <p>A light</p>
                <Link><button onClick={Details}>Aqui Button back</button></Link>
            </div>
        </Fragment>
     );
}
 
export default Details;