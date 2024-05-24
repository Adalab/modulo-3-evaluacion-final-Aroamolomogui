
import React from "react";
import { Link } from "react-router-dom";

function Details({characterDetail}) {
  return <div>
    <img src= {characterDetail.image} alt="" />
        <h3>{characterDetail.name}</h3>
        <p>{characterDetail.species}</p>
       
  </div>;
}


export default Details;
