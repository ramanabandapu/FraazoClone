import {Link} from "react-router-dom"
export const Home=()=>{
    return (
        <div>
            <Link to= {"/veg"}><h1>Vegitable</h1></Link>
            <Link to= {"/fruits"}><h1>Fruits</h1></Link>
        </div>
    )
}