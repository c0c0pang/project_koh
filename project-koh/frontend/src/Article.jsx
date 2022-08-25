import React from "react";
function Article(props) {
  return (
    <>
      <h2>{props.title}</h2>
      {props.body}
    </>
  );
}

export default Article;
