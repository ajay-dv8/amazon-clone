import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

import hLogo from "../../img/hLogo.jpg";
import Search from "@mui/icons-material/Search"
import { ShoppingBasket } from '@mui/icons-material';
import { useStateValue } from '../../stateProvider';
import { useAuth } from '../../firebase'
import { logout } from '../../firebase';


function Header() {
    const [{basket}] = useStateValue();
    const currentUser = useAuth();

    function handleSignOut(){
        if(currentUser){
            return logout();
        }
    }

  return (
    <div className='header'>
        <Link to="/">
        <img className='hLogo' src={hLogo} alt="" />
        </Link>
        <div className='searchCon'>
            <input className='hSearchInput' type='text'/> 
            <Search className="muiSearch"/>     
        </div>

        <div className='hNav'>
            <Link to={!currentUser && 'login'}>
                <div className='hOption' onClick={handleSignOut}>
                    <span className='topOpt'>
                        {currentUser ? currentUser?.email : 'Hello'}</span>
                    <span className='mainOpt'>
                        {currentUser ? 'Sign Out' : 'Sign in'}
                    </span>
                </div>
            </Link>

            <Link to="/orders">
                <div className='hOption'>
                    <span className='topOpt'>Returns</span>
                    <span className='mainOpt'>& Orders</span>
                </div>
            </Link>

            <div className='hOption'>
                <span className='topOpt'>Your</span>
                <span className='mainOpt'>Prime</span>
            </div>

            <Link to="checkout">
            <div className='hCart'>
                <ShoppingBasket />
                <span className='mainOpt cartCount'>{basket?.length}</span>
            </div>
            </Link>
        </div>
    </div>

  )
}

export default Header;