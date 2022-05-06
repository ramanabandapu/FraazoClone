import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./allcss.css";
import { addCartproduct } from "../Redux/action";
import { useDispatch } from "react-redux";


export const FruitDetail=()=>{
    const [fruitdetail,setFruitDetail]=useState({})
    const dispatch=useDispatch();

    const {id}=useParams();

    useEffect(()=>{
     
        axios.get(`https://radiant-savannah-89782.herokuapp.com/fruits/${id}`).then((res)=>{
            console.log(res.data)
            setFruitDetail(res.data)
        })



    },[])

    const handle=()=>{
      
       
            dispatch(addCartproduct(fruitdetail))
    
            
          
    
       }


    return (
       
        <div>
        

          <div className="fruitdetaildiv">
              <div className="leftfruitdiv">
              <img src={fruitdetail.img}></img>
              </div>
              <div className="rightfruitdiv">
              <h3>{fruitdetail.name}</h3>
              <p>Price: Rs {fruitdetail.price}/-</p>
              <button onClick={handle}> Add to cart</button>
              </div>
              

          </div>

        </div>
    )
}