import React from "react";
import './Card.css'

const Card = ({ id, name, email }) => {
  return (
    <div className="cardContainer">
      <img src={`https://robohash.org/${id}`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;