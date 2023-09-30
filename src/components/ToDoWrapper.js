import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'
import { v4 as uuidv4 } from 'uuid';
import EditToDoForm from './EditToDoForm';
uuidv4();
function ToDoWrapper() {

    const [todos , setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos , {id: uuidv4() , task: todo, completed : false , isEditing :false}])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo , completed : !todo.completed} : todo))
    }

    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo , isEditing : !todo.isEditing} : todo))
    }
    
    const editTask = (task , id) => {
        setTodos(todos.map(todo => todo.id ===id ? {...todo , task , isEditing : !todo.isEditing} : todo))

    }
  return (
    <div className='container'>
        <ToDoForm addTodo={addTodo}/>
        <h1>Yapılacaklar Listesi</h1>
        {todos.map((todo , index) => (
            todo.isEditing ? (
                <EditToDoForm editTodo={editTask} task={todo} key={index}/>
            ) : (
                <ToDo task={todo} key={index} deleteTodo={deleteTodo} toggleComplete={toggleComplete} editTodo={editTodo}/>
            )
       
        ))}
    </div>
  )
}

export default ToDoWrapper