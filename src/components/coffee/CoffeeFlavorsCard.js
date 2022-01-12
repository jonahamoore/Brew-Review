import React from "react";
import { grommet, Card, Box, Heading, Button } from "grommet";
import "./BrewReview.css"


export const CoffeeFlavorsCard = ({coffeeFlavors, functionToChangeCoffeeFlavorsState, highlighted}) => {
    if (coffeeFlavors.userId === +localStorage.activeUser){
    }

      return(
  
    <>
    <div className="quizBox">

        <div>
            <div className="quiz-answer"><img alt="different flavors of food" height="400px" width="400px"  className={highlighted === true ? "highlighted" : "normal-image"}  onClick={() => functionToChangeCoffeeFlavorsState(coffeeFlavors)} src={coffeeFlavors.flavorImages}/></div>
        </div>
    </div>
    </>
      )
  }