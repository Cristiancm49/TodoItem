import React from "react";
import "./TodoSearch.css"
import { TodoContext } from "../TodoContext/TodoContext";

function TodoSearch () {

  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext);
 

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