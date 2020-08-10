import React from "react";
import cards from "../../data/cards_info";
import Card from "../Card/index";


export default (props) => {

  
  
  return (
    <div className="container">
      <div className="row">
        
          {
            cards.map((card, i) => {
              return (
                <Card key={i} image= {card.image} alt={card.alt} title={card.title} description={card.description}/>
              );
            })}
          
       
      </div>
    </div>
  );
  
};

