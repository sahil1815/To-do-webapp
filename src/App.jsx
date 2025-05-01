import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import FirstHeader from "./components/FirstHeader";
import Main from "./components/Main";

const App = () => {
  const [todos, settodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addtodos = (text) => {
    const updated = [...todos, { text, checked: false }];
    settodos(updated);
    saveToLS(updated);
  };

  const toggleChecked = (index) => {
    const updated = todos.map((todo, i) =>
      i === index ? { ...todo, checked: !todo.checked } : todo
    );
    settodos(updated);
    saveToLS(updated);
  };

  const deletetodo = (indexToDelete) => {
    const updated = todos.filter((_, index) => index !== indexToDelete);
    settodos(updated);
    saveToLS(updated);
  };

  const deleteAll = () => {
    settodos([]);
    saveToLS([]);
  };

  const editHandle = (index) => {
    const updatedText = prompt("Edit your task:", todos[index].text);
    if (updatedText !== null) {
      const updatedtodo = [...todos];
      updatedtodo[index].text = updatedText;
      settodos(updatedtodo);
      saveToLS(updatedtodo);
    }
  };

  const saveToLS = (data) => {
    localStorage.setItem("todos", JSON.stringify(data));
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const normalizedTodos = storedTodos.map((todo) =>
      typeof todo === "string" ? { text: todo, checked: false } : todo
    );
    settodos(normalizedTodos);
  }, []);

  // 🔍 Filtering
  const filteredTodos = todos.filter((todo) => {
    if (filter === "finished") return todo.checked;
    if (filter === "unfinished") return !todo.checked;
    return true;
  });

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Navbar deleteAll={deleteAll} saveToLS={saveToLS} setFilter={setFilter} />
      <FirstHeader onAdd={addtodos} saveToLS={saveToLS} />
      <Main todos={filteredTodos} onDelete={deletetodo} editHandle={editHandle} toggleChecked={toggleChecked} />
    </div>
  );
};

export default App;
