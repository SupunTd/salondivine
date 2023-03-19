import React, {useState} from 'react';
import './Cart.css';
import Logbar from "../../Components/Header/Logbar/Logbar";
import Navbar from "../../Components/Header/Navbar/Navbar";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = () => {
        const newItem = {
            id: cartItems.length + 1,
            name: `Item ${cartItems.length + 1}`,
            price: Math.floor(Math.random() * 100) + 1
        };
        setCartItems([...cartItems, newItem]);
    };

    const removeItem = (id) => {
        const filteredItems = cartItems.filter(item => item.id !== id);
        setCartItems(filteredItems);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <>
            <Logbar/>
            <Navbar/>
            <div className="cart-container">
                <h2 className="cart-heading">Cart</h2>
                <table className="cart-table">
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <tr >
                                <td>Image</td>
                                <td>name</td>
                                <td>Quantity</td>
                                <td><button onClick={() => removeItem(item.id)}>edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                        </div>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Cart;
