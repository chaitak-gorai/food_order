import CartContext from "./cart-context";
const CartProvider = (props) => {
  return <CartContext>{props.children}</CartContext>;
};
export default CartProvider;
