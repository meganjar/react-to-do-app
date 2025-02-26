import React from 'react';
import { useState } from 'react';



export default function ListItem({name, id, dispatch}) {


    return (
        <li>
            <EditModule name={name} key={id}/>
            <input 
                type="checkbox" 
                onChange={() => dispatch({ 
                    type: 'delete',
                    id: id })}/>
            <p>{name}</p>
            <button onClick={dispatch(payload)}>Edit</button>
            <button>Delete</button><br></br>
        </li>

    )
}

export default EditModule({editItem}) {

    return (
        <div>
       {toDoList.find(todo => todo = todo.id = {})} <input type="text" value={name} />
        </div>
    )
}