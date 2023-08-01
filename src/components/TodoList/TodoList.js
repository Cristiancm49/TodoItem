import './TodoList.css'

function TodoList ({children}) {
    return (
        <ul className="ContainerListTask">
            {children}
        </ul>
    );
  }

export { TodoList };