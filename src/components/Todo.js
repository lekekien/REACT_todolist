import Button from '@atlaskit/button'
import React from 'react'


export default function Todo({todo}){
    return(
       <>
            <Button className="todo-item" shouldFitContainer>{todo.name}</Button>
       </>
    )
}