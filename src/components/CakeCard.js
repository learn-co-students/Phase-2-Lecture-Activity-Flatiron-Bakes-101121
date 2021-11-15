import {useState} from 'react'
function CakeCard({cakeObj:{flavor,size = '6" cake',price, id}, handleCakeDetail}){
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
            <button onClick={() => handleCakeDetail(id)}>Click for Details</button>
        </>
    )
}
export default CakeCard

