import {useState, useEffect} from 'react' 
import {useParams} from 'react-router-dom'

function CakeDetail(){
    const [cake, setCake] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const cakeId = useParams().id
    console.log(useParams())

    useEffect(()=>{
        fetch(`http://localhost:4000/cakes/${cakeId}`)
        .then(res => res.json())
        .then(data => {
            setCake(data)
            setIsLoaded(true)
        })

    },[])

    if(!isLoaded) return <div>Loading...</div>
    return(
        <>
            <img src={cake.image} /> 
            <h1>Flavor: {cake.flavor}</h1>
            <p>Size: {cake.size}</p>
            <p>Price: {cake.price}</p>
            <p>{cake.description}</p>
        </>
    )
}

export default CakeDetail