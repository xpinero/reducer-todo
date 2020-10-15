import React, {useReducer, useState} from 'react';
import Reducer from '../reducers/reducer';

const useForm = () => {
  const [{todo}, dispatch] = useReducer(Reducer, {todo: []})
  const [task, setTask] = useState("");

  return(
    <div>
      <div>
        {todo.map((todo, index) => (
          <div 
          key={index}
          onClick={() => dispatch({type: "TOGGLE_TODO", index})}
          style={{
            textDecoration: todo.completed ? 'line-through' : "", 
            color: todo.completed ? 'pink' : "black",
            cursor: 'pointer'
          }}
          >{todo.item}</div>
        ) )}
      </div>
      <form 
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({type: "ADD_TODO", task});
        setTask("");
      }}
      >
        <input 
          type='text' 
          name='input' 
          value={task}
          onChange={(e) => {
            setTask(e.target.value)
          }}
        />
        <button>Add</button>
      </form>
      <button
      onClick={() => {
        dispatch({type: "REMOVE_TODO"})
      }}
      >Clear</button>
    </div>
  )
} 

export default useForm;