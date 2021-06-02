import React, { useState } from "react";

function Sushi({ Id, Name, Image, Price, eatenfunc,plates}) {
  const [eat, seteat] = useState(false)
  
  function changeStatus(e) {
    e.preventDefault()
    seteat(!eat)
    eatenfunc(Id,eat,Price)
  }

  return (
    <div className="sushi" key={Id}>
      <div className="plate" onClick={plates>0?changeStatus:()=>alert("No free meals! Your wallet is empty")}>
        {/* Tell me if this sushi has been eaten! */}
        {eat ? null : (
          <img
            src={Image}
            alt={Name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {Name} - ${Price}
      </h4>
    </div>
  );
}

export default Sushi;
