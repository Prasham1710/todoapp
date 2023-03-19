import React, { useState,useEffect } from 'react'
function App () {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState("")
    const [todoEditing, setTodoEditing] = useState(null)
    const [editingText, setEditingText] = useState("");

    useEffect(()=> {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)

        if(loadedTodos){
            setTodos(loadedTodos)
        }
    },[])
    useEffect(() => {
        const temp = localStorage.getItem("todos")
        localStorage.setItem("todos",temp)
    }, [todos])

    function handleSubmit(e){
        e.preventDefault()
    const newTodo = {
        id: new Date().getTime(),
        text: todo,
        completed: false,
    }

    setTodos([...todos].concat(newTodo))
    setTodo("")
}
function deleteTodo(id) {
    const updatedTodos =[...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
}
function toggleComplete(id){
    const updatedTodos = [...todos].map((todo) => {
        if(todo.id === id){
            todo.completed = !todo.completed
        }
        return todo
    })
    setTodos(updatedTodos)
}
function editTodo(id) {
    const updatedTodos = [...todos].map((todo) => {
        if(todo.id === id){
            todo.text = editingText
        }
        return todo
    } )
    setTodos(updatedTodos)
    setTodoEditing(null)
    setEditingText("")
}
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <form  onSubmit={handleSubmit} className=''>
            <input className= 'w-70 border relative   p-1 bg-red-300' type="text" placeholder = "enter your task" onChange={(e) => setTodo(e.target.value)} value={todo}/>
            <button className='border w-[25%] rounded-xl my-7 py-1  bg-blue-700 hover:bg-indigo-500 text-white' type='submit'>AddTodo</button>
        </form>
        
        <div >
        {todos.map((todo) => <div  className='flex' key={todo.id}> 
        <input type="checkbox" onChange={() => toggleComplete(todo.id)}
        checked={todo.completed} />
        {todoEditing === todo.id ?
        (<input className='w-70 border relative h-10  p-1 bg-red-300'
         type="text" 
         onChange={(e) => setEditingText(e.target.value)} 
         value={editingText} />) 
         : 
         (<div>{todo.text}</div>)}
        
        
        <button className='border w-[90%] rounded-xl my-7 py-1  bg-blue-700 hover:bg-indigo-500 text-white' onClick={()=> deleteTodo(todo.id)}>Delete</button>

        {todoEditing === todo.id ? ( <button onClick={() => editTodo(todo.id)}>Submit Edits </button>):(<button onClick={() => setTodoEditing(todo.id)}>Edit </button>)}   
        </div>
        )}
        </div>
    </div>
  )
}

export default App