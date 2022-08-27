import React from 'react'
import { useState } from 'react';
//update 는 create 와 read 의 기능이 모두 들어가 있으며 value의 값을 상시 바꿀려면 state 를 이용해야 한다.
function Update(props) {
    const [title,setTitle]=useState(props.title);
    const [body,setBody]=useState(props.body);
  return (
    <article>
        <h2>Update</h2>
        <form onSubmit={event=>{
            event.preventDefault(); 
            const title=event.target.title.value;
            const body=event.target.body.value;
            props.onUpdate(title,body);
        }}>
            <p><input type="text" name="title" placeholder='title' value={title} onChange={event=>{
                setTitle(event.target.value);
            }}/></p>
            <p><textarea name="body" placeholder='body' value={body} onChange={event=>{
                setBody(event.target.value);
            }}></textarea> </p>
            <p><input type="submit" value="Update" /></p>
        </form>
    </article>
  )
}
export default Update;