import React,{useState} from 'react'
import {SearchForm} from './StyledComponent'
import {useNavigate} from 'react-router-dom'
function SearchList() {
  const [search,setSearch]=useState("");
  const navigate = useNavigate();
  const goPost = (e) => {
    navigate(`${"/Search/"+search}`);
  };
  const onChangeSearch = (e)=>{
    e.preventDefault();
    setSearch(e.target.value);
  }
  return (
    <SearchForm onSubmit={e => {setSearch("");  }}>
          <input type="text" value={search} onChange={onChangeSearch}/>
          <input type="submit" id="Id" onClick={goPost}/>
    </SearchForm>
  )
}

export default SearchList;

