import React from "react";
import { useTodos } from "./useTodos"
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoHeader } from "../components/TodoHeader/TodoHeader";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { CreateNewTodos } from "../components/CreateNewTodos/CreateNewTodos";
import { TodosError } from "../components/TodosError/TodosError";
import { TodosLoading } from "../components/TodosLoading/TodosLoading";
import "./App.css";

function App() {
  const { 
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    newTodoValue,
    setNewTodoValue
  } = useTodos();
  return (
    <>
      {loading ? (
        <TodosLoading />
      ) : (
        <div className="container">
          <div className="ContainerCreateTodo">
            <CreateTodoButton
            addTodo={addTodo} 
            newTodoValue={newTodoValue} 
            setNewTodoValue={setNewTodoValue}

            />
          </div>

          <div className="ContainerTaskList">
            <TodoHeader>
              <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos}/>
              <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            </TodoHeader>

            <TodoList
            error={error}
            loading={loading}
            searchedTodos={searchedTodos}
             onError={()=> <TodosError />}
             onLoading={()=> <TodosLoading />}
             onNullTodos={()=> <CreateNewTodos />}
             render = { todo => ( <TodoItem
              className="item"
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />)

             }
            />

          </div>
        </div>
      )}
    </>
  );
}

export default App;
