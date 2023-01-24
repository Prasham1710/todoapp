import React, { useState} from 'react'

function TodoForm() {
    const [input, setInput ] = useState('');

    
  return (
    <div>
        <input
              className="shadow appearance-none border rounded focus:shadow-outline"
              id="Height "
              type="text"
              value={input}
              name= 'text'
              placeholder="Height in cm"
              />
        
        
        <button className='todo-button'>Add todo</button>
    </div>
  )
}

export default TodoForm