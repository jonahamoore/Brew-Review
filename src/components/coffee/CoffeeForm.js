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
        })

    const { coffeeId } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    const handleControlledInputChange = (event) => {

        const newCoffeeReview = {...coffee}

        newCoffeeReview[event.target.name] = event.target.value

        setCoffee(newCoffeeReview)
    }

    const handleSaveCoffeeReview = () => {
        if (coffee.name === "") {
            window.alert("Please fill out entire form")
        } else {
            setIsLoading(true);
            if (coffeeId){
                updateCoffee({
                    userId: +localStorage.getItem("brew_User"),
                    id: +coffee.id,
                    name: coffee.name,
                    store: coffee.store,
                    date: coffee.date,
                    temp: coffee.temp,
                    coffeetype: coffee.coffeetype,
                    brewing_method: coffee.brewing_method,
                    rating: coffee.rating
                })
                .then(() => navigate(`/coffee/detail/${coffee.id}`))
            } else {
                addCoffee ({
                    userId: +localStorage.getItem("brew_User"),
                    name: coffee.name,
                    store: coffee.store,
                    date: coffee.date,
                    temp: coffee.temp,
                    coffeetype: coffee.coffeetype,
                    brewing_method: coffee.brewing_method,
                    rating: coffee.rating
                })
                .then(() => navigate("/coffee"))
            }
        }
    }

    useEffect(() => {
        if (coffeeId){
            getCoffeeById(coffeeId)
            .then(coffee => {
                setCoffee(coffee)
                setIsLoading(false)
            })
        } else {
            setIsLoading(false)
        }
    }, [])

    return (
        <form className="coffeeForm">
          <h2 className="coffee__title">New Coffee Review</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="coffeeName">Coffee name:</label>
                    <input type="text" name="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Name of coffee" defaultValue={coffee.name}/>
                </div>
            </fieldset>

            <fieldset>
            <div className="form-group">
              <label htmlFor="store">Purchase location:</label>
              <input type="text" name="store" onChange={handleControlledInputChange} className="form-control" placeholder="Enter location of place purchased from here" defaultValue={coffee.store}/>
              </div>
            </fieldset>
          <button primary label="Save Coffee Review"className="formbutton"
            disabled={isLoading}
            onClick={event => {
              event.preventDefault() 
              handleSaveCoffeeReview()
            }}>
          {coffeeId ? <>Edit Coffee Review</> : <>Save Cofee Review</>}</button>
        </form>
      )
  }