import Axios from "axios";
import React, { useEffect, useState } from "react";
import TaskItem from "./components/task";
import Classes from "./css/App.module.css";

const Api = Axios.create({
  baseURL: process.env.REACT_APP_BACKEND_IP
    ? `http://${process.env.REACT_APP_BACKEND_IP}`
    : "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

interface Task {
  title: string;
  status: string;
  id: number;
}

function App() {
  const [title, setTitle] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = async () => {
    try {
      const response = await Api.get("/task");
      setTasks(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  // const patchTask = async (task: Partial<Task>, id: number) => {
  //   try {
  //     const response = await Api.patch(`/task?id=${id}`, task);
  //     const newTasks = [...tasks]
  //     setTasks(newTasks);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const deleteTask = async (id: number) => {
    try {
      const response = await Api.delete(`/task?id=${id}`);
      const newTasks = [...tasks].filter((t) => t.id !== id);
      setTasks(newTasks);
    } catch (e) {
      console.log(e);
    }
  };

  const postTask = async () => {
    try {
      const response = await Api.post("/task", { title, status });
      const newTasks = [...tasks, response.data];
      setTasks(newTasks);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className={Classes.root}>
      <div>
        <h2>Adicione uma tarefa:</h2>
        <div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
          <input
            placeholder={"Título"}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            placeholder={"Status"}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <button className={Classes.button} onClick={postTask}>
          Adicionar
        </button>
      </div>
      <div>
        <h2>Tarefas:</h2>
        {tasks.map((t) => (
          <TaskItem key={`task-${t.id}`} task={t} deleteTask={deleteTask} />
        ))}
      </div>
    </div>
  );
}

export default App;
