import { useState, useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLocalStorage, getStoredCart } from "../Utillites/localStorage";
import Cart from "../Cart/Cart";


export default function Bottles() {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    useEffect(() => {
        console.log('called the useEffect', bottles.length)
        if (bottles.length) {
            const storedCart = getStoredCart();
            console.log(storedCart, bottles);
            const savedCart = [];
            for (const id of storedCart) {
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    savedCart.push(bottle)
                }
            }
            console.log('save cart', savedCart);
            setCart(savedCart)
        }
    }, [bottles])


    const handleAddToBottle = (bottle) => {
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLocalStorage(bottle.id)
    }


    const handleRemoveToBottle = (id) => {
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart)
        removeToLocalStorage(id);
    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <Cart cart={cart} handleRemoveToBottle={handleRemoveToBottle}></Cart>

            <div className="bottles-container">
                {
                    bottles.map(bottle =>
                        <Bottle
                            key={bottle}
                            bottle={bottle}
                            handleAddToBottle={handleAddToBottle}>
                        </Bottle>)
                }
            </div>
        </div>
    )
}