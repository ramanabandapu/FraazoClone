import axios from "axios"
import "./allcss.css";
import { useEffect, useState } from "react"
import {addVeg } from "../Redux/action"
import { useSelector,useDispatch } from "react-redux"
import { Link } from "react-router-dom";


export const Vegitable=()=>{

    const dispatch=useDispatch();
    const [veg,setveg]=useState([]);
    console.log(veg);
    const vegarr=useSelector((store )=> store.vegArr);
    console.log(vegarr,"vegpage");
   
   


    const handelveg=(e)=>{
        
       
    
      const datatoset=vegarr.filter((ele)=>ele.name===e.target.value)
        console.log(datatoset)
        setveg(datatoset)
    }



   useEffect(()=>{
       axios.get("https://radiant-savannah-89782.herokuapp.com/veg").then((res)=>{
           setveg(res.data)
           console.log(res.data)
           dispatch(addVeg(res.data))
       })
   },[])

    return (
        <div className="containerdv">

            <div className="filterfruitdiv">
         
            <button value="Onion" onClick={(e)=>{handelveg(e)}}>Onion</button>
            <hr></hr>
           <button value="Potato" onClick={(e)=>{handelveg(e)}}>Potato</button>
           <hr></hr>
           <button value="Tomato" onClick={(e)=>{handelveg(e)}}>Tomato</button>
           <hr></hr>
           <button value="Brinjal" onClick={(e)=>{handelveg(e)}}>Brinjal</button>
           <hr></hr>
           <button value="Pumpkin" onClick={(e)=>{handelveg(e)}}>Pumpkin</button>
          


            </div>
            <div className="childdiv">

            {veg.map((ele)=>
           <div className="actuallfruites"  key={ele.id}>
               <Link to={`/veg/${ele._id}`}>
              
              <img src={ele.img}></img>
              <h6 className="nostyle">{ele.name}</h6>
               <p>Rs: {ele.price}/-</p>
               </Link>

           </div>
           
       
    
       )}
      </div>


        
        </div>
    )
}