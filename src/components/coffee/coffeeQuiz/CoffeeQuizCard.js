import React, { useState } from "react";
import { CoffeeQuiz } from "./CoffeeQuiz";
import { CardFooter, CardHeader, Image } from "grommet";
import { Link } from "react-router-dom"
import { grommet, Box, Card, Button, Heading, Text, Paragraph, CardBody, } from "grommet";
import "./coffeeQuizStyling.css"

export const CoffeeTypesCard = ({ coffeeTypes, functionToChangeCoffeeTypeState }) => {
    if (coffeeTypes.userId === +localStorage.activeUser) {
    }



    

    return (
        <>
            <div>
                <div>
                    <h2 className="quiz-question">Q1: Which coffee roast do you prefer?</h2>

                    <div className="quiz-answer"><img alt="different coffee roast types" onClick={() => functionToChangeCoffeeTypeState(coffeeTypes)}
                        src={coffeeTypes.typeImage} /></div>
                </div>
            </div>
        </>
    )
}