import React from "react";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { CreateNewTodos } from "../components/CreateNewTodos/CreateNewTodos";
import { TodosError } from "../components/TodosError/TodosError";
import { TodosLoading } from "../components/TodosLoading/TodosLoading";
import { TodoContext } from "../components/TodoContext/TodoContext";
import "./App.css";

function AppUi() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo } =
    React.useContext(TodoContext);

  return (
    <>
      {loading ? (
        <TodosLoading />
      ) : (
        <div className="container">
          <div className="ContainerCreateTodo">
            <CreateTodoButton />
          </div>

          <div className="ContainerTaskList">
            <TodoCounter />
            <TodoSearch />

            <TodoList className="asd">
              
              {error && <TodosError />}
              {!loading && searchedTodos == 0 && <CreateNewTodos />}
              {searchedTodos.map((todo) => (
                <TodoItem
                  className="item"
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
          </div>
        </div>
      )}
    </>
  );
}

export { AppUi };
