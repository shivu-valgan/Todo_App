import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Addtodo from './Mypages/Addtodo';
import Home from './Mypages/Home';
import { useEffect, useState } from 'react';

function App() {

  const [todos,setTodos]=useState(()=>{
    const savedtodos=localStorage.getItem('todos');
    return savedtodos ? JSON.parse(savedtodos) : []; 
  });

  const addTodo=(todo)=>{
    setTodos([...todos,todo])
  }

  const deletetodo=(index)=>{
    const updateTodos=todos.filter((_,i)=>i!==index)
    setTodos(updateTodos);
  }
 

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
  <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home todos={todos} deletetodo={deletetodo} />}  />
      <Route path='/addtodo' element={<Addtodo addTodo={addTodo}/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
