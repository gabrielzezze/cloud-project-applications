import Axios from 'axios';
import { stringify } from 'querystring';
import React, { useState } from 'react';
import Classes from './css/App.module.css'

const Api = Axios.create({
  baseURL: process.env.BACKEND_IP ? process.env.BACKEND_IP : 'localhost:5000',
  headers: {
    'Content-Type': 'application/json'
  }
})

function App() {

  const [name, setName] = useState<string>('')
  const [res, setRes] = useState<{ status: 'ok', message: string | null }>({ status: 'ok', message: null })
  const onClick = async () => {
    const response = await Api.post('/transaction', { name })
    setRes(response.data)
  }

  return (
    <div className={Classes.root}>
        { 
          res ? (<h1>{ res.message }</h1>) : null
        }
        <form style={{ width: '50%' }}>
          <h2>Seu Nome para receber uma mensagem inspiradora:</h2>
          <input placeholder={'Seu nome'} />
          <button className={Classes.button} onClick={onClick}>Receber inspiracao</button>
        </form>
    </div>
  );
}

export default App;
