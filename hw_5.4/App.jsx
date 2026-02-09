import React from "react";
import { Input, Button, message } from "antd";
import ProductCard from "./companent/ProductCard";
import { useState } from "react";


import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const Plus = () => {
    if(count < 15) {
      setCount(count + 5)
    }
    else{setCount(15)}
  }

  const Minus = () => {
    if(count > 0) {
      setCount(count - 5)
    }
    else{setCount(0)}
  }

  const Reset = () => {
    setCount(0)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={Plus}>plus</button>
      <button onClick={Minus}>minus</button>
      <button onClick={Reset}>reset</button>
    </>
  )
}

export default App;
