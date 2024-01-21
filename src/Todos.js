import React from "react";
import trash from "./icons/trash.svg";

const Todos = ({todos , deleteTask}) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return(
      <div className="todo-list" tid={todo.id} >
        <ul>
          <li>
            {todo.content}
            <img src={trash} onClick={() => {deleteTask(todo.id)}}/>
          </li>
        </ul>
      </div>
      )
    })
    ) : ( <p className="nowork"> Congrats! You have completed all your tasks </p> )

  return (
    <div className="todo-collection" >
      { todoList }
    </div>
  )
}

export default Todos