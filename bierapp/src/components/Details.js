import React, { useEffect, useState } from 'react';
import {withRouter} from 'react-router'

import { useParams,
    Link
  } from "react-router-dom";
import getRandomBeers from './getRandomBeers.js'

const Details = (props) => {

    const API_BASE = 'https://ih-beers-api2.herokuapp.com/beers/' + props.match.params.id;


    const [details, setDetails] = useState();
    const {id} = useParams();

    useEffect(()=>{
        showMe()
    }, []);

    const showMe = async () =>{
        const api = await fetch(API_BASE)
        const getShow = await api.json()
        setDetails(getShow)
    }


    return (
        <div>
            <h2>I am detail</h2>
            <img src={'foto'} alt=""/>
            <div className='div-info-details'>
                <h3>{details.name}</h3>
                <p> <strong>A real ....</strong></p>
                <figcaption></figcaption>
                <figcaption></figcaption>
                <p>A light</p>
                <Link to={'/details/'+props._id}><button onClick={Details}>Aqui Button back</button></Link>
            </div>
        </div>
     );
}
 
export default withRouter (Details);