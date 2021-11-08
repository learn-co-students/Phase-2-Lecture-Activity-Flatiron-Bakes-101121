import {useState} from 'react'
//Components
import CakeContainer from "./CakeContainer";
import Header from "./Header";
import Search from "./Search";
import Form from "./Form"

//data
import {cakes} from "../data/cakesData"

function App() {
  const [cakeList, setCakeList] = useState(cakes)
  const [search, setSearch] = useState('')

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
