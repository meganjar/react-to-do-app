import { useState, useReducer } from 'react'
import './App.css'
import ListItem from './ListItem.jsx'

const [editItem, setItem] = useState(false)

function reducer(state, action, editItem) {
  switch(action.type) {
    case "add":
      return [...state, {
        item: state.payload.name,
        id: state.length + 1
      }]
    case "edit":
        return payload setItem(prevState => !prevState)
    case "delete":
        return (
          state.filter((item) => (item.id !== payload.id))
        )
    default:
        return state
  }
}

export default function App() {
  const [toDoList, dispatch] = useReducer(reducer, [{name: "beans", id:0}, {name: "pork'n'beans", id:1}]);
  return (
    <div>
      <h1> To-Do List</h1>
    <input/>
    <button onClick={ () => dispatch({
      type: 'add',
    })}>Add</button>
      <ul>
        {toDoList.map((todo) => (
          <ListItem key={todo.id} name={todo.name} id={todo.id} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
}







  // add eact list item, and its checkmark and its buttons to a div. The div will share an id of
  // component for list item divs
  // let id = 1
 //  let id = +=
// On checkbox: delete the list item for the id that it is 
// on edit click: add new element to the dom (input field and it should be a child of list item)
// move cursor to the input field
// on delete: match the li id that was clicked and delete from array
 // on add click 1. let id==+1 {... array, { 
 // name:(name of input)
 // id: {id})






