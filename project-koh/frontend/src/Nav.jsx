import React from "react";

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let box = props.topics[i];
    lis.push(
      //key를 주는 이유는 이 반복문 안에서 props의 값이 유니크 해야하기 때문이다.
      <li key={box.id}>
        <a href={"/read/" + box.id}>{box.title}</a>
      </li>
    );
  }
  return <ol>{lis}</ol>;
}
export default Nav;
