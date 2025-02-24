import React from 'react';
import { useState } from 'react';



export default function ListItem({name, id, dispatch}) {


    return (
        <li>
            <input 
                type="checkbox" 
                onChange={() => dispatch({ 
                    type: 'delete',
                    id: todo.id })}/>
            <p>{name}</p>
            <button onClick={dispatch}>Edit</button>
            <button>Delete</button><br></br>
        </li>

    )
}