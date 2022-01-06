import React from "react";
import { grommet, Card, Box, Heading, Button } from "grommet";


export const CoffeeFlavorsCard = ({coffeeFlavors}) => {
    if (coffeeFlavors.userId === +localStorage.activeUser){
    }

    
    

      return(
  
    
    <div className="buzzRoastBox">
        <Card width="large" height="medium" margin="medium">
            <h2 class="quiz-question">Q1: Which flavor do you prefer? </h2>

            <div class="quiz-answer" ><img alt="different coffee roast types" src={coffeeFlavors.flavorImages}/></div>
        </Card>
    </div>
      )
  }