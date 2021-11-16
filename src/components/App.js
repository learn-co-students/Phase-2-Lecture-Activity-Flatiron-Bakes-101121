import {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router';

//Components
import CakeContainer from "./CakeContainer";
import Header from "./Header";
import Search from "./Search";
import Form from "./Form"
import CakeDetail from './CakeDetail'




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

  const handleAddCake = (cake) => {
    fetch("http://localhost:4000/cakes",{
      method:'POST',
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

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setCakeList(cakes.filter(cake => cake.flavor.includes(e.target.value)))
  }

 


  return (
    <div className="App">
      <Header bakeryName="FlatironBakes" slogan="live love code bake repeat"/>
      <Switch>

        <Route path="/cakes/new">
          <Form handleAddCake={handleAddCake}/>
        </Route>

        <Route path="/cakes/:id">
          <CakeDetail />
        </Route>

        <Route path="/cakes">
          <Search search={search} handleSearch={handleSearch}/>
          <CakeContainer cakeList={cakeList} />
        </Route>
  
      </Switch>
    </div>
  );
};

export default App;
