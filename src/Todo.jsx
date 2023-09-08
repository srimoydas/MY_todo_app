import React from 'react';

const Todo = ({ todo }) => {
  console.log(todo)
  const delete_todo=(e)=>{
    e.target.remove()
  }
  return (
    
    <div className="todo-list">
    {todo.length > 0 ? (
      <ul className="task-list">
        {todo.map((item, i) => (
          <li key={i} className="task-item" onDoubleClick={delete_todo}>
            {item}
            
            
          </li>
        ))}
      </ul>
    ) : (
      <p>No tasks to display.</p>
    )}
  </div>
  
  
  );
}

export default Todo;
