import React from "react";
import { ActorRatingsContext } from "../../../actorRatings/actorRatingsProvider";
import { grommet, Card, Box } from "grommet";


export const ActorRatingsCard = ({actors}) => {
    if (actors.userId === +localStorage.activeUser){
    }


      return(
  
    <div className="buzzRoastBox">
        <Card width="large" height="medium" margin="medium">
            <h2 class="quiz-question">Q1: Which actor is your favorite out of this group? </h2>

            <div class="quiz-answer" ><img alt="different coffee roast types"  src={actors.url}/></div>
        </Card>
    </div>
      )
  }