import React, { useState, createContext } from "react"

export const CoffeeContext = createContext()


export const CoffeeProvider = (props) => {

    const [coffee, setCoffee] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    

    const getCoffee = () => {
        return fetch("http://localhost:8088/coffee?_expand=coffeeTypes&_expand=flavors&_expand=actorRatings")
        .then(res => res.json())
        .then(setCoffee)
    }

    const addCoffee = CoffeeObj => {
        return fetch("http://localhost:8088/coffee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(CoffeeObj)
        })
        .then(response => response.json())
    }

    const updateCoffee = coffee => {
        return fetch(`http://localhost:8088/coffee/${coffee.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(coffee)
        })
          .then(getCoffee)
    }

    const getCoffeeById = (id) => {
        return fetch(`http://localhost:8088/coffee/${id}?_expand=coffeeTypes&_expand=flavors&_expand=actorRatings`)
            .then(res => res.json())
    }

    const deleteCoffee = coffeeId => {
        return fetch(`http://localhost:8088/coffee/${coffeeId}`, {
            method: "DELETE"
        })
            .then(getCoffee)
    }
    return (
        <CoffeeContext.Provider value={{ 
            coffee, addCoffee, getCoffee, deleteCoffee, updateCoffee, getCoffeeById, searchTerms, setSearchTerms
        }}>
            {props.children}
        </CoffeeContext.Provider>
    )
}