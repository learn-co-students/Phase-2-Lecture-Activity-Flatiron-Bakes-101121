import {useState, useEffect} from 'react'
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
  const [cakeDetail, setCakeDetail] = useState(null)

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

  const handleCakeDetail = (cakeId) => {
    setCakeDetail(cakeId)
  }



  
  
  return (
    <div className="App">
      <Header bakeryName="FlatironBakes" slogan="live love code bake repeat"/>
      <Form handleAddCake={handleAddCake}/>
      {cakeDetail?<CakeDetail cakeId={cakeDetail}/>:null}
      <Search search={search} handleSearch={handleSearch}/>
      <CakeContainer cakeList={cakeList} handleCakeDetail={handleCakeDetail}/>

    </div>
  );
};

export default App;
