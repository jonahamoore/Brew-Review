import React, { useState, createContext } from "react"

export const FlavorsContext = createContext()

export const FlavorsProvider = (props) => {
    const [flavors, setFlavors] = useState([])

    const getFlavors = () => {
        return fetch("http://localhost:8088/flavors")
        .then(res => res.json())
        .then(setFlavors)
    }

    const addFlavors = FlavorsObj => {
        return fetch("http://localhost:8088/flavors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(FlavorsObj)
        })
        .then(response => response.json())
    }

    const updateFlavors = flavors => {
        return fetch(`http://localhost:8088/flavors/${flavors.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(flavors)
        })
          .then(getFlavors)
    }

    const getFlavorsById = (id) => {
        return fetch(`http://localhost:8088/flavors/${id}`)
            .then(res => res.json())
    }
    return (
        <FlavorsContext.Provider value={{ 
            flavors, addFlavors, getFlavors, updateFlavors, getFlavorsById
        }}>
            {props.children}
        </FlavorsContext.Provider>
    )
}