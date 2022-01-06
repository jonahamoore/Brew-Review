import React from "react";
import { grommet, Card, Box, Heading, Button } from "grommet";


export const CoffeeFlavorsCard = ({coffeeFlavors}) => {
    if (coffeeFlavors.userId === +localStorage.activeUser){
    }
      return(
  
    
    <div>
        <select>
        
            <option value="Tom Hanks"><img src={coffeeFlavors.flavorImages}/></option>
        </select>
    </div>
    
    
      )
  }