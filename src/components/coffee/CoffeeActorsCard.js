import React from "react";
import { ActorRatingsContext } from "../../actorRatings/actorRatingsProvider";
import { grommet, Card, Box } from "grommet";
import "./BrewReview.css"



export const ActorRatingsCard = ({actors, functionToChangeActorState, highlighted}) => {
    if (actors.userId === +localStorage.activeUser){
    }

      return(
  
    <div>
        <div className="quizBox">

            <div className="quiz-answer" ><img alt="different coffee roast types" height="400px" width="400px" className={ highlighted === true ? "highlighted" : "normal-image"} onClick={() => functionToChangeActorState(actors)}   src={actors.url}/></div>
        </div>
    </div>
      )
  }