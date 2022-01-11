import React from "react";
import { grommet, Card, Box, Heading, Button } from "grommet";
import "./BrewReview.css"


export const CoffeeFlavorsCard = ({coffeeFlavors, functionToChangeCoffeeFlavorsState, highlighted}) => {
    if (coffeeFlavors.userId === +localStorage.activeUser){
    }

    
    

      return(
  
    
    <div>
        <div>
            <h2 className="quiz-question">Q1: Which flavor do you prefer? </h2>

            <div><img alt="different flavors of food" className={highlighted === true ? "highlighted" : "normal-image"}  onClick={() => functionToChangeCoffeeFlavorsState(coffeeFlavors)} src={coffeeFlavors.flavorImages}/></div>
        </div>
    </div>
      )
  }