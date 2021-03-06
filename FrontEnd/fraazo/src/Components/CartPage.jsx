import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { removeCart } from "../Redux/action";

// import { Home } from "./Home";

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
  <div className="whole">

    <div className="cartContainer">
      {cartt.map((ele) => (
        <div className="cartpage">
          <div className="cartcards">
          <div className="cartleftchild">
            <img className="carpageimage" src={ele.img} />
          
          </div>
          <div className="cartrightchild">
            <h5>{ele.title}</h5>
            <p>{ele.category}</p>
            <h6>Price: Rs {ele.price}/-</h6>
            <h6>Quantity: {ele.qty}</h6>
            <button
              onClick={() => {
                del(ele.id);
              }}
            >
              Remove from cart
            </button>
          
            
          </div>
          </div>
        </div>
      ))}
     
     
     </div>

<div className="checkout">
   <h3> Total: Rs {price}/-</h3>
<br />
<Link to={"/checkout"}>
<button className="checkoutbtn">Checkout</button>
</Link>
</div>
</div>
  );
};
