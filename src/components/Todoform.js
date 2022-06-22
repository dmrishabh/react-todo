import React, { useState } from "react";
import { Container, Input, Button, Form, InputGroup } from "reactstrap";

import { v4 } from "uuid";

const Todoform = ({ addTodos }) => {
  const [todoString, setTodoString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please put some value");
    }

    const todo = {
      todoString,
      id: v4(),
    };

    // ! - this below is a method which somebody is passing as a property addTodos()

    addTodos(todo);
    setTodoString("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* <FormGroup> */}
      <InputGroup>
        <Input
          type="text"
          name="todo"
          id="todo"
          placeholder="Your next todo"
          value={todoString}
          onChange={(e) => setTodoString(e.target.value)}
        />
        <Button color="success">Add Todo</Button>
      </InputGroup>
      {/* </FormGroup> */}
    </Form>
  );
};
export default Todoform;
