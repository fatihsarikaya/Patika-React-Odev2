import React, { useState } from 'react'

function ToDoForm({addTodo}) {

    const [value , setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (value ===  "") {
            return false
        }
        addTodo(value)
        setValue("")
    }

  return (
    <form onSubmit={handleSubmit} className='todoForm'>
        <input type="text"  placeholder='Neler Yapacaksın ?' value={value} className='todo-input'
        onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-button'>Ekle</button>
    </form>
  )
}

export default ToDoForm