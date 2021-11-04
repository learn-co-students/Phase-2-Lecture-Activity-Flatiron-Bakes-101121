import {useState} from 'react'
//Components
import CakeContainer from "./CakeContainer";
import Header from "./Header";
import Search from "./Search";

//data
import {cakes} from "../data/cakesData"

function App() {
  const [cakeList, setCakeList] = useState(cakes)

  
  
  return (
    <div className="App">
      <Header bakeryName="FlatironBakes" slogan="live love code bake repeat"/>
      <Search />
      <CakeContainer cakeList={cakeList}/>

    </div>
  );
};

export default App;
