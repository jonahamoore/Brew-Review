import React, { useContext, useEffect, useState } from "react"
import { CoffeeContext } from "./CoffeeProvider"
import { CoffeeTypesContext } from "../../coffeeTypes/CoffeeTypesProvider";
import { FlavorsContext } from "../../flavor/FlavorsProvider";
import { ActorRatingsContext } from "../../actorRatings/actorRatingsProvider";
import { useNavigate, useParams }  from 'react-router-dom';
import { grommet } from "grommet";
import { Box, Button, DropButton, Heading, Text } from 'grommet';
import { Close } from 'grommet-icons';


export const CoffeeForm = () => {
    const { addCoffee, getCoffeeById, updateCoffee } = useContext(CoffeeContext)
    const { coffeeTypes, getCoffeeTypes } = useContext(CoffeeTypesContext)
    const { flavors, getFlavors } = useContext(FlavorsContext)
    const { actorRatings, getActorRatings } = useContext(ActorRatingsContext)

    

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
      getCoffeeTypes().then(getActorRatings).then(getFlavors)
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
                    <label htmlFor="coffeeName">Coffee name: </label>
                    <input type="text" name="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Name of coffee" defaultValue={coffee.name}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="coffeeBrand">Coffee brand: </label>
                    <input type="text" name="brand" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Brand of coffee" defaultValue={coffee.brand}/>
                </div>
            </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="typesofcoffee"> Coffee Roast: </label>
            <select value={coffee.coffeeTypesId} name="coffeeTypesId" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a Roast</option>
              {coffeeTypes.map(t => (
                <option key={t.id} value={t.id}>
                  {t.type}
                </option>
              ))}
            </select>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="flavor">Flavor: </label>
            <select value={coffee.flavorsId} name="flavorsId" id="coffeeFlavor" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a flavor</option>
              {flavors.map(f => (
                <option key={f.id} value={f.id}>
                    {f.taste_notes}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        

    <fieldset>
          <div className="form-group">
            <label htmlFor="actorRatings">Actor to Coffee Comparison: </label>
            <select value={coffee.actorRatingsId} name="actorRatingsId" id="coffeeActorRatings" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select an Actor</option>
              {actorRatings.map(a => (
                <option key={a.id} value={a.id}>
                  {a.actorName}
                </option>
              ))}
            </select>
          </div>
    </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="actorUrl">Url of image here: </label>
                    <input type="text" name="url" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Image address here" defaultValue={coffee.actorRatings.url}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="coffeeDescription">Coffee description: </label>
                    <input type="text" name="description" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Compare actor to coffee here" defaultValue={coffee.description}/>
                </div>
            </fieldset>

          <button primary label="Save Coffee Review"className="formbutton"
            disabled={isLoading}
            onClick={event => {
              event.preventDefault() 
              handleSaveCoffeeReview()
            }}>
          {coffeeId ? <>Save Edited Coffee Review</> : <>Save Coffee Review</>}
          </button>

        </form>
      )
  }