import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomCard from './components/CustomCard';
import 'antd/dist/reset.css'; 

function App() {
  const items = [
    { id: 1, name: "Товар 1", text: "Описание первого товара", cost: 100 },
    { id: 2, name: "Товар 2", text: "Описание второго товара", cost: 200 },
    { id: 3, name: "Товар 3", text: "Описание третьего товара", cost: 300 },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Мой магазин</h1>
      
      {items.map(item => (
        <CustomCard 
          key={item.id} 
          title={item.name} 
          description={item.text} 
          price={item.cost} 
        />
      ))}
    </div>
  );
}

export default App;
