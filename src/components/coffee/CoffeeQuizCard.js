import React, { useState } from "react";
import { CoffeeQuiz } from "./CoffeeQuiz";
import { CardFooter, CardHeader, Image } from "grommet";
import { Link } from "react-router-dom"
import { grommet, Box, Card, Button, Heading, Text, Paragraph, CardBody, } from "grommet";
import "./BrewReview.css"

export const CoffeeTypesCard = ({ coffeeTypes, functionToChangeCoffeeTypeState, highlighted }) => {
    if (coffeeTypes.userId === +localStorage.activeUser) {
    }

    return (
        <>
        <h2 className="quiz-question">Q1: Which coffee roast do you prefer?</h2>
            <div>
                <div>
                    <div className="quiz-answer"><img alt="different coffee roast types" height="400px" width="400px" className={highlighted === true ? "highlighted" : "normal-image"} onClick={() => functionToChangeCoffeeTypeState(coffeeTypes)}
                        src={coffeeTypes.typeImage} /></div>
                </div>
            </div>
        </>
    )
}