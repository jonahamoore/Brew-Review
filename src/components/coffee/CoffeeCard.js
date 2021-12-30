import React from "react";
import { CardHeader, Image } from "grommet";
import { Link } from "react-router-dom"
import "./BrewReview.css"
import { grommet, Box, Card } from "grommet";

export const CoffeeCard = ({ coffee }) => {
    if (coffee.userId === +localStorage.activeUser){
    }
    return (
<Box align="center" direction="row" justify="center" pad="small">
    <Card height="medium" width="medium" background="#FCEFEE" 
        border={{color: '#481D24', size: 'medium'}} pad="small">
        <CardHeader className="coffee-review"><Link to={`/coffee/detail/${coffee.id}`}><br /><strong>Coffee Name:</strong> {coffee.name}
            </Link></CardHeader>
        <div className="coffeeBrand"><br /><strong>Brand:</strong> {coffee.brand}</div>
        <div className="type_OfCoffee"><strong>Roast type:</strong> {coffee.coffeeTypes.type}</div>
        <div className="flavor"> <strong>Flavor:</strong> {coffee.flavors.taste_notes}</div>
        <div className="rating"><strong>Actor:</strong>{coffee.actorRatings.actorName}</div>
        <div className="actorPics"><img src={coffee.actorRatings.url} alt="Keanu Reeves" height="100px"/></div>
        <div className="coffeeDescription"><strong> Description:</strong> {coffee.description}<br/></div>
    </Card>
</Box>    
)}
