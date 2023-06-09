import React, { Component } from 'react'
import ThemeToggler from './ThemeToggler'

export default class Menu extends Component {

  menuColaps = (checked)=>{
    
    // document.getElementById('burger').style.transform= "rotate(180deg)";
    // document.getElementById('burger').style.transition= "0.25s";
    // document.getElementById('menu').style.left = "-200px"

    var burger_icon = document.getElementById('burger_icon')
    if (burger_icon.checked === false) {  
      document.getElementById('menu').style.left = "0";
      document.getElementById('menu').style.transition = "0.25s";
      // document.getElementsByClassName('user-name')[0].style.display = "unset";
      // document.getElementsByClassName('user')[0].style.justifyContent = "space-between";
      // document.getElementsByClassName('btn-grup-2')[0].style.flexDirection = "row";
      // document.getElementsByClassName('btn-grup-2')[0].style.justifyContent = "unset";


    }
    else {
      document.getElementById('menu').style.left = "-200px";
      document.getElementById('menu').style.transition = "0.25s";
      // document.getElementsByClassName('user-name')[0].style.display = "none";
      // document.getElementsByClassName('user')[0].style.justifyContent = "right";
      // document.getElementsByClassName('btn-grup-2')[0].style.flexDirection = "column";
      // document.getElementsByClassName('btn-grup-2')[0].style.justifyContent = "right";

    }
  }


  render() {
    return (
    
        <div className="menu" id='menu'>
            <div className='user'>
                <div className="profile">
                  <div className="profile-img">
                    {/* removable with img */}
                    <a href="/">
                        <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <ellipse cx="14.91" cy="14.12" rx="14.91" ry="14.12" fill="#3772FF"/>
                          <path d="M19.4749 20H17.3749L12.6199 12.815V20H10.5199V9.515H12.6199L17.3749 16.715V9.515H19.4749V20Z" fill="#FEFEFE"/>
                        </svg>
                    </a>
                  </div>
                  <div className="user-name">
                    <a href="/">Naveen</a>
                  </div>
                </div>
                <label onClick={this.menuColaps} htmlFor="burger_icon">
                <input type="checkbox" name="burger"  id="burger_icon" />
                <div className="burger" id="burger"  >
                  <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.2588 9.29675H2.25879" className='burger-stroke'  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.2588 1.7211H12.2588" stroke="#808191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.301406" d="M21.2588 16.8724H12.2588" stroke="#808191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.25879 4.56198L1.25879 9.29676L6.25879 14.0315" className='burger-stroke' stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
                </div>
                </label>
            </div>

            <div className="menu-items">
              <ul>
                <li className='menu-item'>
                  <a href="/" className='menu-item-link'>
                    <div className="item-icon">
                      <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6288 1.30084H16.5186C17.7142 1.30084 18.6841 2.22727 18.6841 3.37015V6.12951C18.6841 7.27153 17.7142 8.19882 16.5186 8.19882H13.6288C12.4323 8.19882 11.4624 7.27153 11.4624 6.12951V3.37015C11.4624 2.22727 12.4323 1.30084 13.6288 1.30084Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.15811 1.30084H6.04695C7.24346 1.30084 8.21336 2.22727 8.21336 3.37015V6.12951C8.21336 7.27153 7.24346 8.19882 6.04695 8.19882H3.15811C1.9616 8.19882 0.991699 7.27153 0.991699 6.12951V3.37015C0.991699 2.22727 1.9616 1.30084 3.15811 1.30084Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.15811 11.1573H6.04695C7.24346 11.1573 8.21336 12.0838 8.21336 13.2275V15.986C8.21336 17.1289 7.24346 18.0553 6.04695 18.0553H3.15811C1.9616 18.0553 0.991699 17.1289 0.991699 15.986V13.2275C0.991699 12.0838 1.9616 11.1573 3.15811 11.1573Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6291 11.1573H16.5188C17.7144 11.1573 18.6843 12.0838 18.6843 13.2275V15.986C18.6843 17.1289 17.7144 18.0553 16.5188 18.0553H13.6291C12.4325 18.0553 11.4626 17.1289 11.4626 15.986V13.2275C11.4626 12.0838 12.4325 11.1573 13.6291 11.1573Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <p className='item-p'>Home</p>
                  </a>
                </li>
                <li className='menu-item'>
                  <a href="/" className='menu-item-link'>
                    <div className="item-icon">
                      <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M6.3634 8.81894V15.3152" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                       <path d="M11.0294 5.7099V15.3146" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                       <path d="M15.6202 12.2516V15.3151" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6774 1.11383H6.30598C3.03932 1.11383 0.991699 3.30327 0.991699 6.40273V14.7641C0.991699 17.8635 3.02979 20.0529 6.30598 20.0529H15.6774C18.9536 20.0529 20.9917 17.8635 20.9917 14.7641V6.40273C20.9917 3.30327 18.9536 1.11383 15.6774 1.11383Z" stroke="#808191" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>

                    </div>
                    <p className='item-p'>Section 1</p>
                  </a>
                </li>
                <li className='menu-item'>
                  <a href="/" className='menu-item-link'>
                    <div className="item-icon">
                      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.04169 10.3486V10.8486H4.54169H5.84171C6.00159 10.8486 6.09171 10.972 6.09171 11.0588V16.6648C6.09171 16.7516 6.00159 16.875 5.84171 16.875H4.54169H4.04169V17.375V18.6724C4.04169 18.7591 3.95157 18.8826 3.79169 18.8826C3.6318 18.8826 3.54169 18.7591 3.54169 18.6724V17.375V16.875H3.04169H1.7417C1.58182 16.875 1.4917 16.7516 1.4917 16.6648V11.0588C1.4917 10.972 1.58182 10.8486 1.7417 10.8486H3.04169H3.54169V10.3486V7.85811C3.54169 7.77132 3.6318 7.64789 3.79169 7.64789C3.95157 7.64789 4.04169 7.77132 4.04169 7.85811V10.3486Z" stroke="#808191"/>
                        <path d="M11.262 4.90248V5.40248H11.762H13.012C13.1718 5.40248 13.262 5.52591 13.262 5.6127V14.7224C13.262 14.8092 13.1718 14.9326 13.012 14.9326H11.772H11.272V15.4326V16.73C11.272 16.8168 11.1819 16.9402 11.022 16.9402C10.8621 16.9402 10.772 16.8168 10.772 16.73V15.4326V14.9326H10.272H9.02197C8.86209 14.9326 8.77197 14.8092 8.77197 14.7224V5.6127C8.77197 5.52591 8.86209 5.40248 9.02197 5.40248H10.262H10.762V4.90248V1.98585C10.762 1.89907 10.8521 1.77563 11.012 1.77563C11.1718 1.77563 11.262 1.89907 11.262 1.98585V4.90248Z" stroke="#808191"/>
                        <path d="M18.4421 2.34674V2.84674H18.9421H20.2421C20.402 2.84674 20.4921 2.97017 20.4921 3.05695V11.9962C20.4921 12.083 20.402 12.2064 20.2421 12.2064H18.9421H18.4421V12.7064V14.7234C18.4421 14.8102 18.352 14.9337 18.1921 14.9337C18.0322 14.9337 17.9421 14.8102 17.9421 14.7234V12.7064V12.2064H17.4421H16.1421C15.9822 12.2064 15.8921 12.083 15.8921 11.9962V3.05695C15.8921 2.97017 15.9822 2.84674 16.1421 2.84674H17.4421H17.9421V2.34674V1.15358C17.9421 1.06679 18.0322 0.943359 18.1921 0.943359C18.352 0.943359 18.4421 1.06679 18.4421 1.15358V2.34674Z" stroke="#808191"/>
                      </svg>

                    </div>
                    <p className='item-p'>Section 2</p>
                  </a>
                </li>
                <li className='menu-item'>
                  <a href="/" className='menu-item-link'>
                    <div className="item-icon">
                      <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M3.3588 10.8199C4.50756 10.8199 5.4388 10.0051 5.4388 9.00001C5.4388 7.99489 4.50756 7.18008 3.3588 7.18008C2.21005 7.18008 1.27881 7.99489 1.27881 9.00001C1.27881 10.0051 2.21005 10.8199 3.3588 10.8199Z" fill="#6D6D6D" stroke="#7E7E7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                       <path d="M13.4388 4.49525C14.5544 4.49525 15.4588 3.68044 15.4588 2.67532C15.4588 1.6702 14.5544 0.855408 13.4388 0.855408C12.3232 0.855408 11.4188 1.6702 11.4188 2.67532C11.4188 3.68044 12.3232 4.49525 13.4388 4.49525Z" fill="#6D6D6D" stroke="#7E7E7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                       <path d="M13.4388 17.1446C14.5544 17.1446 15.4588 16.3298 15.4588 15.3247C15.4588 14.3196 14.5544 13.5048 13.4388 13.5048C12.3232 13.5048 11.4188 14.3196 11.4188 15.3247C11.4188 16.3298 12.3232 17.1446 13.4388 17.1446Z" fill="#6D6D6D" stroke="#7E7E7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                       <path d="M5.59875 7.59453L11.1988 4.08081" stroke="#7E7E7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                       <path d="M11.1988 13.9192L5.59875 10.4055" stroke="#7E7E7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>

                    </div>
                    <p>Section 3</p>
                  </a>
                </li>
                <li className='menu-item active'>
                  <a href="/" className='menu-item-link'>
                    <div className="item-icon">
                      <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M3.3588 10.8199C4.50756 10.8199 5.4388 10.0051 5.4388 9.00001C5.4388 7.99489 4.50756 7.18008 3.3588 7.18008C2.21005 7.18008 1.27881 7.99489 1.27881 9.00001C1.27881 10.0051 2.21005 10.8199 3.3588 10.8199Z" fill="#6D6D6D" stroke="#7E7E7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                       <path d="M13.4388 4.49525C14.5544 4.49525 15.4588 3.68044 15.4588 2.67532C15.4588 1.6702 14.5544 0.855408 13.4388 0.855408C12.3232 0.855408 11.4188 1.6702 11.4188 2.67532C11.4188 3.68044 12.3232 4.49525 13.4388 4.49525Z" fill="#6D6D6D" stroke="#7E7E7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                       <path d="M13.4388 17.1446C14.5544 17.1446 15.4588 16.3298 15.4588 15.3247C15.4588 14.3196 14.5544 13.5048 13.4388 13.5048C12.3232 13.5048 11.4188 14.3196 11.4188 15.3247C11.4188 16.3298 12.3232 17.1446 13.4388 17.1446Z" fill="#6D6D6D" stroke="#7E7E7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                       <path d="M5.59875 7.59453L11.1988 4.08081" stroke="#7E7E7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                       <path d="M11.1988 13.9192L5.59875 10.4055" stroke="#7E7E7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>

                    </div>
                    <p className='item-p'>Section 4</p>
                  </a>
                </li>


              </ul>
            </div>
        
            <div className="nav-btns">
                <div className="btn-grup-1">
                  <button className='btn wallet-1'>
                       <svg width="15px" height="15px" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <ellipse cx="14.91" cy="14.12" rx="14.91" ry="14.12" fill="#3772FF"/>
                          <path d="M19.4749 20H17.3749L12.6199 12.815V20H10.5199V9.515H12.6199L17.3749 16.715V9.515H19.4749V20Z" fill="#FEFEFE"/>
                        </svg>
                        <p>$0.99</p>
                  </button>
                  <button className='btn buy-btn'>
                        Buy $XYZ
                  </button>
                </div>
                <div className="btn-grup-2">
                  <div className='server-btn'>
                    <svg width="22" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.3838 0.116364C4.83425 0.116364 0.340332 4.83384 0.340332 10.6465C0.340332 16.4591 4.83425 21.1765 10.3838 21.1765C15.9434 21.1765 20.4473 16.4591 20.4473 10.6465C20.4473 4.83384 15.9434 0.116364 10.3838 0.116364ZM17.3509 6.43442H14.3851C14.0634 5.11816 13.6009 3.85455 12.9977 2.68571C14.8475 3.3491 16.3857 4.69695 17.3509 6.43442ZM10.3938 2.2645C11.2283 3.52811 11.8817 4.92861 12.314 6.43442H8.47361C8.90591 4.92861 9.55939 3.52811 10.3938 2.2645ZM2.61242 12.7525C2.45157 12.0785 2.35103 11.373 2.35103 10.6465C2.35103 9.91988 2.45157 9.21436 2.61242 8.54044H6.01051C5.93008 9.23542 5.86976 9.93041 5.86976 10.6465C5.86976 11.3625 5.93008 12.0575 6.01051 12.7525H2.61242ZM3.43681 14.8585H6.40259C6.7243 16.1748 7.18676 17.4384 7.78997 18.6072C5.94013 17.9438 4.40195 16.6065 3.43681 14.8585ZM6.40259 6.43442H3.43681C4.40195 4.68642 5.94013 3.3491 7.78997 2.68571C7.18676 3.85455 6.7243 5.11816 6.40259 6.43442ZM10.3938 19.0284C9.55939 17.7648 8.90591 16.3643 8.47361 14.8585H12.314C11.8817 16.3643 11.2283 17.7648 10.3938 19.0284ZM12.7463 12.7525H8.04131C7.95083 12.0575 7.88046 11.3625 7.88046 10.6465C7.88046 9.93041 7.95083 9.22489 8.04131 8.54044H12.7463C12.8368 9.22489 12.9072 9.93041 12.9072 10.6465C12.9072 11.3625 12.8368 12.0575 12.7463 12.7525ZM12.9977 18.6072C13.6009 17.4384 14.0634 16.1748 14.3851 14.8585H17.3509C16.3857 16.596 14.8475 17.9438 12.9977 18.6072ZM14.7772 12.7525C14.8576 12.0575 14.9179 11.3625 14.9179 10.6465C14.9179 9.93041 14.8576 9.23542 14.7772 8.54044H18.1752C18.3361 9.21436 18.4366 9.91988 18.4366 10.6465C18.4366 11.373 18.3361 12.0785 18.1752 12.7525H14.7772Z" fill="#808191"/>
                    </svg>
                  </div>
                  <div className='theme-btn'>
                    <ThemeToggler/>
                  </div>
                </div>
            </div>
        </div> 
    
    )
  }
}
