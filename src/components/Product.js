import React from "react";
import { useStateValue } from "../context/StateProvider";
import "../cssFiles/product.css"


const Product = ({ id, title, price, rating, image }) => {
    const [{ cart }, dispatch] = useStateValue();
    console.log("Item in the cart: ", cart)
    const addToCart = () => {
        dispatch({
                type: "ADD_TO_CART",
                item: {
                    id,
                    title,
                    price,
                    rating,
                    image
                }
            })
    }
    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => {
                                return <p>⭐️</p> 
                            })
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToCart} >Add to Cart</button>
        </div>
    )
}

export default Product;