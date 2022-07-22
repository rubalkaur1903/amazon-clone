import React from 'react';
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import '../cssFiles/Header.css';
import { useStateValue } from '../context/StateProvider'

function Header() {
  const [{ cart }] = useStateValue();

  return (
    <div className='header'>
      <Link to='/'>
        <img 
          className='header-logo'
          src="https://bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png" 
          alt='amazon logo'
        />
      </Link>
      <div className='header-search'>
        <input 
          className='header-search-input'
          type='text'
        />
        <SearchIcon className='header-search-icon' />
      </div>
      <div className='header-nav'>
        <div className='header-options'>
          <span className='header-option-1'>Hello, Guest</span>
          <span className='header-option-2'>Sign In</span>
        </div>
        <div className='header-options'>
          <span className='header-option-1'>Returns</span>
          <span className='header-option-2'>& Orders</span>
        </div>
        <div className='header-options'>
          <span className='header-option-1'>Your</span>
          <span className='header-option-2'>Prime</span>
        </div>
        <Link to='/checkout  '>
          <div className='header-options-cart'>
            <ShoppingCartSharpIcon />
            <span className='header-option-1 header-cart-count' >{cart?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header;