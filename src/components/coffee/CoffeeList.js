import React, { useContext, useEffect } from "react";
import { CoffeeContext } from "./CoffeeProvider";
import { CoffeeCard } from "./CoffeeCard";
import { useNavigate } from "react-router-dom"
import { grommet, Button, Box } from "grommet";
import { TypeContext } from "../../typeofcoffee/TypeOfCoffeeProvider";

export const CoffeeList = () => {
    const {coffee, getCoffee} = useContext(CoffeeContext)
    const { type, getType } = useContext(TypeContext)

    useEffect(() => {
        getType()
        .then(getCoffee)
    }, [])

    const navigate = useNavigate();

    return (
        <>
          <h1 className="Coffee-Title">Coffee Reviews</h1>
      
          <Button color="#704E33" label="New Coffee Review" onClick={() => navigate("/coffee/create")}>
                  </Button>
          <div className="coffee">
            { coffee.map(coffee => {
                const roasts = type.find(t => t.id === +coffee.typeOfCoffeeId)
                return <CoffeeCard key={coffee.id} coffee={coffee} type={roasts}/> 
              })
            }
          </div>
        </>
        )
      }

    

