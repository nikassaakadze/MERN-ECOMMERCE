import React from 'react'
import './Header.css'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { Badge } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import 'antd/dist/antd.css'
import {Link} from 'react-router-dom'
import CompareModal from './CompareModal';

function Header() {

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)

  const { cartItems } = cart

  const user = false

  return (
    <header className="header">
      <div className="header-in">
        <div className="header-in-left">
          <div className="header-in-left-logo">
            <Link to="/">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/601px-Xiaomi_logo_%282021-%29.svg.png" alt="" />
            </Link>
          </div>
          <nav className="header-in-left-nav">
            <ul className="header-navlist">
              <li><span>Home</span></li>
              <li><span>Category</span></li>
              <li><span>About</span></li>
              <li><span>Contact</span></li>
            </ul>
          </nav>
        </div>
        <div className="header-in-right">
          <div className="header-options">
            <div className="header-option option-search">
              <span>Search</span>
              <SearchRoundedIcon />
            </div>
            <CompareModal />
            <div className="header-option option-basket">
              <Link to="/view-cart">
                <span>Cart</span>
                <Badge count={cartItems?.length} showZero>
                  <LocalMallOutlinedIcon />
                </Badge>
              </Link>
            </div>
            <div className="header-option option-user">
              {
                user ? (
                  <div className="user-avatar">
                    <img src="" alt="user" />
                  </div>
                ) : (
                  <div className="user-notSigned">
                    <div className="user-avatar">
                      <AccountCircleOutlinedIcon />
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
