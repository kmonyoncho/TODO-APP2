import React, {useEffect, useState} from 'react';
import './App.css';
import TodoC from './TodoC';
import { Button,FormControl, InputLabel,Input } from '@material-ui/core';
import db from './firebase';
import firebase from "firebase";
function App() {
  const [todos,setTodos]=useState([]);
  const[input,setInput]=useState('');
 //when app loads listen to the database and
 // fetch new todos as they get added/removed
useEffect(() => {
//this code here fires when the app.js loads
db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
  setTodos(snapshot.docs.map(doc=>doc.data().todo))
})
}, []);

//CREATE NEW TODO
  const addTodo = (event) =>{
    //this will fire when the button is clicked
   event.preventDefault();//stop refresh
  db.collection('todos').add({
    todo:input,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
  })
    setTodos([...todos,input]);
    setInput(''); //clear up the input
  }
  return (
    <div className="App">
      <h1>Hello Funsoft Programmers</h1>
    
      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input value={input} onChange={event=> setInput(event.target.value)}/>
      </FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
      Add Todo
</Button>
      {/* <Button onClick={addTodo}>Add Todo</Button> */}
      
      <ul>
        {todos.map(todo =>(
          <TodoC text={todo}/>
        // <li>{todo}</li>
        ))}
        
      </ul>

    </div>
  );
}

export default App;
