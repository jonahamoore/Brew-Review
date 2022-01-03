import React, { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "./CoffeeProvider";
import { ActorRatingsContext } from "../../actorRatings/actorRatingsProvider";
import { FlavorsContext } from "../../flavor/FlavorsProvider";
import { CoffeeTypesContext } from "../../coffeeTypes/CoffeeTypesProvider";
import { CoffeeCard } from "./CoffeeCard";
import { useNavigate } from "react-router-dom"
import { grommet, Button, Box } from "grommet";


export const CoffeeList = () => {
    const {coffee, getCoffee, searchTerms} = useContext(CoffeeContext)
    const {coffeeTypes, getCoffeeTypes} = useContext(CoffeeTypesContext)
    const {actorRatings, getActorRatings} = useContext(ActorRatingsContext)
    const {flavors, getFlavors} = useContext(FlavorsContext)
    

    const [ filteredCoffee, setFiltered ] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
      getCoffee()
      .then(getFlavors)
      .then(getActorRatings)
      .then(getCoffeeTypes)
    }, [])

    useEffect(() => {
      if (searchTerms !== "") 
      {
        const subset = coffee.filter(coffee => coffee.name.toLowerCase().includes(searchTerms.toLowerCase()))
        setFiltered(subset)
      }
      else if(searchTerms !== "")
      {
          const secondSubset = coffee.filter(coffee => coffee.brand.toLowerCase().includes(searchTerms.toLowerCase()))
          setFiltered(secondSubset)
      }
      else 
      {
        setFiltered(coffee)
      }
    }, [searchTerms, coffee])




    return (
        <>
          <h1 className="Coffee-Title">Coffee Reviews</h1>

          <div className="newReviewButtonBox">
          <Button margin="small" align="center" color="#704E33" label="New Coffee Review" onClick={() => navigate("/coffee/create")}>
                  </Button>
          </div>

          
          <div className="coffee">
            { filteredCoffee.map(coffee => {
                return <CoffeeCard key={coffee.id} coffee={coffee} /> 
              })
            }
          </div>
          
        </>
        )
      }

    

