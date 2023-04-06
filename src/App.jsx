import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import AllMeals from "./components/Meals/AllMeals";
import Hero from "./components/Meals/Hero";

function App() {
    return (
        <>
            <Cart />
            <Header />
            <Hero />
            <AllMeals />
        </>
    );
}

export default App;
