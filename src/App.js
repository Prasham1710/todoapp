import { collection, onSnapshot, query, updateDoc, doc, addDoc , deleteDoc} from 'firebase/firestore';
import React, {useState,useEffect} from 'react'
import {AiOutlinePlus  } from 'react-icons/ai';
import Todo from './Todo';
import { db } from './firebase';
function App () {

const [todos, setTodos] = useState([]);
const [input, setInput] = useState ('')

//create todo
const createTodo =async(e) => {
    e.preventDefault(e)
    if(input === ''){
        alert('Please enter a valid todo')
        return
    }
  await addDoc(collection(db, 'todos'),{
    text: input,
    completed: false
  })
};
//read todo from firebase
useEffect(()=>{
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let todosArr = []
        querySnapshot.forEach((doc) => {
            todosArr.push({...doc.data(), id: doc.id})
        });
        setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);
//update todo from firebase
const toggleComplete = async (todo) =>{
    await updateDoc(doc(db, 'todos' ,todo.id),{
        completed: !todo.completed
    })
}
//Delete todo
const deleteTodo  = async(id) => {
    await deleteDoc(doc(db, 'todos',id))
}
  return (
    <div className='h-screen w-screen p-4 bg-gradient-to-r from-indigo-500 to-pink-500'>
        <div className='bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4'>
            <h3 className='text-3xl font-bold text-center text-gray-800 p-2'>Todo App</h3>
            <form onSubmit={createTodo} className='flex justify-between'>
                <input 
                value= {input} 
                onChange={(e) => setInput(e.target.value)} className='border p-2 w-full text-xl'
                type="text"
                placeholder='Add todo'/>
                <button className='border p-4 ml-2 bg-purple-500 text-slate-100'>
                    <AiOutlinePlus size={30}/></button>
            </form>
            <ul>
                {todos.map((todo,index)=> (
                <Todo 
                key={index} 
                todo={todo} 
                toggleComplete={toggleComplete} 
                deleteTodo ={deleteTodo}/>
                 ))}
                
            </ul>
            {todos.length < 1 ? null : <p className='text-center p-2'>{`You have ${todos.length} todos`}</p> }
            
        </div>
    </div>
  )
}

export default App