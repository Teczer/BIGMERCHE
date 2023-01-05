import { createContext, useReducer } from "react";

export const CartContext = createContext();

export const cartReducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "ADD_PRODUCT":
			return {
				products: [action.payload, ...state.products],
			};
		case "DELETE_PRODUCT":
			return {
				products: state.products.filter((t) => t.id !== action.payload.id),
			};
		default:
			return state;
	}
};

export const CartContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, {
		products: [],
	});

	console.log("AuthContext state:", state);

	return (
		<CartContext.Provider value={{ ...state, dispatch }}>
			{children}
		</CartContext.Provider>
	);
};
