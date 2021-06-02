import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";



function App() {
  const [sushi, setSushi] = useState([])
  const [sushiSliced, setSushisliced] = useState([])

 
  const API = "http://localhost:3001/sushis"
  const aa=[]
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }

    fetch(API, requestOptions)
      .then(r => r.json())
      .then(j => {
        const updatesushi=j.map((s)=>{return {...s,eaten:false}})
        setSushi(updatesushi)
        const sliedArry = updatesushi.slice(0,4)
        setSushisliced(sliedArry)
      })
  },[])
  //const eatenSushis = sushiSliced.filter((sush) => sush.eaten);
  
const[wallet,seta]=useState(100)
const[plates,setPlates]=useState([])

function eatenfunc(Id,trueorFalse,cost){
  seta(wallet-cost)
  plates.push(trueorFalse)
}

  return (
    <div className="app">
      <SushiContainer 
      slicedsushi={sushiSliced} 
      setSushisliced={setSushisliced} 
      sushi={sushi}
      eatenfunc={eatenfunc}
      plates={wallet}
      />
      <Table Arry={plates}sushiSliced={sushiSliced}  cost={wallet} />
    </div>
  );
}

export default App;
