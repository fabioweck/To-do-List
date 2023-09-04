import SubmitBtn from "./components/Button";
import InputTodo from "./components/Input";
import SelectPriority from "./components/Select";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("low");

  const [items, setNewItem] = useState<{ [key: string]: string }>(() => {
    const localValue = localStorage.getItem("Task");
    if (localValue == null) return {};
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("Task", JSON.stringify(items));
  }, [{ items }]);

  const handleInputChange = (task: string) => {
    setNewTask(task);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value);
  };

  const addNewTask = () => {
    setNewItem((items) => ({ ...items, [newTask]: priority }));
  };

  const removeTask = (key: string) => {
    const newDictionary = { ...items };
    delete newDictionary[key];
    localStorage.removeItem(key);
    setNewItem(newDictionary);
  };

  const clearAll = () => {
    const newDictionary = {};
    setNewItem(newDictionary);
    localStorage.clear();
  };

  return (
    <div className="main-div">
      <div className="intro-div">
        <h1 className="intro">To-do list</h1>
        <p className="description">With React + Typescript</p>
      </div>
      <InputTodo handleInput={handleInputChange} />
      <SelectPriority handleSelect={handleSelectChange} />
      <SubmitBtn
        handleClickBtn={addNewTask}
        btnColor="primary"
        btnDescription="Add task"
      />
      <SubmitBtn
        handleClickBtn={clearAll}
        btnColor="secondary"
        btnDescription="Clear all"
      />
      <TodoList items={items} deleteTask={removeTask} />
    </div>
  );
}

export default App;
