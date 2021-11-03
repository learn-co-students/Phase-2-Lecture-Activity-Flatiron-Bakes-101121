//Components
import CakeContainer from "./CakeContainer";
import Header from "./Header";
import Search from "./Search";

//data
import {cakes} from "../data/cakesData"

function App() {
  
  
  return (
    <div className="App">
      <Header bakeryName="FlatironBakes" slogan="live love code bake repeat"/>
      <Search search={search} handleSearch={handleSearch}/>
      <CakeContainer cakeList={cakeList}/>

    </div>
  );
};

export default App;
