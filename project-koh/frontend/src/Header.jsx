import React from "react";

function Header(props) {
  return (
    <h1>
      <a href="/"> {props.title}</a>
    </h1>
  );
}
export default Header;
