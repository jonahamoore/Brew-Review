import React, { useState, createContext } from "react"

export const CoffeeTypesContext = createContext()

export const CoffeeTypesProvider = (props) => {
    const [coffeeTypes, setCoffeeTypes] = useState([])

    const getCoffeeTypes = () => {
        return fetch("http://localhost:8088/coffeeTypes?_embed=coffee")
        .then(res => res.json())
        .then(setCoffeeTypes)
    }

    const addCoffeeTypes = CoffeeTypesObj => {
        return fetch("http://localhost:8088/coffeeTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(CoffeeTypesObj)
        })
        .then(response => response.json())
    }

    const updateCoffeeTypes = coffeeTypesObject => {
        return fetch(`http://localhost:8088/coffeeTypes/${coffeeTypesObject.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(coffeeTypesObject)
        })
          .then(getCoffeeTypes)
    }

    const getCoffeeTypesById = (id) => {
        return fetch(`http://localhost:8088/coffeeTypes/${id}?_expand=coffeeTypes&_expand=flavors&_expand=actorRatings`)
            .then(res => res.json())
    }

    return (
        <CoffeeTypesContext.Provider value={{ 
            coffeeTypes, addCoffeeTypes, getCoffeeTypes, updateCoffeeTypes, getCoffeeTypesById
        }}>
            {props.children}
        </CoffeeTypesContext.Provider>
    )

}