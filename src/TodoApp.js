import React, { useReducer, useState } from 'react'

const types = {

    add: 'add',
    update: 'update',
    delete: 'delete'
}

const initialTodos = [

    { id: 1, title: "Todo #1"},
    { id: 2, title: "Todo #2"},
]

//función que recibe la acción y el estado inicial del hook
const todoReducer = (stateTodo, action) => {

    switch(action.type) {

        case types.delete:
            return stateTodo.filter( item => item.id !== action.payload)
        case types.add:
            return [...stateTodo, action.payload]
        case types.update: {
            const todoEdit = action.payload;
            return stateTodo.map( item => item.id === todoEdit.id ? todoEdit : item )
        }
        default: 
        return stateTodo;

    }

}

 const TodoApp = () => {

    const [stateTodo, stateDispatch] = useReducer(todoReducer, initialTodos)
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTarea =  {
            id: Date.now(), 
            title: text
        }

        stateDispatch({
            type: types.add,
            payload: newTarea
        })

        


    }

  return (

    <div>
        <h2>Título de TODO App</h2>
        <ul>
            {stateTodo.map( item =>  
               
               <li key={item.id}>
                      {item.title}
                <button onClick={() => stateDispatch({
                   type: types.delete,
                   payload: item.id 
                })}>
                    Delete
                </button>
                <button onClick={() => stateDispatch({
                   type: types.update,
                   payload: {...item, title: text}
                })}>
                    Update
                </button>
                 </li>
            )}
        </ul>
        <form onSubmit={handleSubmit}>
        <input 
         placeholder='Ingrese letras' 
         value={text}
         onChange={ e => setText(e.target.value)}/>
        </form>
        
    </div>

    
  )
}

export default TodoApp;



