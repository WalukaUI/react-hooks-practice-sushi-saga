import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({slicedsushi,sushi,setSushisliced,eatenfunc,plates}) {
  const [sushiIndex, setSushiIndex] = useState(0);
  function nums(){
    setSushiIndex((sushiIndex) => (sushiIndex + 4) % sushi.length);
    let arr=[0]
    let cc=[4]
    let ww=arr[0]+sushiIndex
    let rr=cc[0]+sushiIndex
 
     const newAr=sushi.slice(ww,rr)
      setSushisliced(newAr)
   }
    const populatesushi=slicedsushi.map((e)=>{
    return <Sushi 
      key={e.id} 
      Id={e.id} 
      Name={e.name}
      Image={e.img_url}
      Price={e.price}
      Eaten={e.eaten}
      eatenfunc={eatenfunc}
      plates={plates}
      //platesArr={platesArr}
      />
      
    })
  
  return (
    <div className="belt">
      {populatesushi}
      <MoreButton nextPage={nums}/>
    </div>
  );
}

export default SushiContainer;
