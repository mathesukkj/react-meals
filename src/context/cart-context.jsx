import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
});

const defaultState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, { type, item }) => {
    switch (type) {
        case "ADD":
            const itemIndex = state.items.findIndex(
                (cartItem) => cartItem.key === item.key
            );

            if (itemIndex !== -1) {
                const existingItem = state.items[itemIndex];
                const updatedItem = {
                    ...existingItem,
                    amount: item.amount,
                };
                const updatedItems = [...state.items];
                updatedItems[itemIndex] = updatedItem;

                return {
                    items: updatedItems,
                    totalAmount: state.totalAmount + item.price * item.amount,
                };
            }
            return {
                items: state.items.concat(item),
                totalAmount: state.totalAmount + item.price * item.amount,
            };
        case "REMOVE":
    }

    return defaultState;
};

export function CartProvider(props) {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultState);

    const addItem = (item) => {
        dispatchCart({ type: "ADD", item });
    };

    const removeItem = (id) => {
        dispatchCart({ type: "REMOVE" });
    };

    const context = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
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
