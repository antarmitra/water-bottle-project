// import PropTypes from 'props-types'
import './Cart.css'
const Cart = ({cart, handleRemoveToBottle}) => {
    return (
        <div>
            <h3>Added Bottle: {cart.length}</h3>
            <div className="cart-container">
                {cart.map(bottle => <div key={bottle.id}>
                    <img src={bottle.img}></img>
                    <button onClick={() =>handleRemoveToBottle(bottle.id)}>Remove</button>
                </div>)}
            </div>
        </div>
    );
};

// Cart.propTypes = {
//     cart: PropTypes.Array.isrequired
// }

export default Cart;