interface Props {
  cartItems: string[];
}

const ShoppingCart = ({ cartItems }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((items) => (
          <li>{items}</li>
        ))}
      </ul>
    </>
  );
};

export default ShoppingCart;
