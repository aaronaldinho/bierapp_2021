// import { useEffect, useState } from "react";
import React, {useEffect, useState} from 'react';

import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';

function GetRandomBeers () {

    const [random, setRandom]= useState({
        loading: true,
    });
    const {id} = useParams()

    useEffect(()=>{
        setTimeout(()=>{
            getDATA()
            setRandom({loading: false});
        }, 2500)
    }, [id])

    const {loading} = random;


    const getDATA =  async () => {
        const data = await fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
        const beers = await data.json()
        setRandom(beers)
        // console.log(getDATA)
    }

    return (

        <div className='loading-random'>
            {loading ? (
                <h2>Component is loading....</h2>
            ):(
        <div className='box-random'>
            <h2> Enjoy responsibly</h2>
            <div className='box-img-left'>
                        <img className='img-beer' src={random.image_url} alt=""/>
                    <div className='info-right'>
                        <h3><strong>{random.name}</strong></h3>
                        <p className='short-info'>{random.tagline}</p>
                        <p>Created By: {random.name}</p>
                        <Link to='/:id'><button className='link-button'>Details</button></Link>
                    </div>
                </div>
        </div>
            )}
        </div>
        
    )
}

export default GetRandomBeers;