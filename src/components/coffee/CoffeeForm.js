import React, { useContext, useEffect, useState } from "react"
import { CoffeeContext } from "./CoffeeProvider"
import { useNavigate, useParams }  from 'react-router-dom';
import { grommet } from "grommet";
import { Box, Button, DropButton, Heading, Text } from 'grommet';
import { Close } from 'grommet-icons';


export const CoffeeForm = () => {
    const { addCoffee, getCoffeeById, updateCoffee } = useContext(CoffeeContext)
    

    const [coffee, setCoffee] = useState(
        {
            userId: +localStorage.getItem("brew_User"),
            name: "",
            brand: "",
            coffeeTypes: "",
            flavors: "",
            actorRatings: "",
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
                    coffeeTypesId: parseInt(coffee.coffeeTypesId),
                    flavorsId: parseInt(coffee.flavorsId),
                    actorRatingsId: parseInt(coffee.actorRatingsId),
                    description: coffee.description
                    
                })
                .then(() => navigate(`/coffee/detail/${coffee.id}`))
            } else {
                addCoffee ({
                    userId: +localStorage.getItem("brew_User"),
                    name: coffee.name,
                    brand: coffee.brand,
                    coffeeTypesId: parseInt(coffee.coffeeTypesId),
                    flavorsId: parseInt(coffee.flavorsId),
                    actorRatingsId: parseInt(coffee.actorRatingsId),
                    description: coffee.description
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
                    <label htmlFor="coffeeBrand">Coffee brand: </label>
                    <input type="text" name="brand" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Brand of coffee" defaultValue={coffee.brand}/>
                </div>
            </fieldset>

        {/* <fieldset>
          <div className="form-group">
            <label htmlFor="typesofcoffee"> Coffee Roast: </label>
            <select value={coffee.coffeeTypesId} name="typeOfCoffeeId" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a Roast</option>
              {coffee.typesOfCoffee.map(t => (
                <option key={t.id} value={t.id}>
                  {t.type}
                </option>
              ))}
            </select>
          </div>
        </fieldset> */}

        

            <fieldset>
                <div className="form-group">
                    <label htmlFor="coffeeName">Coffee name: </label>
                    <input type="text" name="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Name of coffee" defaultValue={coffee.name}/>
                </div>
            </fieldset>
            
            <fieldset>
                <div className="form-group">
                <label htmlFor="typesofcoffee"> Coffee Roast: </label>
                <select value={coffee.coffeeTypesId} name="typeOfCoffeeId" className="form-control" onChange={handleControlledInputChange}>
                    <option value="0">Select a Roast</option>
                    <option value="light">Light Roast</option>
                    <option value="medium">Medium Roast</option>
                    <option value="dark">Dark Roast</option>
                </select>
                </div>
            </fieldset>

            <fieldset>
          <div className="form-group">
            <label htmlFor="tasteOfCoffee"> How does it taste? </label>
            <select value={coffee.coffeeTypesId} name="taste_notes" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a taste</option>
              <option value="earthy">Earthy</option>
              <option value="Woody">Woody</option>
              <option value="Chocolaty">Chocolaty</option>
              <option value="Fruity">Fruity</option>
              <option value="Nutty">Nutty</option>
            </select>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="actors"> Actor Comparison: </label>
            <select value={coffee.actorRatingsId} name="typeOfCoffeeId" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select an actor Comparison</option>
              <option value=""></option>
              <option value="Tom Hanks">Tom Hanks</option>
              <option value="Steven Seagal">Steven Seagal</option>
              <option value="Karl Urban">Karl Urban</option>
            </select>
          </div>
        </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="actorUrl">Url of image here: </label>
                    <input type="text" name="url" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="image address here" defaultValue={coffee.actorRatings.url}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="coffeeDescription">Coffee description: </label>
                    <input type="text" name="description" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="compare actor to coffee here" defaultValue={coffee.description}/>
                </div>
            </fieldset>

          <button primary label="Save Coffee Review"className="formbutton"
            disabled={isLoading}
            onClick={event => {
              event.preventDefault() 
              handleSaveCoffeeReview()
            }}>
          {coffeeId ? <>Save Edited Coffee Review</> : <>Save Coffee Review</>}</button>
        </form>
      )
  }