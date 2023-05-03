import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";

const App = () => {
  
  const [name , setName] = useState(" Todo App")

  const [todos , setTodos] = useState([])


  const deleteTodo = (id) => {
    
    // setTodos(todos.filter((todo)=>{
    //   if(todo.id !== id){
    //     return true
    //   }
    // }))

    setTodos(todos.filter(todo => todo.id !== id))

  }


  const saveTodo = (text) => {
    
    const newTodo = {
      id : crypto.randomUUID(),
      text : text
    }

    setTodos([...todos , newTodo])

  }




  return (
    <>
      <Navbar name={name} />
     <div className="container p-5">
        <Form saveTodo={saveTodo} />
        <ListGroup todos={todos} deleteTodo={deleteTodo}/>
      </div>
    </>
  );
};

export default App;
