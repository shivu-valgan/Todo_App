import React, { useState } from 'react'
import Header from './Header'

export default function Addtodo({addTodo}) {

    const [form,setform]=useState({todotitle:"",tododesc:""})
    const handleChange=(e)=>{
        setform({...form, [e.target.name]: e.target.value});
    }

    let handleSubmit=(e)=>{
        e.preventDefault();
        if(form.todotitle === '' || form.tododesc === ''){ 
            alert('Title or Description cannot be blank...')
            return;
        } 
        addTodo(form);
        setform({todotitle:"", tododesc:""});
    }
  

    return (
        <>
        <Header/>
        
        <div className='bg-info bg-opacity-100 d-flex justify-content-center align-items-top vh-100'>
            
            <form className='w-100  p-4' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="todotitle" className="form-label fs-2 fw-semibold">ToDo Title</label>
                    <input value={form.todotitle} onChange={handleChange} type="text" className="form-control fs-4" name='todotitle' id="todotitle" />
                        
                </div>
                <div className="mb-3">
                    <label htmlFor="tododesc" className="form-label fs-2 fw-semibold">ToDo Description</label>
                    <input value={form.tododesc} onChange={handleChange} className='form-control form-control-lg ' name="tododesc" id="tododesc"/>
                </div>
                <div className=' text-center'>
                <button type="submit" className=" fs-6 btn btn-primary">Save ToDo</button>
                </div>
            </form>
        </div>
        </>
    )
}
