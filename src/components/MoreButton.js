import React from "react";

function MoreButton({nextPage}) {

  function handleClick(e){
    e.preventDefault()
    nextPage()
  }
  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
