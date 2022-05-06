import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { removeCart } from "../Redux/action";
import { Home } from "./Home";
export const CartPage = () => {
  const [price, setPrice] = useState();

  console.log(price);

  const dispatch = useDispatch();
  const cartt = useSelector((store) => store.cart);
  console.log(cartt, "oncartpage");



  const del = (id) => {
    dispatch(removeCart(id));
  };

  const total = () => {
    let price = 0;
    cartt.map((ele) => {
      price = price + ele.price*ele.qty;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <div>
      {cartt.map((ele) => (
        <div className="cartpage">
          <div className="cartcards">
          <div className="cartleftchild">
            <img className="carpageimage" src={ele.img} />
          
          </div>
          <div className="cartrightchild">
            <h5>{ele.title}</h5>
            <p>{ele.category}</p>
            <h6>Price:{ele.price}</h6>
            <h6>Quantity:{ele.qty}</h6>
            <button
              onClick={() => {
                del(ele.id);
              }}
            >
              Remove From the cart
            </button>
          
            
          </div>
          </div>
        </div>
      ))}

<div> Total:{price}</div>

<button>Checkout</button>
    </div>
     
  );
};
