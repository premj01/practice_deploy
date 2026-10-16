import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [msg, setmsg] = useState("Hi this is Prem")

  async function handleSubmit(){
     
      axios.get("http://localhost:3000/api")
        .then((res)=>{
          const data = res.data;
          const message = data.message;
          
          setmsg(message)
        }).catch((err)=>{
        console.log(err);
      })
      
    
  }

  return (
    <div>
      <h1>{msg}</h1>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App
