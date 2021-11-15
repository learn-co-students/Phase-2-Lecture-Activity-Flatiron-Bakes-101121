import CakeCard from "./CakeCard";

function CakeContainer({cakeList, handleCakeDetail}){
    return(
        <>
        {cakeList.map(cake => <CakeCard key={`${cake.id}.${cake.flavor}`} cakeObj={cake} handleCakeDetail={handleCakeDetail}/>)}
        </>
    )
}

export default CakeContainer

