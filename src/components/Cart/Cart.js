import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const cartItem = (
    <ul className={classes['cart-items']}>
      {[{ id: "c1", name: "Sushi", amount: "2", price: "12.99" }].map(
        (item) => {
          return <li>{item.name}</li>
        }
      )}
    </ul>
  );
const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={classes.total}>
          <span>Total Amount</span>
          <span>35.99</span>
      </div>
      <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
          <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
