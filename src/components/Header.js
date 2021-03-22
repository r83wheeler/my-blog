import React from 'react';

function Header(props) {

  if(props.Electrician){
   console.log("he is an electrician")
  }else {
    console.log("he is not an electrician")
  }
    console.log(props)
    return(
      <React.Fragment>
      <h1>Hello {props.name}</h1>
      <h3>{props.name} is {props.age} years old</h3>
      
      </React.Fragment>
    )
  }

  export default Header; 