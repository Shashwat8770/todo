import React from "react";
import ListItem from "./ListItem";

const ListGroup = ({todos , deleteTodo}) => {
  return <ul className="list-group mt-2">
    {
      todos.map(todo => <ListItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>)
    }
  </ul>;
};

export default ListGroup;
