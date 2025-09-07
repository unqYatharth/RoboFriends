import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div className="container">
      {
        robots.length > 0 ?
          (
            robots.map((robot) => {
              return (
                <Card
                  key={robot.id}
                  id={robot.id}
                  name={robot.name}
                  email={robot.email}
                />
              )
            })
          ) : (<h2 style={{color: "#fff"}}>No results found</h2>)
      }
    </div>
  )
}

export default CardList;