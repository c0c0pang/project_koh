import React from "react";

function Header(props) {
  return (
    <h1>
      <a href="/" onClick={ (event)=>{
        event.preventDefault();
        props.onChangMode();
      } }> {props.title}</a>
    </h1>
  );
}
export default Header;
