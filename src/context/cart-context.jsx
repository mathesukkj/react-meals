import { createContext } from "react";

const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
});

export function CartProvider(props) {
    const addItem = (item) => {};
    const removeItem = (id) => {};

    const context = {
        items: [
            {
                name: "Sushi",
                description: "Finest fish and veggies",
                price: 22.99,
            },
            {
                name: "Schnitzel",
                description: "A german specialty!",
                price: 16.5,
            },
            {
                name: "Barbecue Burger",
                description: "American, raw, meaty",
                price: 12.99,
            },
            {
                name: "Green Bowl",
                description: "Healthy...and green...",
                price: 18.99,
            },
        ],
        totalAmount: 0,
        addItem,
        removeItem,
    };

    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContext;
