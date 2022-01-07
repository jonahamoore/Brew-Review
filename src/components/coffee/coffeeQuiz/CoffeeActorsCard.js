import React from "react";
import { ActorRatingsContext } from "../../../actorRatings/actorRatingsProvider";
import { grommet, Card, Box } from "grommet";
import "./coffeeQuizStyling.css"


export const ActorRatingsCard = ({actors, functionToChangeActorState}) => {
    if (actors.userId === +localStorage.activeUser){
    }


      return(
  
    <div>
        <div>
            <h2 className="quiz-question">Q1: Which actor is your favorite out of this group? </h2>

            <div className="quiz-answer" ><img alt="different coffee roast types" onClick={() => functionToChangeActorState(actors)}   src={actors.url}/></div>
        </div>
    </div>
      )
  }