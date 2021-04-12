import {Link} from 'react-router-dom';
import React from 'react';
//ESTE ES EL DETALLE DE LA CERVEZA



const Post = (props) => {
    return ( 
        <div>
            <h2>AQUIIIIII</h2>
            <div>{props.name}</div>
            <img src={props.image_url} alt="something"/>
            <p>{props.tagline}</p>
            <p>{props.first_brewed}</p>
            <p>{props.description}</p>
            {/* <Link to={'/details/'+random._id}><button className='link-button'>Details</button></Link> */}
            <Link to={'/details/'+props._id}><button className='link-button'>More</button></Link>
        </div>
     );

}
 
export default Post;