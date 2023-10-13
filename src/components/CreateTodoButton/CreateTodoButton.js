import React from 'react';
import './CreateTodoButton.css'



function CreateTodoButton ({ addTodo, newTodoValue, setNewTodoValue }) {

    const onSubmit = (event) => { 
        event.preventDefault()
        addTodo(newTodoValue)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }


    return (
        <>
        <form onSubmit={onSubmit} className='ContainerCreateTodoBtn'>
            <h2 className='TitleCreateTask'>Crear nueva tarea</h2>
            <p className='TitleInputTask'>Registra tarea</p>
            <input 
            className='InputNewTodos'
             placeholder=' Escribe nueva tarea'
             value={newTodoValue}
             onChange={onChange}></input>
            
            <button type='submit' className="CreateTodoBtn">Crear tarea</button>
        </form>
        
        
        </>
        
    );
}

export { CreateTodoButton };