import React, { useContext, useEffect, useState } from "react"
import { CoffeeContext } from "./CoffeeProvider"
import "./BrewReview.css"
import { useParams, useNavigate } from "react-router-dom"
import { grommet, Button, Box, Image } from "grommet"

export const CoffeeDetails = () => {
    const { getCoffeeById, deleteCoffee } = useContext(CoffeeContext)
  
      const [coffee, setCoffee] = useState({})
  
      const {coffeeId} = useParams();

      const navigate = useNavigate();
      
      const coffeeDelete = () => {
          deleteCoffee(coffee.id)
              .then(() => {
                  navigate("/coffee")
              })
      }

      useEffect(() => {
        console.log("useEffect", coffeeId)
        getCoffeeById(coffeeId)
        .then((response) => {
          setCoffee(response)
        })
        }, [])

        return (
            <section className="Coffee">
              <h3 className="coffee_brand">{coffee.brand}</h3>
              <div className="coffee_name"> Name: {coffee.name}</div>
              <div className="coffee_type">Type of Coffee: {coffee.typeOfCoffee?.type}</div>
              <div className="coffee_flavor"> Flavor: {coffee.flavor?.taste_notes}</div>
              <div className="actorRating"> Actor comparison: {coffee.actorRating?.name}</div>
              <Image src="{coffee.url}" />
              <div className="coffee_description">{coffee.description}</div>
              <Button color="#704E33" label="Delete Coffee Review"onClick={coffeeDelete}></Button>
              <Button color="#704E33" label="Edit" onClick={() => {navigate(`/coffee/edit/${coffee.id}`)}}></Button>
            </section>
          )
        }
        // <div className="url"> {coffee.url}</div>