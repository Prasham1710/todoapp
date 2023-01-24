import React, { useState} from 'react'

function TodoForm() {
    const [input, setInput ] = useState('');
  return (
    <div>
        <input
              
              id="Height "
              type="text"
              value={input}
              placeholder="Height in cm"
              />
        
        
        <button className='todo-button'>Add todo</button>
    </div>
  )
}

export default TodoForm