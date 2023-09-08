
import './App.css';
import { useState } from 'react';
import Todo from './Todo';
function App() {
  const[todo,setTodo]=useState([]);
  const[input,setInput]=useState("");
  const get_todo=(e)=>{
    setInput(e.target.value);
    console.log(input)
  }
  const set_to_do=()=>{
    setTodo([...todo,input])
   
    setInput("");
   
  }
  return (
    <div class="card">
    <h2>My Todo App</h2>
      <div  class="card-content">
      <input type="text" placeholder='Enter your to-do' value={input} onChange={get_todo} className='input'/>
    <button className='btn' onClick={set_to_do}>Add to-do</button>
      </div>

    <div>
    <Todo todo={todo} />
    </div>


    </div>
  );
}

export default App;
