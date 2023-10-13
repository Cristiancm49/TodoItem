import React from 'react';
import './TodoList.css'

function TodoList (props) {
    return (
        <section>
            {props.error && props.onError()}

            <ul className="ContainerListTask">
            {props.children}
            </ul>
        </section>

    );
  }

export { TodoList };