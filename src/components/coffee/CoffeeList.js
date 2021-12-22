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
          <h1 className="Coffee-Title">Coffee Review</h1>
      
          <Button color="#E3D7CA" label="New Coffee Review" onClick={() => navigate("/coffee/create")}>
                  </Button>
          <div className="coffee">
            { coffee.map(coffee => {
                return <CoffeeCard key={coffee.id} coffee={coffee}/>
              })
            }
          </div>
        </>
        )
      }

    

