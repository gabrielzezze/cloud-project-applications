import Axios from "axios";
import React, { useEffect, useState } from "react";
import TaskItem from "./components/task";
import Classes from "./css/App.module.css";
import Header from './components/Header'
import InputDropdown from './components/InputDropdown'

const Api = Axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? `/api`
    : "http://localhost:5001",
  headers: {
    "Content-Type": "application/json",
  },
});

export interface Task {
  title: string;
  status: string;
  id: number;
}

export interface User {
  username: string;
  id: number;
  token: string
}

function App() {
  const [title, setTitle] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [user, setUser] = useState<User | null>(null)
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [openInputDropDown, setInputDropDownVisibility] = useState<boolean>(false)

  const getTasks = async () => {
    try {
      const response = await Api.get("/task", {
        headers: {
          //@ts-ignore
          Authorization: user.token
        }
      });
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

  const register = async () => {
    try {
      const res = await Api.post('/user/register', { username, password })
      if (res.data) setUser(res.data)
    }
    catch (e) {
      console.log(e)
      alert(e)
    }
  }


  const login = async () => {
    try {
      const res = await Api.post(`/user`, { username, password })
      if (res.data) {
        setUser(res.data)
      }
    }
    catch (e) {
      console.log(e)
      alert('Erro ao Logar')
    }
  }

  const deleteTask = async (id: number) => {
    try {
      const response = await Api.delete(`/task?id=${id}`, {
        headers: {
          //@ts-ignore
          Authorization: user.token
        }
      });
      const newTasks = [...tasks].filter((t) => t.id !== id);
      setTasks(newTasks);
    } catch (e) {
      console.log(e);
    }
  };

  const postTask = async () => {
    try {
      const response = await Api.post("/task", { title, status }, {
        headers: {
          //@ts-ignore
          Authorization: user.token
        }
      });
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
      <Header onAddClick={() => user ? setInputDropDownVisibility(!openInputDropDown) : null} />
      {!user ? 
      (
        <div style={{ position: 'fixed', top: '25%', height:'25vh', left: '30%', width: '15%', padding: '2% 10%', backgroundColor: 'white', borderRadius: '10px', boxShadow: '2px 2px #c9c9c9'  }}>
          <div style={{ width: '100%', color: 'coral', padding: '0.5rem 0'}}>
            <h2>Username</h2>
            <input style={{ borderRadius: '17px', borderStyle: 'none', border: '1px solid coral' }} type="text" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div style={{ width: '100%', padding: '0.5rem 0', color: 'coral' }}>
            <h2>Password</h2>
            <input style={{ borderRadius: '17px', borderStyle: 'none', border: '1px solid coral' }} type="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button style={{ borderRadius: '5px', borderStyle: 'none', border: '1px solid coral', backgroundColor: 'white' }} onClick={login}>Login</button>
          <button style={{ borderRadius: '5px', borderStyle: 'none', border: '1px solid coral', marginLeft: '5%', backgroundColor: 'white' }} onClick={register}>Register</button>
        </div>
      ) :
      (
        <>
          <InputDropdown onSubmit={postTask} visible={openInputDropDown} setTitle={setTitle} setStatus={setStatus} />
          <div style={{marginTop: '20%', padding: '0 5%'}}>
              {tasks.map((t) => (
                <TaskItem key={`task-${t.id}`} task={t} deleteTask={deleteTask} />
              ))}
          </div>
        </>
      )
    } 
    </div>
  );
}

export default App;
