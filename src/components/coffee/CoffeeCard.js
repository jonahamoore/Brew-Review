import React from "react";
import { Link } from "react-router-dom"
import "./BrewReview.css"

export const CoffeeCard = ({ coffee }) => {
    if (coffee.userId === +localStorage.activeUser){
    }
    return (
    <section className="coffee-review">
        <h3><Link to={`/coffee/detail/${coffee.id}`}>{coffee.name}
            </Link></h3>
        <div className="">{coffee.name}</div>
        <div className="">{coffee.store}</div>
        <div className="">{coffee.date}</div>
        <div className="">{coffee.temp}</div>
        <div className="">{coffee.coffeeType}</div>
        <div className="">{coffee.brewing_method}</div>
        <div className=""><h4>{coffee.rating}</h4></div>
    </section>
)}