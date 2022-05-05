import axios from "axios"
import "./allcss.css";
import { useEffect, useState } from "react"
import {addVeg } from "../Redux/action"
import { useSelector,useDispatch } from "react-redux"
import { Link } from "react-router-dom";


export const Vegitable=()=>{

    const dispatch=useDispatch();
    const [veg,setveg]=useState([]);
    const vegarr=useSelector((store )=> store.vegArr);
    console.log(vegarr,"vegpage");
   
   


    const handelveg=(e)=>{
        
       
    
        const datatoset=vegarr.filter((ele)=>ele.name===e.target.value)
        console.log(datatoset)
        setveg(datatoset)
    }



   useEffect(()=>{
       axios.get("http://localhost:8080/veg").then((res)=>{
           setveg(res.data)
           console.log(res.data)
           dispatch(addVeg(res.data))
       })
   },[])

    return (
        <div className="containerdv">

            <div className="filterfruitdiv">
         
            <button value="onion" onClick={(e)=>{handelveg(e)}}>Onion</button>
            <hr></hr>
           <button value="potato" onClick={(e)=>{handelveg(e)}}>Potato</button>
           <hr></hr>
           <button value="tomato" onClick={(e)=>{handelveg(e)}}>Tomato</button>
          


            </div>
            <div className="childdiv">

            {veg.map((ele)=>
           <div className="actuallfruites"  key={ele.id}>
               <Link to={`/veg/${ele.id}`}>
              
              <img src={ele.img}></img>
              <h6>{ele.name}</h6>
               <p>rs:{ele.price}</p>
               </Link>

           </div>
           
       
    
       )}
      </div>

        
        </div>
    )
}