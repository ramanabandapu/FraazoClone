import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./allcss.css";
import { addCartproduct } from "../Redux/action";
import { useDispatch } from "react-redux";


export const VegitableDetail=()=>{

    const dispatch=useDispatch();
    const [vegdetail,setvegDetail]=useState({})


    const {id}=useParams();

    useEffect(()=>{
     
        axios.get(`http://localhost:8080/veg/${id}`).then((res)=>{
            console.log(res.data)
            setvegDetail(res.data)
        })



    },[])


    const handle=()=>{
      
        
            dispatch(addCartproduct(vegdetail))
    
            
          
    
       }



    return (
       
        <div>
          {id}

          <div className="fruitdetaildiv">
              <div className="leftfruitdiv">
              <img src={vegdetail.img}></img>
              </div>
              <div className="rightfruitdiv">
              <h3>{vegdetail.name}</h3>
              <p>Price: Rs {vegdetail.price}/-</p>
              <button onClick={handle}> AddTocart</button>
              </div>
              

          </div>

        </div>
    )
}