import {Link} from 'react-router-dom';
import {useParams} from 'react-router'

const AllBeers = (props) => {
    // const {id} = useParams();

    console.log(props.useParams)

    return (  
        <h2>I am the all beers</h2>,
        <Link to='/'><button>Details</button></Link>

    );
}
export default AllBeers;