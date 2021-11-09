import CakeCard from "./CakeCard";

function CakeContainer({cakeList, handleCakeDetail}){
    return(
        <>
        {cakeList.map(cake => <CakeCard handleCakeDetail={handleCakeDetail} key={cake.flavor} cakeObj={cake} />)}
        </>
    )
}

export default CakeContainer

