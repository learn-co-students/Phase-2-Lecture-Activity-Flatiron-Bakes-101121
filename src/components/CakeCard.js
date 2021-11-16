import {useState} from 'react'
import {Link} from 'react-router-dom'

function CakeCard({cakeObj:{flavor,size = '6" cake',price, id}}){
    const [liked, setLiked] = useState(false)

    const handleLike = () =>{
        setLiked((currentLike) => !currentLike)
    }
return(
        <>
            <h1>Flavor: {flavor}</h1>
            <p>Size:{size}</p>
            <p>Price: {price}</p>
            <p onClick={handleLike}>{liked?'♥':'♡'}</p>
            <Link to={`/cakes/${id}`}>Click for Details</Link>
        </>
    )
}
export default CakeCard

