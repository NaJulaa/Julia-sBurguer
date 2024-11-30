import React from "react";
import './App.css'; // Arquivo de estilos
import { useState } from "react";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">Julia's Burgguer</div>
      <ul className="navbar-links" style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
          <li><a href="#burguers" >Burguers</a></li>
          <li><a href="#batatas" >Batatas</a></li>
          <li><a href="#refris" >Refris</a></li>
      </ul>
      </div>
  );
};

const BurgerCard = ({ name, description, image }) => {
  if (!name || !description || !image) return null;
  return (
    <div className="burger-card">
      <img src={image} alt={name} className="burger-image" />
      <h3 className="burger-name">{name}</h3>
      <p className="burger-description">{description}</p>
    </div>
  );
};

const BatatasCard = ({ name, description, image }) => {
  if (!name || !description || !image) return null;
  return (
    <div className="batatas-card">
      <img src={image} alt={name} className="batatas-image" />
      <h3 className="batatas-name">{name}</h3>
      <p className="batatas-description">{description}</p>
    </div>
  );
};

const RefrisCard = ({ name, description, image }) => {
  if (!name || !description || !image) return null;
  return (
    <div className="refris-card">
      <img src={image} alt={name} className="refris-image" />
      <h3 className="refris-name">{name}</h3>
      <p className="refris-description">{description}</p>
    </div>
  );
};

//Fiz 3 listas sendo que eu só precisava de uma
const burgers = [
  {
    name: "Classic Burger",
    description: "Pão macio, carne suculenta, alface, tomate e queijo cheddar.",
    image: "./Burguer.jpg", 
  },
  {
    name: "BBQ Burger",
    description: "Hambúrguer com molho barbecue, bacon e cebola caramelizada.",
    image: "./Burguer.jpg", 
  },
  {
    name: "Veggie Burger",
    description: "Hambúrguer vegetariano com cogumelos, queijo e molho especial.",
    image: "./Burguer.jpg", 
  },
  {
    name: "X-Rodeio",
    description: "Pão macio, carne suculenta, alface, tomate e queijo cheddar.",
    image: "./Burguer.jpg", 
  },
  {
    name: "BBQ Burger",
    description: "Hambúrguer com molho barbecue, bacon e cebola caramelizada.",
    image: "./Burguer.jpg", 
  },
];

const batatas = [
  {
    name: "Batata Rústica pequena",
    description: "90g, batata, tomate e queijo cheddar.",
    image: "./batata.jpg",
  },
  {
    name: "Batata Rústica Grande",
    description: "180g, batata e queijo cheddar.",
    image: "./batata.jpg",
  },
  {
    name: "Batata Rústica pequena",
    description: "90g, carne suculenta, alface, tomate e queijo cheddar.",
    image: "./batata.jpg",
  },
  {
    name: "Batata Rústica pequena",
    description: "90g, carne suculenta, alface, tomate e queijo cheddar.",
    image: "./batata.jpg",
  },
]

const refris = [
  {
    name: "Coca-cola",
    description: "1L, vidraça",
    image: "./Cocacola.jpg",
  },
  {
    name: "Guaraná",
    description: "1L, vidraça",
    image: "./Cocacola.jpg",
  },
  {
    name: "Batata Rústica pequena",
    description: "90g, carne suculenta, alface, tomate e queijo cheddar.",
    image: "./Cocacola.jpg",
  },
  {
    name: "Batata Rústica pequena",
    description: "90g, carne suculenta, alface, tomate e queijo cheddar.",
    image: "./Cocacola.jpg",
  },
]

const Menu = () => {
  return (
      <div className="menu-container">
        <section id="burguers">
          <h2>Burgers</h2>
          <div className="burger-grid">
            {burgers.map((burger, index) => (
              <BurgerCard
                key={index}
                name={burger.name}
                description={burger.description}
                image={burger.image}
              />
            ))}
          </div>
        </section>
  

        <section id="batatas">
          <h2>Batatas</h2>
          <div className="batatas-grid">
            {batatas.map((batatas, index) => (
              <BatatasCard
                key={index}
                name={batatas.name}
                description={batatas.description}
                image={batatas.image}
              />
            ))}
          </div>
        </section>


      <section id="refris">
          <h2>Burgers</h2>
          <div className="refris-grid">
            {refris.map((refris, index) => (
              <BurgerCard
                key={index}
                name={refris.name}
                description={refris.description}
                image={refris.image}
              />
            ))}
          </div>
        </section>
   </div>
    );
};
function Compras(){
  const [cart, setCart] = useState([]); // Estado para armazenar os itens do carrinho

  const products = [
    { id: 1, name: "Burger Cheese", price: 15.0, image: "burger.jpg" },
    { id: 2, name: "Batatas Fritas", price: 10.0, image: "fries.jpg" },
    { id: 3, name: "Refrigerante", price: 5.0, image: "soda.jpg" },
  ];

    const addToCart = (product) => {
    setCart((prevCart) => {
    // Verifica se o item já existe no carrinho
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
      // Adiciona um novo produto ao carrinho
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="app">
      <h1>Julia's Burguer</h1>
      <div className="card-container">
        {products.map((product) => (
          <Card key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {/* Exibição do carrinho */}
      <Cart cart={cart} />
    </div>
  );

}
function Cart({ cartItems }) {
  const total = (cartItems && Array.isArray(cartItems))
    ? cartItems.reduce((acc, item) => acc + item.price, 0)
    : 0;

  return (
    <div>
      <h1>Cart</h1>
      <p>Total: ${total}</p>
    </div>
  );
}

function Card({ product, addToCart }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-image" />
      <h3 className="card-title">{product.name}</h3>
      <p className="card-price">R$ {product.price.toFixed(2)}</p>
      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
        Adicionar
      </button>
    </div>
  );
}


function App() {
  return (
    <div>
    </div>
  );
}



export{ Navbar, Menu, App, BurgerCard, BatatasCard, RefrisCard, Card, Compras, Cart};