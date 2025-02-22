import { useState, useReducer } from 'react'
import './App.css'


function App() {

  return (
<div>
  <Form />
</div>
  )
}

export default App

function reducer(state, action) {

  let toDos = []
  switch(action.type) {
    case "add":
      return {}
    case "edit":
        return {}
    default:
        return {}
  }
}
function Form() {
  const [state, dispatch] = useReducer(reducer, { someValue: 42 })

  return (
    <div>
      <h1>Your to do list</h1> <br></br>
      <input placeholder="add task"></input>
      <button onClick={() => dispatch({ type: "add" })}>Add</button> <br></br><br></br>
      <input type="checkbox"></input>
       <label >Create Mockup </label>
      <button onClick={() => dispatch({ type: "edit" })}>Edit</button>
      <button onClick={() => dispatch({ type: "delete" })}>Delete</button> <br></br><br></br>
      <input type="checkbox"></input>
      <label >Create Static Layout </label>
      <button onClick={() => dispatch({ type: "edit" })}>Edit</button>
      <button onClick={() => dispatch({ type: "delete" })}>Delete</button> <br></br><br></br>
      <input type="checkbox"></input>
      <input placeholder="Add Interactivity"></input>
      <button onClick={() => dispatch({ type: "save" })}>Save</button> <br></br><br></br>

    </div>
  )
}