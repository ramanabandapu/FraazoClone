import {Link} from "react-router-dom"
 import "./home.css"
export const Home=()=>{

    
    


    return (
        <div className="container">
            <div className="belownavbardiv">
                <div className="leftdiv">
                <img src={"https://s3.ap-south-1.amazonaws.com/fraazo-prod/web_ban/2166.png?1651056728"}></img>
                </div>
                        <div className="rightdiv">
                        <img src={"https://fraazo.com/static/Web2-9a152d86240414d76ce205c491e47c4e.png"}></img>
                            <img src={"https://fraazo.com/static/Web2-9a152d86240414d76ce205c491e47c4e.png"}></img>
                            <img src={"https://fraazo.com/static/Web3-9f5a46f22ff99bcfe079257218356413.png"}></img>
                        </div>
               
                </div>

            {/* belowdivended */}
            <h2>Best Deal</h2>

            <div className="bestdealdiv">
            <img src={"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/329/original/data?1616795305"}></img>
            <img src={"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FBAN14.png"}></img>
            
            <img src={"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FCHI13.png"}></img>
           
            <img src={"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/006/original/data?1642616267"}></img>
            <img src={"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FMUS1.png"}></img>
            


            </div>
            
                <div className="fruitscat">
                <img src={"https://s3.ap-south-1.amazonaws.com/fraazo-prod/web/298.png?1647330831"}></img>
                <Link to={"/fruits"}>
               <img src={"https://fraazo-master.s3.ap-south-1.amazonaws.com/webban/Fruits.png"}></img>
               </Link>
               <Link to={"/veg"}>

              <img src={"https://fraazo-master.s3.ap-south-1.amazonaws.com/webban/Vegetables.png"}></img>
              </Link>
             <img src={"https://s3.ap-south-1.amazonaws.com/fraazo-prod/web/1.png?1619161151"}></img>
                </div>

            
        </div>
    )
}