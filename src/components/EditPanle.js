import React, { Component } from 'react';
// import data from './data.json';

export default class EditPanle extends Component {

  

  
  // inName = document.getElementById("inputName").value;
  // inDes = document.getElementById('inputDes').value;
  
  todoItem = {
    "name": this.inName,
    "des": this.inDes 
  }
  todoItemToJSON = JSON.stringify(this.todoItem);
  
  handelOnSave=()=>{
    localStorage.setItem("todoItem", this.todoItemToJSON);
    console.log(this.todoItem);
    // console.log(data.todos);
  }


  render() {
    return (
      <>
        
        <div className="edit-cnt">
            <header>
                <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.147257 5.72344L4.02377 1.51962L4.735 2.2909L1.71708 5.56362H10.5626C10.8407 5.56362 11.0656 5.80799 11.0656 6.10908C11.0656 6.41017 10.8407 6.65453 10.5626 6.65453H1.71708L4.735 9.92726L4.02377 10.6985L0.147257 6.49471C-0.0494111 6.28144 -0.0494111 5.93671 0.147257 5.72344Z" className='backspace-btn' />
                </svg>
                <h3>Edit Todo</h3>
            </header>
            <div className="edit-panle">
                <input className='input-name' id='inputName' type="text" placeholder='Todo Name'  />
                <input className='input-des' id="inputDes" type="text" placeholder='Add Todo Description'  />
            </div>
            <button className='save-btn'  onClick={this.handelOnSave}>Save</button>
        </div>
      </>
      
    )
  }
}
