import React, { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "./CoffeeProvider";
import { ActorRatingsContext } from "../../actorRatings/actorRatingsProvider";
import { FlavorsContext } from "../../flavor/FlavorsProvider";
import { CoffeeTypesContext } from "../../coffeeTypes/CoffeeTypesProvider";
import { CoffeeCard } from "./CoffeeCard";
import { useNavigate } from "react-router-dom"
import { grommet, Button, Box } from "grommet";
import "./BrewReview.css"


export const CoffeeList = () => {
  const { coffee, getCoffee, searchTerms } = useContext(CoffeeContext)


  const [coffeesToPrint, setCoffeesToPrint] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    getCoffee()
  }, [])

  useEffect(() => {
    if (searchTerms !== "") {

      // const subset = []

      // for(let i = 0; i < coffee.length; i++){
      //   console.log("this is our current coffee we're checking in the filter:", coffee[i])
      //   if(coffee[i].name.toLowerCase().includes(searchTerms.toLowerCase()) || ){
      //     subset.push(coffee[i])

      //   }
      // }
      
      const subset = coffee.filter(coffeeObj => coffeeObj.name.toLowerCase().includes(searchTerms.toLowerCase()) || coffeeObj.brand.toLowerCase().includes(searchTerms.toLowerCase()) ||coffeeObj.coffeeTypes.type.toLowerCase().includes(searchTerms.toLowerCase())||coffeeObj.flavors.taste_notes.toLowerCase().includes(searchTerms.toLowerCase())||coffeeObj.actorRatings.actorName.toLowerCase().includes(searchTerms.toLowerCase()))
      setCoffeesToPrint(subset)

    } else {
      setCoffeesToPrint(coffee)
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
        {coffeesToPrint.map(coffee => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />
        })
        }
      </div>

    </>
  )
}



