import { useEffect, useState } from "react";
import React from 'react'
//o React.useState() line 9
// React.useEffect() line 13
import {Link} from 'react-router-dom';

const RandomBeers = () => {

    // const ApiRandom  = 'https://ih-beers-api2.herokuapp.com/beers'
    const [random, setRandom]= useState([])

    useEffect(()=>{
        console.log('aqui')
        getDATA()
    }, [])


    const getDATA =  async () => {
        const data = await fetch('https://ih-beers-api2.herokuapp.com/beers')
        const beers = await data.json()
        setRandom(beers)
        // console.log(getDATA)
    }

    // if(typeof getDATA === undefined)
    //     return (
    //             <div>eRROR!</div>
    //     )
    //     else{
    //         <div>Loading</div>
    //     }

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
        // <div className='box-random'>
        //   {random.map((item, index) => (
        //     <div key={index}>
        //         <p>{item.name}</p>
        //                 {/* <img className='info-right' src={item.img_url} alt=""/> */}
        //             <div className='short-info'>
        //                 {/* <h3>{item.name}</h3> */}
        //                 <Link> <button className='link-button'>Read More</button>
        //                 </Link>
        //           </div>
        //     </div>
        //   )
        //   )}
        // </div>
        //     )
        //     }

export default RandomBeers;