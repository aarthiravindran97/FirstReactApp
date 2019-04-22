import React from "react";
import ReactDOM from "react-dom";

import Product from "../components/Product";
import "./styles.css";

const products = [
  {
    id: 201,
    name: "Cat",
    descripton: "wee",
    img: "http://tachyons.io/img/avatar_1.jpg",
    price: 200
  },
  {
    id: 202,
    name: "CatCat",
    descripton: "weeweeeeee",
    img: "http://tachyons.io/img/avatar_1.jpg",
    price: 200
  },
  {
    id: 203,
    name: "CatCatCat",
    descripton: "weeweewee",
    img: "http://tachyons.io/img/avatar_1.jpg",
    price: 200
  },
  {
    id: 204,
    name: "CatCatCat Cat",
    descripton: "weeweeweewewe",
    price: 200
  },
  {
    id: 205,
    name: "CatCatCatCatCat",
    descripton: "weeweeweeweewee",
    img: "http://tachyons.io/img/avatar_1.jpg",
    price: 200
  }
];
function App() {
  return (
    <main className="App">
      {products.map(p => (
        <Product key={p.id} {...p} />
      ))}
    </main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
