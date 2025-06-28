import React from "react";
import "./App.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Header = () => {
  return (
    <div className="header">
      <h1>Fast React Pizza Company</h1>
    </div>
  );
};
const Menu = () => {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6. creative dishes to choose from. All from
        out stone, all organic, all delicious
      </p>
      <ul className="pizzas">
        {numPizza > 0 ? (
          pizzas.map((pizza) => <Pizza pizzObjs={pizza} key={pizza.name} />)
        ) : (
          <p>We are still working.. please wait!</p>
        )}
      </ul>
    </div>
  );
};
function Pizza({ pizzObjs }) {
  console.log(pizzObjs.soldOut);
  return (
    <li className={`pizza ${pizzObjs.soldOut ? "sold-out" : ""}`}>
      <img src={pizzObjs.photoName} alt="Focaccia pizza" />
      <div>
        <h3>{pizzObjs.name}</h3>
        <p>{pizzObjs.ingredients}</p>
        <span>{pizzObjs.soldOut ? "sold-out" : pizzObjs.price}</span>
      </div>
    </li>
  );
}
const Footer = () => {
  const hours = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hours >= openHour && hours <= closeHour;
  //console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <Comeback openHour={openHour} closeHour={closeHour} />
      )}
    </footer>
  );
};
const Order = (props) => {
  return (
    <div className="order">
      <p>We're open till {props.closeHour}:00. Come visit us or order online</p>
      <button className="btn">order</button>
    </div>
  );
};
const Comeback = (props) => {
  return (
    <p>
      We're are happy to welcome you between {props.openHour}:00 and{" "}
      {props.closeHour}
      :00
    </p>
  );
};

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
export default App;
