import React, { useState } from "react";
import { CoffeeQuiz } from "./CoffeeQuiz";
import { CardFooter, CardHeader, Image } from "grommet";
import { Link } from "react-router-dom"
import { grommet, Box, Card, Button, Heading, Text, Paragraph, CardBody, } from "grommet";
import "./coffeeQuiz.css"

export const CoffeeTypesCard = ({ coffeeTypes, functionToChangeCoffeeTypeState }) => {
    if (coffeeTypes.userId === +localStorage.activeUser) {
    }



    // const handleAnswerSelections = () => {
    // //     if () {
    // // } else {
    //     console.log("you clicked me")
    // // }

    return (
        <>
            <div className="buzzRoastBox">
                <Card width="large" height="medium" margin="medium">
                    <h2 class="quiz-question">Q1: Which coffee roast do you prefer?</h2>

                    <div class="quiz-answer"><img alt="different coffee roast types" onClick={() => functionToChangeCoffeeTypeState(coffeeTypes)}
                        src={coffeeTypes.typeImage} /></div>
                </Card>
            </div>
        </>
    )
}