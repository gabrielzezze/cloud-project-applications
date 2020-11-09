import Axios from 'axios';
import React, { useState } from 'react';
import Classes from './css/App.module.css'

const Api = Axios.create({
  baseURL: process.env.REACT_APP_BACKEND_IP ? process.env.REACT_APP_BACKEND_IP : 'localhost:5000',
  headers: {
    'Content-Type': 'application/json'
  }
})

function App() {

  const [name, setName] = useState<string>('')
  const [res, setRes] = useState<{ status: 'ok', message: string | null }>({ status: 'ok', message: null })
  const onClick = async () => {
    try {
      const response = await Api.post('/transaction', { name })
      setRes(response.data)
    }
    catch(e) {

    }
    
  }

  return (
    <div className={Classes.root}>
        { 
          res ? (<h1>{ res.message }</h1>) : null
        }
        <h2>Seu Nome para receber uma mensagem inspiradora:</h2>
        <input placeholder={'Seu nome'} onChange={(e) => setName(e.target.value)} />
        <button className={Classes.button} onClick={onClick}>Receber inspiracao</button>
    </div>
  );
}

export default App;
