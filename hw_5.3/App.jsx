import React from "react";
import { Input, Button, message } from "antd";
import ProductCard from "./companent/ProductCard";
import { useState } from "react";

const App = () => {
  const products = [
    { id: 1, name_product: "Iphone 15", price: 1200 },
    { id: 2, name_product: "MacBook Air", price: 1500 },
    { id: 3, name_product: "AirPods Pro", price: 250 },
  ];

  const [text, setText] = useState("");

  const handleClick = () => {
    if (text.length <= 10) {
      message.error("Текст должен быть больше 10 символов!");
    } else {
      message.success(text);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Products</h2>

      <div style={{ display: "flex", gap: 15 }}>
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      <h2 style={{ marginTop: 30 }}>Antd Input + Validation</h2>

      <Input
        placeholder="Введите текст..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button
        type="primary"
        style={{ marginTop: 10 }}
        onClick={handleClick}
      >
        Отправить
      </Button>
    </div>
  );
};

export default App;
