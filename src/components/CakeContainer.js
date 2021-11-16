import CakeCard from "./CakeCard";

function CakeContainer({cakeList}){
    return(
        <>
        {cakeList.map(cake => <CakeCard key={`${cake.id}.${cake.flavor}`} cakeObj={cake} />)}
        </>
    )
}

export default CakeContainer

