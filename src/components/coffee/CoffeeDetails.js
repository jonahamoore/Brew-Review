import React, { useContext, useEffect, useState } from "react"
import { CoffeeContext } from "./CoffeeProvider"
import "./BrewReview.css"
import { useParams, useNavigate } from "react-router-dom"
import { grommet, Button, Box, Image, Card, CardBody, CardHeader, CardFooter } from "grommet"

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
          
        <section className="CoffeeDetailsCard">
        <div className="detailsCard">
            <Card width="medium" pad="small" margin="small">
            <CardHeader>
              <h2 className="coffee_name">{coffee.name}</h2>
            </CardHeader>
            <CardBody>
              <div className="coffee_brand"> Brand: {coffee.brand}</div>
              <div className="coffee_type">Roast Type: {coffee.coffeeTypes?.type}</div>
              <div className="coffee_flavor"> Flavor: {coffee.flavors?.taste_notes}</div>
              <div className="actorRating"> Actor comparison: {coffee.actorRatings?.name}</div>
              <div className="actorImages"><img src={coffee.actorRatings?.url} alt="Keanu Reeves" height="100px"/></div>
              <div className="coffee_description">{coffee.description}</div>
            </CardBody>
              
                <Button color="#704E33" margin="xsmall" label="Delete Coffee Review"onClick={coffeeDelete}></Button>
                <Button color="#704E33" margin="xsmall" label="Edit" onClick={() => {navigate(`/coffee/edit/${coffee.id}`)}}></Button>

            </Card>
        </div>
        </section>
          )
        }
        