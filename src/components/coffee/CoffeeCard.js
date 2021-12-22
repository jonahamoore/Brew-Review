import React from "react";
import { Image } from "grommet";
import { Link } from "react-router-dom"
import "./BrewReview.css"
import { grommet, Box } from "grommet";

export const CoffeeCard = ({ coffee, typeOfCoffee, flavor, actorRating }) => {
    if (coffee.userId === +localStorage.activeUser){
    }
    return (
    <Box className="CoffeeReviewCard"border={{color: '#481D24', size: 'medium'}} pad="xsmall">
        <h3 className="coffee-review"><Link to={`/coffee/detail/${coffee.id}`}><br />Coffee Name: {coffee.name}
            </Link> from</h3>
        <div className="coffeeBrand"><br />Brand: {coffee.brand}</div>
        {/* <div className="typeOfCoffeeId">{typeOfCoffee.type}</div> */}
        {/* <div className="flavor">{flavor.taste_notes}</div>
        <div className="rating">{actorRating.actorName}</div> */}
        {/* <Image source={coffee.url}></Image> */}
        <div className="coffeeDescription">Description: {coffee.description}<br/></div>
    </Box>
)}
