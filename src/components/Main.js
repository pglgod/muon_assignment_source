import React, { Component } from "react";
import data from './data.json';
import EditPanle from "./EditPanle";

export default class Main extends Component {
    
    // addTodo = document.getElementById('addtodo').innerHTML;
    // handleOnAdd=()=>{

    //     alert(this.addTodo);

    // }
    

  render() {
    return (

      
        <div className="cnt">
          {/* status bar */}
            <div className="status-bar">
            <div className="status">Section 4</div>
            <div className="btn-grup-3">
              <div className="wallet-2">
                <div className="wallet-icon">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.1449 10.4163H16.0928C14.605 10.4156 13.3991 9.4518 13.3982 8.26186C13.3982 7.07192 14.605 6.10815 16.0928 6.10742H20.1449"
                      stroke="#3772FF"
                      stroke-width="1.25176"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.551 8.2125H16.2391"
                      stroke="#3772FF"
                      stroke-width="1.25176"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.24077 1.29364H14.8921C17.793 1.29364 20.1446 3.17449 20.1446 5.49454V11.2399C20.1446 13.56 17.793 15.4408 14.8921 15.4408H6.24077C3.33995 15.4408 0.988281 13.56 0.988281 11.2399V5.49454C0.988281 3.17449 3.33995 1.29364 6.24077 1.29364Z"
                      stroke="#3772FF"
                      stroke-width="1.25176"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="wallet-amount">0.2 $XYZ</div>
              </div>
              <button className="tier">tier 1</button>
            </div>
            </div>

            <div className="cnt-main">
                <div className="element-cnt">
                    <div className="row-1">
                      <div className="row-1-item">
                         <p>List : Things To Buy</p></div>
                      <div className="row-1-item"><p>List : Empty List</p></div>
                      <div className="row-1-item add-todo-list ">
                        <p>Add Todo-List </p> 
                        <p className="plus-btn"><b>+</b></p>
                      </div>
                    </div>
                    <div className="row-2">
                        {/* first col */}
                        <div className="col">
                            
                        <div className="todo-item selected">
                                <div className="todo-title">
                                    <div className="todo-name">
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12.5721" cy="12" r="12" fill="url(#paint0_linear_10_807)"/>
                                            <path d="M14.9036 9.96558H10.674C9.86398 10.8914 8.41235 12.7682 8.41235 14.342C8.41235 15.0527 8.72813 17.3718 12.7888 17.3718C16.8494 17.3718 17.1652 15.0527 17.1652 14.342C17.1652 12.7682 15.7136 10.8914 14.9036 9.96558Z" fill="white"/>
                                            <path d="M12.4525 9.29478V7.94818H13.1258V9.29478H14.6804L16.027 6.60159H9.55127L10.8979 9.29478H12.4525Z" fill="white"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_10_807" x1="-11.4279" y1="12" x2="12.5721" y2="36" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#BBB5E2"/>
                                            <stop offset="1" stop-color="#9C92DF"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <h2 className="if-empty" id="addtodo" >Add todo</h2>
                                    </div>
                                    <button className="edit-btn"  >
                                        <p className="plus-btn"  ><b>+</b></p>
                                    </button>
                                </div>
                                <div className="todo-des"> 
                                    <p >
                                        Add Todo description.
                                    </p>
                                </div>
                            </div>
                            
                        {/* <div className="todo-item selected">
                                <div className="todo-title">
                                    <div className="todo-name">
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12.5721" cy="12" r="12" fill="url(#paint0_linear_10_807)"/>
                                            <path d="M14.9036 9.96558H10.674C9.86398 10.8914 8.41235 12.7682 8.41235 14.342C8.41235 15.0527 8.72813 17.3718 12.7888 17.3718C16.8494 17.3718 17.1652 15.0527 17.1652 14.342C17.1652 12.7682 15.7136 10.8914 14.9036 9.96558Z" fill="white"/>
                                            <path d="M12.4525 9.29478V7.94818H13.1258V9.29478H14.6804L16.027 6.60159H9.55127L10.8979 9.29478H12.4525Z" fill="white"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_10_807" x1="-11.4279" y1="12" x2="12.5721" y2="36" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#BBB5E2"/>
                                            <stop offset="1" stop-color="#9C92DF"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <h2>Carrot</h2>
                                    </div>
                                    <div className="edit-btn">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15" cy="15" r="15" fill="#353945"/>
                                            <path d="M20.2189 7C19.8777 7 19.5365 7.13029 19.2761 7.39062L17.6667 9L21.0001 12.3333L22.6095 10.724C23.1302 10.2033 23.1302 9.35921 22.6095 8.83854L21.1616 7.39062C20.9012 7.13029 20.56 7 20.2189 7ZM16.3334 10.3333L8.50652 18.1602C8.50652 18.1602 9.11837 18.1053 9.34637 18.3333C9.57437 18.5613 9.38669 20.0533 9.66669 20.3333C9.94669 20.6133 11.4293 20.4162 11.642 20.6289C11.8546 20.8416 11.8399 21.4935 11.8399 21.4935L19.6668 13.6667L16.3334 10.3333ZM7.66667 20.3333L7.03776 22.1146C7.01304 22.1849 7.00027 22.2588 7 22.3333C7 22.5101 7.07024 22.6797 7.19526 22.8047C7.32029 22.9298 7.48986 23 7.66667 23C7.74119 22.9997 7.81513 22.987 7.88542 22.9622C7.8876 22.9614 7.88977 22.9605 7.89193 22.9596L7.90886 22.9544L7.91277 22.9518L9.66669 22.3333L8.66668 21.3333L7.66667 20.3333Z" fill="#B0B1C8"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="todo-des">
                                    <p>
                                        Carrot improve eyesight.
                                    </p>
                                </div>
                            </div> */}

                            {
                                data.todos.map((element)=>{
                                   return <div className="todo-item ">
                                        <div className="todo-title">
                                            <div className="todo-name">
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12.5721" cy="12" r="12" fill="url(#paint0_linear_10_807)"/>
                                                    <path d="M14.9036 9.96558H10.674C9.86398 10.8914 8.41235 12.7682 8.41235 14.342C8.41235 15.0527 8.72813 17.3718 12.7888 17.3718C16.8494 17.3718 17.1652 15.0527 17.1652 14.342C17.1652 12.7682 15.7136 10.8914 14.9036 9.96558Z" fill="white"/>
                                                    <path d="M12.4525 9.29478V7.94818H13.1258V9.29478H14.6804L16.027 6.60159H9.55127L10.8979 9.29478H12.4525Z" fill="white"/>
                                                    <defs>
                                                    <linearGradient id="paint0_linear_10_807" x1="-11.4279" y1="12" x2="12.5721" y2="36" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#BBB5E2"/>
                                                    <stop offset="1" stop-color="#9C92DF"/>
                                                    </linearGradient>
                                                    </defs>
                                                </svg>
                                                <h2>{element.name}</h2>
                                            </div>
                                            <div className="edit-btn">
                                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="15" cy="15" r="15" fill="#353945"/>
                                                    <path d="M20.2189 7C19.8777 7 19.5365 7.13029 19.2761 7.39062L17.6667 9L21.0001 12.3333L22.6095 10.724C23.1302 10.2033 23.1302 9.35921 22.6095 8.83854L21.1616 7.39062C20.9012 7.13029 20.56 7 20.2189 7ZM16.3334 10.3333L8.50652 18.1602C8.50652 18.1602 9.11837 18.1053 9.34637 18.3333C9.57437 18.5613 9.38669 20.0533 9.66669 20.3333C9.94669 20.6133 11.4293 20.4162 11.642 20.6289C11.8546 20.8416 11.8399 21.4935 11.8399 21.4935L19.6668 13.6667L16.3334 10.3333ZM7.66667 20.3333L7.03776 22.1146C7.01304 22.1849 7.00027 22.2588 7 22.3333C7 22.5101 7.07024 22.6797 7.19526 22.8047C7.32029 22.9298 7.48986 23 7.66667 23C7.74119 22.9997 7.81513 22.987 7.88542 22.9622C7.8876 22.9614 7.88977 22.9605 7.89193 22.9596L7.90886 22.9544L7.91277 22.9518L9.66669 22.3333L8.66668 21.3333L7.66667 20.3333Z" fill="#B0B1C8"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="todo-des">
                                            <p>
                                                {element.des}
                                            </p>
                                        </div>
                                    </div>
                                }

                                )
                            }
                            

                        </div>
                        {/* second col */}
                        <div className="col">
                            <div className="todo-item">
                                <div className="todo-title">
                                    <div className="todo-name">
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12.5721" cy="12" r="12" fill="url(#paint0_linear_10_807)"/>
                                            <path d="M14.9036 9.96558H10.674C9.86398 10.8914 8.41235 12.7682 8.41235 14.342C8.41235 15.0527 8.72813 17.3718 12.7888 17.3718C16.8494 17.3718 17.1652 15.0527 17.1652 14.342C17.1652 12.7682 15.7136 10.8914 14.9036 9.96558Z" fill="white"/>
                                            <path d="M12.4525 9.29478V7.94818H13.1258V9.29478H14.6804L16.027 6.60159H9.55127L10.8979 9.29478H12.4525Z" fill="white"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_10_807" x1="-11.4279" y1="12" x2="12.5721" y2="36" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#BBB5E2"/>
                                            <stop offset="1" stop-color="#9C92DF"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <h2 className="if-empty">Add todo</h2>
                                    </div>
                                    <div className="edit-btn">
                                        <p className="plus-btn" role="button"><b>+</b></p>
                                    </div>
                                </div>
                                <div className="todo-des">
                                    <p >
                                        Add Todo description.
                                    </p>
                                </div>
                            </div>
                            {
                                data.todos_1.map((element) =>{
                                    return <div className="todo-item ">
                                         <div className="todo-title">
                                             <div className="todo-name">
                                                 <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                     <circle cx="12.5721" cy="12" r="12" fill="url(#paint0_linear_10_807)"/>
                                                     <path d="M14.9036 9.96558H10.674C9.86398 10.8914 8.41235 12.7682 8.41235 14.342C8.41235 15.0527 8.72813 17.3718 12.7888 17.3718C16.8494 17.3718 17.1652 15.0527 17.1652 14.342C17.1652 12.7682 15.7136 10.8914 14.9036 9.96558Z" fill="white"/>
                                                     <path d="M12.4525 9.29478V7.94818H13.1258V9.29478H14.6804L16.027 6.60159H9.55127L10.8979 9.29478H12.4525Z" fill="white"/>
                                                     <defs>
                                                     <linearGradient id="paint0_linear_10_807" x1="-11.4279" y1="12" x2="12.5721" y2="36" gradientUnits="userSpaceOnUse">
                                                     <stop stop-color="#BBB5E2"/>
                                                     <stop offset="1" stop-color="#9C92DF"/>
                                                     </linearGradient>
                                                     </defs>
                                                 </svg>
                                                 <h2>{element.name}</h2>
                                             </div>
                                             <div className="edit-btn">
                                                 <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                     <circle cx="15" cy="15" r="15" fill="#353945"/>
                                                     <path d="M20.2189 7C19.8777 7 19.5365 7.13029 19.2761 7.39062L17.6667 9L21.0001 12.3333L22.6095 10.724C23.1302 10.2033 23.1302 9.35921 22.6095 8.83854L21.1616 7.39062C20.9012 7.13029 20.56 7 20.2189 7ZM16.3334 10.3333L8.50652 18.1602C8.50652 18.1602 9.11837 18.1053 9.34637 18.3333C9.57437 18.5613 9.38669 20.0533 9.66669 20.3333C9.94669 20.6133 11.4293 20.4162 11.642 20.6289C11.8546 20.8416 11.8399 21.4935 11.8399 21.4935L19.6668 13.6667L16.3334 10.3333ZM7.66667 20.3333L7.03776 22.1146C7.01304 22.1849 7.00027 22.2588 7 22.3333C7 22.5101 7.07024 22.6797 7.19526 22.8047C7.32029 22.9298 7.48986 23 7.66667 23C7.74119 22.9997 7.81513 22.987 7.88542 22.9622C7.8876 22.9614 7.88977 22.9605 7.89193 22.9596L7.90886 22.9544L7.91277 22.9518L9.66669 22.3333L8.66668 21.3333L7.66667 20.3333Z" fill="#B0B1C8"/>
                                                 </svg>
                                             </div>
                                         </div>
                                         <div className="todo-des">
                                             <p>
                                                 {element.des}
                                             </p>
                                         </div>
                                     </div>
                                }

                                )
                            }
                            
                        </div>
                        {/* third col */}
                        <div className="col">
                            
                        </div>
                    </div>     
                </div> 

                <EditPanle/>
            </div>
          
        </div>
      
    );
  }
}
