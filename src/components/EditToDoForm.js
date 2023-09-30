import React, { useState } from 'react'

function EditToDoForm({editTodo , task}) {

    const [value , setValue] = useState(task.task)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (value ===  "") {
            return false
        }
        editTodo(value , task.id)

        setValue("")
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text"  placeholder='düzenle' value={value} className='todo-input-edit'
        onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-button'>Ekle</button>
    </form>
  )
}

export default EditToDoForm