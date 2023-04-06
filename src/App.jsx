import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import AllMeals from "./components/Meals/AllMeals";
import Hero from "./components/Meals/Hero";
import { useState } from "react";

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleShowCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <>
            {isCartOpen && <Cart onShowCart={handleShowCart} />}
            <Header onShowCart={handleShowCart} />
            <Hero />
            <AllMeals />
        </>
    );
}

export default App;
