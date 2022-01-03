import React, { useContext, useEffect, useState } from "react"
import { CoffeeContext } from "./CoffeeProvider"
import { CoffeeTypesContext } from "../../coffeeTypes/CoffeeTypesProvider";
import { FlavorsContext } from "../../flavor/FlavorsProvider";
import { ActorRatingsContext } from "../../actorRatings/actorRatingsProvider";
import { useNavigate, useParams }  from 'react-router-dom';
import { grommet } from "grommet";
import { Box, Button, DropButton, Heading, Text, Card, CardBody, CardHeader, CardFooter } from 'grommet';
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
    <div className="editFormCard">
    <Card width="medium">
        <form className="coffeeForm">
          <Heading align="center" justify="center" className="coffee__title">New Coffee Review</Heading>

          <fieldset>
                <div className="form-group">
                    <label htmlFor="coffeeName"><h3>Coffee name:</h3> </label>
                    <input type="text" name="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Name of coffee" defaultValue={coffee.name}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="coffeeBrand"><h3>Coffee brand:</h3> </label>
                    <input type="text" name="brand" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Brand of coffee" defaultValue={coffee.brand}/>
                </div>
            </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="typesofcoffee"> <h3>Coffee Roast:</h3> </label>
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
            <label htmlFor="flavor"><h3>Flavor:</h3> </label>
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
            <label htmlFor="actorRatings"><h3>Actor to Coffee Comparison:</h3> </label>
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
                    <label htmlFor="actorUrl"><h3>Url of image here:</h3> </label>
                    <input type="text" name="url" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Image address here" defaultValue={coffee.actorRatings.url}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="coffeeDescription"><h3>Coffee description:</h3> </label>
                    <input type="text" name="description" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Compare actor to coffee here" defaultValue={coffee.description}/>
                </div>
            </fieldset>

          <Button color="#704E33" alignSelf="center" margin="xsmall" label="Save Coffee Review"className="formbutton"
            disabled={isLoading}
            onClick={event => {
              event.preventDefault() 
              handleSaveCoffeeReview()
            }}>
              
          {/* {coffeeId ? <>Save Edited Coffee Review</> : <>Save Coffee Review</>} */}
          </Button>

        </form>
    </Card>
    </div>
      )
  }