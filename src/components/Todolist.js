import Button from '@atlaskit/button';
import React from 'react';
import Todo  from './Todo';
export default function Todolist({todoList}){
    return (
        <div className="todo-list">
            {
                todoList.map((todo) => (
                    <Todo key={todo.id} todo = {todo} />
                ))
            }
        </div>
    )
}