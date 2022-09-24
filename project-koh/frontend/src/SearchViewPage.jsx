import React from 'react'
import {useParams} from 'react-router-dom'
export default function SearchViewPage() {
  const Params = useParams();
  return (
    <div>{Params.name}</div>
  )
}
