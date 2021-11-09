import {useEffect, useState} from 'react'
//Components
import CakeContainer from "./CakeContainer";

import Header from "./Header";
import Search from "./Search";
import Form from "./Form"

//data
import {cakes} from "../data/cakesData"
import CakeDetail from './CakeDetail';

function App() {
  const [cakeList, setCakeList] = useState([])
  const [allCakes, setAllCakes] = useState([])

  const [search, setSearch] = useState('')
  const [cakeDetail, setCakeDetail] = useState(null)

  useEffect(() => {
    fetch("http://localhost:4000/cakes")
    .then(res => res.json())
    .then(data => {
      setAllCakes(data)
      setCakeList(data)
    })
  },[])

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setCakeList(allCakes.filter(cake => cake.flavor.includes(e.target.value)))
  }

  const handleAddCake = (cake) => {
    fetch("http://localhost:4000/cakes",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cake)
    })
    .then(res => res.json())
    .then(data => {
    setCakeList([data, ...cakeList])
    })
  }

  const handleCakeDetail = (cakeID) => {
    setCakeDetail(cakeID)
  }

  const handleDelete = (cakeId) => {
    fetch(`http://localhost:4000/cakes/${cakeId}`,{
      method:'DELETE'
    })
    .then(res => res.json())
    .then(data => console.log(data))
  } 
  
  return (
    <div className="App">
      <Header bakeryName="FlatironBakes" slogan="live love code bake repeat"/>
      <Form handleAddCake={handleAddCake}/>
      {cakeDetail?<CakeDetail handleDelete={handleDelete} cakeId={cakeDetail} />:null}
      <Search search={search} handleSearch={handleSearch}/>
      <CakeContainer handleCakeDetail={handleCakeDetail} setCakeDetail={setCakeDetail} cakeList={cakeList}/>

    </div>
  );
};

export default App;
