import React from "react";
import { Image } from "grommet";
import { Link } from "react-router-dom"


export const TypeCard = ({  typeOfCoffee }) => {
    if (typeOfCoffee.userId === +localStorage.activeUser){
    }
    return (
    <section className="typeOfCoffee-review">
        <h3><Link to={`/typeOfCoffee/detail/${typeOfCoffee.id}`}>{typeOfCoffee.type}
            </Link> from</h3>
    </section>
)}