import React from "react";

function Table({Arry,cost}) {

  // renders an empty plate for every element in the array
  const emptyPlates = Arry.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));


  return (
    <>
      <h1 className="remaining">
             {cost<0? "Your wallet is empty": `You have: ${cost} remaining!`}
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
