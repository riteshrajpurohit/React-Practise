import { useState } from 'react'
import './App.css'
import React from "react";
import Cards from "./Components/Cards";
import Form from "./Components/Form";

function App() {

  const [users, setUsers] = useState([])
  return (
    <div className="w-full min-h-screen bg-zinc-200 flex flex-col justify-center items-center gap-14">

      <Cards />

      <Form addUser={addUser} />

    </div>
  );
}

export default App;