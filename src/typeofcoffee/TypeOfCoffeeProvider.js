import React, { useState, createContext } from "react"

export const TypeContext = createContext()

export const TypeProvider = (props) => {

    const [type, setType] = useState([])

    const getType = () => {
        return fetch("http://localhost:8088/typeOfCoffee")
        .then(res => res.json())
        .then(setType)
    }

    const addType = TypeObj => {
        return fetch("http://localhost:8088/typeOfCoffee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(TypeObj)
        })
        .then(response => response.json())
    }

    return (
        <TypeContext.Provider value={{ 
            type, getType, addType
        }}>
            {props.children}
        </TypeContext.Provider>
    )
}