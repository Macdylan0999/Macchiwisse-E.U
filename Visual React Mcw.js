import React from "react";

const ProductList = ({ products }) => (
  <div>
    <h2>Lista de Productos y Servicios</h2>
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default ProductList;
import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;


import React, { useState } from "react";

const AddProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct({ name, description, price });
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Producto o Servicio</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddProductForm;

import React from "react";

const Navbar = () => {
  return (
    <nav>
      <a href="/">Inicio</a>
      <a href="/products">Productos</a>
      <a href="/add-product">Agregar Producto</a>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar producto o servicio"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;

import React, { useState } from "react";

const CoachingSession = ({ onBook }) => {
  const [date, setDate] = useState("");

  const handleBooking = () => {
    onBook(date);
    setDate("");
  };

  return (
    <div>
      <h2>Reserva tu Sesión de Coaching</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleBooking}>Reservar</button>
    </div>
  );
};

export default CoachingSession;

