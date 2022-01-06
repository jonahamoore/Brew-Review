import React from "react";
import { ActorRatingsContext } from "../../../actorRatings/actorRatingsProvider";


export const ActorRatingsCard = ({actors}) => {
    if (actors.userId === +localStorage.activeUser){
    }
      return(
  
    <div>
        <select>
            <option value="Tom Hanks"><img src={actors.url}></img></option>
        </select>
    </div>
      )
  }

//   <div className="actorPics"><img src={coffee.actorRatings.url} alt="Keanu Reeves" height="100px"/></div>