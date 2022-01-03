import React from "react";
import { CardFooter, CardHeader, Image } from "grommet";
import { Link } from "react-router-dom"
import "./BrewReview.css"
import { grommet, Box, Card, Button, Heading, Text, Paragraph, CardBody, } from "grommet";

export const CoffeeCard = ({ coffee }) => {
    if (coffee.userId === +localStorage.activeUser){
    }
    return (
<div className="coffeeCard">
    <Box className="coffeeNameTitle" align="center" direction="row" justify="center" pad="small">
        <Card background="#FCEFEE" width="medium" height="400px"
            border={{color: '#481D24', size: 'medium'}} pad="small">
            <CardHeader align="center" justify="center" className="coffee-review"><Link to={`/coffee/detail/${coffee.id}`}><h2>Coffee Name:  {coffee.name}</h2>
                </Link></CardHeader>
        <Box margin="small">
            <div className="coffeeBrand"><strong>Brand:</strong> {coffee.brand}</div>
            <div className="type_OfCoffee"><strong>Roast type:</strong> {coffee.coffeeTypes.type}</div>
            <div className="flavor"> <strong>Flavor:</strong> {coffee.flavors.taste_notes}</div>
            <div className="rating"><strong>Actor:</strong>{coffee.actorRatings.actorName}</div>
            <div className="actorPics"><img src={coffee.actorRatings.url} alt="Keanu Reeves" height="100px"/></div>
            <div className="coffeeDescription"><strong> Description:</strong> {coffee.description}<br/></div>
        </Box>
        </Card>
    </Box>
</div>
)}







{/* <>
    <div className="coffeeCard">
        <div>
        <Link to={`/coffee/detail/${coffee.id}`}><strong>Coffee Name:</strong> {coffee.name}</Link>
        </div>
        <div className="coffeeBrand">Brand: {coffee.brand}</div>
        <div className="type_OfCoffee"><strong>Roast type:</strong> {coffee.coffeeTypes.type}</div>
        <div className="flavor"> <strong>Flavor:</strong> {coffee.flavors.taste_notes}</div>
        <div className="rating"><strong>Actor:</strong>{coffee.actorRatings.actorName}</div>
        <div className="actorPics"><img src={coffee.actorRatings.url} alt="Keanu Reeves" height="100px"/></div>
        <div className="coffeeDescription"><strong> Description:</strong> {coffee.description}<br/></div>
    </div>
</> */}
