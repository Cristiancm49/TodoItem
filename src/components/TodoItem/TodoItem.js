import { CompleteIcon } from '../CompleteIcon/CompleteIcon'
import { DeleteIcon } from '../DeleteIcon/DeleteIcon'
import "./TodoItem.css"


function TodoItem(props) {
  return (
    <div className="ContainerListTask">
      <li className="Task">
        <div className="ContainerInfoTask">
        <CompleteIcon 
        completed={props.completed} 
        onComplete={props.onComplete}
        />

        <p 
          className={`TextTask ${props.completed
          && "TextTaskComplete"}`}>
          {props.text}
         </p>
         <DeleteIcon onDelete = {props.onDelete} />
        </div>
      
      </li>
    </div>
  );
}

export { TodoItem };
