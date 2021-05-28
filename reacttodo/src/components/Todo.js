import React from 'react';

const Todo = ({text,todos,setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el)=> el.id !== todo.id))
    }
    
    return(
        <div className="todo">
            <li className="todo-item">
                {text}
                <button className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={deleteHandler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        </div>
    )
}

export default Todo;