import React from 'react'
import Header from './Header'

export default function Home({ todos , deletetodo  }) {

    const todoItems = todos.map((todo, index) => {
        return (
            
           <div key={index} className='todo bg-warning border border-light border-4 rounded-4 shadow-lg p-3 container mt-4'>
                    <h2>{todo.todotitle}</h2>
                    <p>{todo.tododesc}</p>
                    <button onClick={()=>deletetodo(index)} className='btn btn-danger'>Delete</button>
                    
                </div>
        )
    })

    return (
        <>
            <Header />
            <div className='mytodos bg-info'>
                <h1 className='text-center'>My Todos</h1>
                { todos.length === 0 ?
                  <h2 className='text-center bg-warning mx-4 rounded-2'>No Todos Yet!!!</h2> :
                  todoItems }
            </div>
        </>
    )
}
