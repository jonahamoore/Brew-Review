import React, { useContext, useEffect } from "react";
import { CoffeeContext } from "./CoffeeProvider";
import { CoffeeCard } from "./CoffeeCard";
import { useNavigate } from "react-router-dom"
import { grommet, Button, Box } from "grommet";


export const CoffeeList = () => {
    const {coffee, getCoffee} = useContext(CoffeeContext)

    useEffect(() => {
      getCoffee()
    }, [])

    const navigate = useNavigate();

    return (
        <>
          <h1 className="Coffee-Title">Coffee Reviews</h1>
      
          <Button color="#704E33" label="New Coffee Review" onClick={() => navigate("/coffee/create")}>
                  </Button>
          <div className="coffee">
            { coffee.map(coffee => {
                return <CoffeeCard key={coffee.id} coffee={coffee} /> 
              })
            }
          </div>
        </>
        )
      }

    

