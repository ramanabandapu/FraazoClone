import {Link} from "react-router-dom"
 import "./home.css"
export const Home=()=>{
    return (
        <div className="container">
            <div className="belownavbardiv">
                <div className="leftdiv">
                <img className="leftdivimg" src={"https://s3.ap-south-1.amazonaws.com/fraazo-prod/web_ban/2166.png?1651056728"}></img>
                </div>
                        <div className="rightdiv">
                        <img className="rightdivimg" src={"https://fraazo.com/static/Web2-9a152d86240414d76ce205c491e47c4e.png"}></img>
                            <img className="rightdivimg1" src={"https://fraazo.com/static/Web2-9a152d86240414d76ce205c491e47c4e.png"}></img>
                            <img className="rightdivimg1" src={"https://fraazo.com/static/Web3-9f5a46f22ff99bcfe079257218356413.png"}></img>
                        </div>
                </div>
            {/* belowdivended */}
            <div className="bestdeal">
            <p className="bestdealheading">BEST DEALS</p>
            </div>
            <div className="bestdealdiv">
                <div className="bestdealdiv1">
            <img className="bestdealdivimg" src={"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/329/original/data?1616795305"}></img>
            <p className="bestdealdiv1parg">Alphonso Mango Devgad</p>
            <p className="bestdealdiv1parg">6 pcs</p>
            <p className="bestdealdiv1parg">Rs. 399</p>
            </div>
            <div className="bestdealdiv1">
            <img className="bestdealdivimg" src={"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FBAN14.png"}></img>
            <p className="bestdealdiv1parg">Banana Robusta</p>
            <p className="bestdealdiv1parg">1 kg</p>
            <p className="bestdealdiv1parg">Rs. 29</p>
            </div>
            <div className="bestdealdiv1">
            <img className="bestdealdivimg" src={"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FCHI13.png"}></img>
            <p className="bestdealdiv1parg">Chicoo</p>
            <p className="bestdealdiv1parg">500 g</p>
            <p className="bestdealdiv1parg">Rs. 21</p>
            </div>
            <div className="bestdealdiv1">
            <img className="bestdealdivimg" src={"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/006/original/data?1642616267"}></img>
            <p className="bestdealdiv1parg">Apple Royal Gala</p>
            <p className="bestdealdiv1parg">4 pcs</p>
            <p className="bestdealdiv1parg">Rs. 99</p>
            </div>
            <div className="bestdealdiv1">
            <img className="bestdealdivimg" src={"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FMUS1.png"}></img>
            <p className="bestdealdiv1parg">Musk Melon / Kharabooja</p>
            <p className="bestdealdiv1parg">1 pcs</p>
            <p className="bestdealdiv1parg">Rs. 29</p>
            </div>
            </div>
                <div className="fruitscat">
                <img className="fruitscatimg" src={"https://s3.ap-south-1.amazonaws.com/fraazo-prod/web/298.png?1647330831"}></img>
                <Link to={"/fruits"}>
               <img className="fruitscatimg" src={"https://fraazo-master.s3.ap-south-1.amazonaws.com/webban/Fruits.png"}></img>
               </Link>
               <Link to={"/veg"}>
              <img className="fruitscatimg" src={"https://fraazo-master.s3.ap-south-1.amazonaws.com/webban/Vegetables.png"}></img>
              </Link>
             <img className="fruitscatimg" src={"https://s3.ap-south-1.amazonaws.com/fraazo-prod/web/1.png?1619161151"}></img>
                </div>
                <div>
                <img className="fruitscatimg" src={"https://s3.ap-south-1.amazonaws.com/fraazo-prod/web/201.png?1635224001"}></img>
                <img className="fruitscatimg" src={"https://s3.ap-south-1.amazonaws.com/fraazo-prod/web/199.png?1635058415"}></img>
                </div>
        </div>
    )
}