import React, { Component } from 'react'

export default class ThemeToggler extends Component {


        
change_theme=()=> {

    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "dark";
  
    if (currentTheme === "dark") {
        targetTheme = "light";
    }
  
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
  
  };

  render() {
    return (
      <>
        <label htmlFor="checkbox" className="toggler">
            <input type="checkbox" id="checkbox" onClick={this.change_theme}/>
            {/* <input type="checkbox" id="checkbox" onClick="change_theme()"/> */}
             <span className="ball"></span>
            <i className="ri-sun-line sun">🔆</i>
            <i className="ri-moon-line moon">🌙</i>
        </label>

      </>
    )
  }
}
