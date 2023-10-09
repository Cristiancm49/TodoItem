import React from "react";
import "./TodoSearch.css"


function TodoSearch ({ searchValue, setSearchValue }) {

 

  console.log("Buscan =" + searchValue);
    return (
      <input  
      className="InputSearchTask" 
      value={searchValue}
      placeholder=" Que buscas?"
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      />
    );
  }

export { TodoSearch };