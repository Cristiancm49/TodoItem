import React from "react";

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import "./App.css";

const defaultTodos = [
  { text: "Pelar la cebolla", completed: false },
  { text: "Cortar carne", completed: false },
  { text: "Lavar tabla", completed: true },
  { text: "1/4 de arina", completed: false },
  { text: "Maiz", completed: true },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={12} total={15} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (<TodoItem key={todo.text} text={todo.text}/>))}

      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
