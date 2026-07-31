"use client";

import { createContext, useState } from "react";

export const CartContext = createContext<any>(null);

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const changeQuantity = (id: number, amount: number) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + amount),
            }
          : item
      )
    );
  };

  const clearCart = () => {
  setCart([]);
};

return (
  <CartContext.Provider
    value={{
      cart,
      addToCart,
      removeFromCart,
      changeQuantity,
      clearCart,
    }}
  >
    {children}
  </CartContext.Provider>
);
}