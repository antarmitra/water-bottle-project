import PropTypes from 'prop-types'
import './Bottle.css'
export default function Bottle({bottle, handleAddToBottle}){

    const {name, img, price, seller, stock} = bottle;

    

    return(
        <div className="bottle">
            <h4>Bottle: {name}</h4>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <p>Seller: {seller}</p>
            <p>Stock: {stock}</p>
            <button onClick={() =>handleAddToBottle(bottle)}>Purchuse</button>
        </div>
    )
}

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToBottle: PropTypes.func.isRequired
}