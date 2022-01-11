import React from "react";
import { grommet, Card, Box, Heading, Button } from "grommet";
import "./BrewReview.css"


export const CoffeeFlavorsCard = ({coffeeFlavors, functionToChangeCoffeeFlavorsState, brightCard}) => {
    if (coffeeFlavors.userId === +localStorage.activeUser){
    }

      return(
  
    
    <div>
        <div className="quizBox">

            <div className="quiz-answer"><img alt="different flavors of food" className={brightCard === true ? "brightCard" : "normal-image"}  onClick={() => functionToChangeCoffeeFlavorsState(coffeeFlavors)} src={coffeeFlavors.flavorImages}/></div>
        </div>
    </div>
      )
  }