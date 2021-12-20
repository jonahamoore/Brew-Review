import React, { useContext, useEffect } from "react";
import { CoffeeContext } from "./CoffeeProvider";
import { CoffeeCard } from "./CoffeeCard";
import { useNavigate } from "react-router-dom"

export const CoffeeList = () => {
    const {coffee, getCoffee} = useContext(CoffeeContext)

    useEffect(() => {
        getCoffee()
    }, [])

    const navigate = useNavigate();

    return (
        <>
          <h1 className="Coffee-Title">Coffee Review</h1>
      
          <button onClick={() => navigate("/coffee/create")}>
                      New Coffee Review
                  </button>
          <div className="coffee">
            { coffee.sort((a,b) => new Date(b.date) - new Date(a.date)).map(coffee => {
                return <CoffeeCard key={coffee.id} coffee={coffee}/>
              })
            }
          </div>
        </>
        )
      }

    

