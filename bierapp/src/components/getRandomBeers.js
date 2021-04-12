// import { useEffect, useState } from "react";
import {useEffect, useState} from 'react;'
import React from 'react'
//o React.useState() line 9
// React.useEffect() line 13
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';

const getRandomBeers = () => {

    const [random, setRandom]= useState([])
    const {id} = useParams()

    useEffect(()=>{
        getDATA()
    }, id)


    const getDATA =  async () => {
        const data = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        const beers = await data.json()
        setRandom(beers)
        // console.log(getDATA)
    }


    return (
        <div className='box-random'>
            {random.map((item, index)=>(
                <div className='box-img-left' key={index}>
                        <img className='img-beer' src={item.image_url} alt=""/>
                    <div className='info-right'>
                        <h3><strong>{item.name}</strong></h3>
                        <p className='short-info'>{item.tagline}</p>
                        <p>Created By: {item.name}</p>
                        <Link to='/:id'><button className='link-button'>Details</button></Link>
                    </div>
                </div>
            ))}
        </div>
        
    )
}

export default getRandomBeers;