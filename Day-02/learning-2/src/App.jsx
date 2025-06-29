import { useState } from "react";
import "./App.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

const Logo = () => {
  return <h1>Far Away 👜</h1>;
};

const Form = () => {
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
    </div>
  );
};

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <button>❌</button>
    </li>
  );
};

const Status = () => {
  return (
    <footer className="stats">
      You have X items on your list, and you already packed x (x%)
    </footer>
  );
};

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Status />
    </div>
  );
}

export default App;
