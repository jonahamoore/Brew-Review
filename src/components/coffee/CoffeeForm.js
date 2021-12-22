import React, { useContext, useEffect, useState } from "react"
import { CoffeeContext } from "./CoffeeProvider"
import { useNavigate, useParams }  from 'react-router-dom';
import { TypeContext } from "../../typeofcoffee/TypeOfCoffeeProvider";
import { grommet } from "grommet";
import { Box, Button, DropButton, Heading, Text } from 'grommet';
import { Close } from 'grommet-icons';


export const CoffeeForm = () => {
    const [ addCoffee, updateCoffee, getCoffeeById] = useContext(CoffeeContext)
    const { type, getType } = useContext(TypeContext)

    const [coffee, setCoffee] = useState(
        {
            userId: +localStorage.getItem("brew_User"),
            name: "",
            brand: "",
            typeOfCoffee: "",
            // flavor: "",
            // actorRating: "",
            // url: "",
            description: "",
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
                    brand: coffee.brand,
                    typeOfCoffeeId: parseInt(coffee.typeOfCoffeeId),
                    // flavorId: parseInt(coffee.flavorId),
                    // actorRatingId: parseInt(coffee.actorRatingId),
                    url: coffee.url,
                    description: coffee.description
                    
                })
                .then(() => navigate(`/coffee/detail/${coffee.id}`))
            } else {
                addCoffee ({
                    userId: +localStorage.getItem("brew_User"),
                    name: coffee.name,
                    brand: coffee.brand,
                    typeOfCoffeeId: parseInt(coffee.typeOfCoffeeId),
                    // flavorId: parseInt(coffee.flavorId),
                    // actorRatingId: parseInt(coffee.actorRatingId),
                    url: coffee.url,
                    description: coffee.description
                })
                .then(() => navigate("/coffee"))
            }
        }
    }

    useEffect(() => {
        getType().then(() => {
        if (coffeeId){
            getCoffeeById(coffeeId)
            .then(coffee => {
                setCoffee(coffee)
                setIsLoading(false)
            })
        } else {
            setIsLoading(false)
        }
        })
    }, [])

    return (
        <form className="coffeeForm">
          <h2 className="coffee__title">New Coffee Review</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="coffeeBrand">Coffee brand:</label>
                    <input type="text" name="brand" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Brand of coffee" defaultValue={coffee.brand}/>
                </div>
            </fieldset>

            <fieldset>
          <div className="form-group">
            <label htmlFor="typesofcoffee"> Coffee Roast: </label>
            <select value={coffee.typeOfCoffeeId} name="typeOfCoffeeId" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a Roast</option>
              {type.map(t => (
                <option key={t.id} value={t.id}>
                  {t.type}
                </option>
              ))}
            </select>
          </div>
        </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="coffeeName">Coffee name:</label>
                    <input type="text" name="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Name of coffee" defaultValue={coffee.name}/>
                </div>
            </fieldset>
            
        

            <fieldset>
                <div className="form-group">
                    <label htmlFor="coffeeUrl">Coffee URL:</label>
                    <input type="text" name="url" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="picture of actor url here" defaultValue={coffee.url}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="coffeeDescription">Coffee description:</label>
                    <input type="text" name="description" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="make your coffee to actor case comparison here" defaultValue={coffee.description}/>
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