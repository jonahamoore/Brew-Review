import React, { useState, createContext } from "react"

export const CoffeeQuizzesContext = createContext()

export const CoffeeQuizzesProvider = (props) => {
    const [coffeeQuizzes, setCoffeeQuizzes, ] = useState([])

    const getCoffeeQuizzes = () => {
        return fetch("http://localhost:8088/coffeeQuizzes")
        .then(res => res.json())
        .then(setCoffeeQuizzes)
    }

    return (
        <CoffeeQuizzesContext.Provider value={{ 
            coffeeQuizzes, getCoffeeQuizzes 
        }}>
            {props.children}
        </CoffeeQuizzesContext.Provider>
    )
}