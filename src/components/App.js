import {useState, useEffect} from 'react'
//Components
import CakeContainer from "./CakeContainer";
import Header from "./Header";
import Search from "./Search";
import Form from "./Form"



function App() {
  const [cakes, setCakes] = useState([])
  const [cakeList, setCakeList] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:4000/cakes')
    .then(res => res.json())
    .then(data => {
      setCakes(data)
      setCakeList(data)
    })
  },[])

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setCakeList(cakes.filter(cake => cake.flavor.includes(e.target.value)))
  }

  const handleAddCake = (cake) => {
    setCakeList([cake, ...cakeList])
  }

  
  
  return (
    <div className="App">
      <Header bakeryName="FlatironBakes" slogan="live love code bake repeat"/>
      <Form handleAddCake={handleAddCake}/>
      <Search search={search} handleSearch={handleSearch}/>
      <CakeContainer cakeList={cakeList}/>

    </div>
  );
};

export default App;
