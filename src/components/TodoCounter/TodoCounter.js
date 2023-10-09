
import './TodoCounter.css'
import React from 'react';

function TodoCounter ({ completedTodos, totalTodos }) {


    return (
      <>
        <h1 className="TitleTask">Tus tareas</h1>
        <div className='ContainerTodoCounter'>
        <h4 className='InfoTaskComplete'> completadas </h4>
        <h4 className='ColorNumberTodoCounter'> {completedTodos} </h4>
        <h4> de </h4>
        <h4 className='ColorNumberTodoCounter'> {totalTodos} </h4>
        </div>
        
      </>
      
    );
  }

export { TodoCounter };