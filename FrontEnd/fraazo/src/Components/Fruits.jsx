import axios from "axios";
import "./allcss.css";
import { useEffect, useState } from "react";
import { addFruits } from "../Redux/action";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const Fruits = () => {
  const dispatch = useDispatch();
  const [fr, setfr] = useState([]);
  const fruitarr = useSelector((store) => store.fruiteArr);
  console.log(fruitarr, "fruitarrrpage");

  const handelFruiits = (e) => {
    const datatoset = fruitarr.filter((ele) => ele.name === e.target.value);
    console.log(datatoset);
    setfr(datatoset);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/fruits").then((res) => {
      setfr(res.data);
      console.log(res.data);
      dispatch(addFruits(res.data));
    });
  }, []);

  return (
    <div className="containerdv">
      <div className="filterfruitdiv">
        <button
          value="apple"
          onClick={(e) => {
            handelFruiits(e);
          }}
        >
          Apple
        </button>
        <hr></hr>
        <button
          value="Banana"
          onClick={(e) => {
            handelFruiits(e);
          }}
        >
          Banana
        </button>
        <hr></hr>
        <button
          value="pomegrante"
          onClick={(e) => {
            handelFruiits(e);
          }}
        >
          Pomegranate
        </button>
      </div>
      <div className="childdiv">
        {fr.map((ele) => (
          <div className="actuallfruites" key={ele.id}>
            <Link to={`/fruits/${ele.id}`}>
              <img src={ele.img}></img>
              <h6>{ele.name}</h6>
              <p>Rs: {ele.price}/-</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
