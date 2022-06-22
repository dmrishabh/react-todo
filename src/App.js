import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoForm from "./components/Todoform";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  //may be there is already some todo is stored in local so we have to grab them first
  // ! when ever we need to do something before any component is loded we have to use useEffect hook { first give a call back then list of dependency in form of array}
  // ! window.localStorage comes with 4 method getItem ,setItem ,removeItem , clear

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    console.log(localTodos);
    console.log({ localStorage });
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  // Defining the methods
  const addTodos = async (todo) => {
    setTodos([...todos, todo]);
  };

  // we loaded all and adding one item in array (state) bu now we have to push in our local storage here again we'll use effect
  // ! it means the moment you find any modification in *todos just run the call back you've
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const markComplete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <h1>Todo with LocalStorage</h1>
      <Todo todos={todos} markComplete={markComplete} />
      <TodoForm addTodos={addTodos} />
    </Container>
  );
}

export default App;
