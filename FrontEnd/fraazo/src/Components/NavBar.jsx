import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Badge from '@mui/material/Badge';
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';
// import {ADD_CARTPRODUCT} from "../Redux/action";
import { useSelector } from 'react-redux';
// import { CartPage } from './CartPage';
import { Link } from 'react-router-dom';



export const Navbar = () => {

  const navigate = useNavigate()
  const carty=useSelector((store)=> store.cart);
  console.log(carty.length);
 

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "20px",
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '600px',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '60ch',
      },
    },
  }));

  return (
    <>
    <div className='navbardiv'>


      <div className="logodiv"><a href=""><img  src="https://globalprimenews.com/wp-content/uploads/2020/05/Fraazo-Logo.png" alt="flaazo/logo" /></a></div>
      <div className="locationdiv">
        <LocationOnIcon className="locationhover" color="action" />
        <p>Powai</p>
      </div>
      <div className='searchbardiv'>
        {/* <input type="text"  placeholder='Find fresh vegetables,fruits and dairy...' /> */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Find fresh vegetables,fruits and dairy..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

      </div>

      <div className='cartdiv'>
          
      <Badge style={{cursor: "pointer"}}  badgeContent={carty.length} color="error">
      <Link to ={"/cartpage"}>
        < ShoppingCartIcon className='carthover' color="action" />
        </Link>
        </Badge>
        {/*  */}
        <p>Cart</p>
        
      </div>


      <div className='logindiv' onClick={()=>{navigate("/login")}}>
        <PersonIcon className="loginhover" color="action" />
        <p>Login</p>
      </div>

    </div>


    </>
  )
}