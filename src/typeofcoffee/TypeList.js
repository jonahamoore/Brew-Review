import React, { useContext, useEffect } from "react";
import { TypeContext } from "./TypeOfCoffeeProvider";
import { TypeCard } from "./TypeCard";
import { useNavigate } from "react-router-dom"
import { grommet, Button, Box } from "grommet";

export const TypeList = () => {
    const { type, getType } = useContext(TypeContext)

    useEffect(() => {
        getType()
    }, [])

    return (
        <>
          <div className="news">
            { type.map(type => {
                return <typeCard key={type.id} type={type}/>
              })
            }
          </div>
        </>
        )
}