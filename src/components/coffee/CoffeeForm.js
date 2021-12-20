import React, { useContext, useEffect, useState } from "react"
import { CoffeeContext } from "./CoffeeProvider"
import { useNavigate, useParams }  from 'react-router-dom';

export const CoffeeForm = () => {
    const [ addCoffee, updateCoffee, getCoffeeById] = useContext(CoffeeContext)

    const [coffee, setCoffee] = useState(
        {
            userId: +localStorage.getItem("brew_User"),
            name: "",
            store: "",
            date: "",
            temp: "",
            coffeetype: "",
            brewing_method: "",
            rating: ""
        }
    )
}