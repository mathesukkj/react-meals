import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import AllMeals from "./components/Meals/AllMeals";
import Hero from "./components/Meals/Hero";
import { useState } from "react";
import { CartProvider } from "./context/cart-context";

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleShowCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <CartProvider>
            {isCartOpen && <Cart onShowCart={handleShowCart} />}
            <Header onShowCart={handleShowCart} />
            <Hero />
            <AllMeals />
        </CartProvider>
    );
}

export default App;
