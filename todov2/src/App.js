import './App.css';
import React from "react";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormTodo from './FormTodo';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sampe todo 1",
      isDone: false
    },
    {
      text: "This is a sampe todo 2",
      isDone: false
    }
  ]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  // console.log(todos);
  // console.log([...todos]);
  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        {/* Calling the form component || Start */}
          <FormTodo addTodo={addTodo} />
        {/* Calling the form component || End */}
        <div>
          {/*           
             Function Calling & Populating All Todo's || Start
          */}
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
          {/*           
             Function Calling & Populating All Todo's || End
          */}
        </div>
      </div>
    </div>
  );
}

export default App;
