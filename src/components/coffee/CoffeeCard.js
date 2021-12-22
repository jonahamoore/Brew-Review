import React from "react";
import { Image } from "grommet";
import { Link } from "react-router-dom"
import "./BrewReview.css"

export const CoffeeCard = ({ coffee, typeOfCoffee, flavor, actorRating }) => {
    if (coffee.userId === +localStorage.activeUser){
    }
    return (
    <section className="coffee-review">
        <h3><Link to={`/coffee/detail/${coffee.id}`}>{coffee.name}
            </Link> from</h3>
        <div className="coffeeBrand">{coffee.brand}</div>
        <div className="typeOfCoffee">{typeOfCoffee.type}</div>
        <div className="flavor">{flavor.taste_notes}</div>
        <div className="rating">{actorRating.actorName}</div>
        {/* <Image source={coffee.url}></Image> */}
        <div className="coffeeDescription">{coffee.description}</div>
    </section>
)}