import React from "react";
import { CardFooter, CardHeader, Image } from "grommet";
import { Link } from "react-router-dom"
import { grommet, Box, Card, Button, Heading, Text, Paragraph, CardBody, } from "grommet";

export const CoffeeTypesCard = ({ coffeeTypes  }) => {
    if (coffeeTypes.userId === +localStorage.activeUser){
    }

    
    const handleSelect = () => {
        
    }

    return (
<>
        <h2 class="quiz-question">Q1: Which coffee roast do you prefer?</h2>
        <div>
        
        <div data-quiz-question="1">
          <div class="quiz-answer" onClick={handleSelect} ><img alt="different coffee roast types" src={coffeeTypes.typeImage}/></div>
           onClick={handleSelect} 
        </div>
        </div>
</>
)}