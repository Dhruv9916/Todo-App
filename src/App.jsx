import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./Components/TodoItem";
import TodoItems from "./Components/TodoItems";

import "./App.css";
import { useState } from "react";
function App() {
  const initialTodoItems = [
    { name: "Buy Mik", date: "4/2/23" },
    { name: "Ghee", date: "04/2/23" },
    { name: "Curd", date: "04/2/23" },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [...todoItems, { name: itemName, date: itemDueDate }];
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
