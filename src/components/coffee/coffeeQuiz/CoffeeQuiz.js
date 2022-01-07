import React, { useContext, useEffect, useState, } from "react";
import { CoffeeTypesContext } from "../../../coffeeTypes/CoffeeTypesProvider";
import { FlavorsContext } from "../../../flavor/FlavorsProvider";
import { ActorRatingsContext } from "../../../actorRatings/actorRatingsProvider";
import { grommet, Button, Card } from "grommet";
import { CoffeeTypesCard } from "./CoffeeQuizCard";
import { CoffeeFlavorsCard } from "./CoffeeFlavorsCard";
import { ActorRatingsCard } from "./CoffeeActorsCard";
import { CoffeeQuizzesContext } from "./CoffeeQuizzesProvider";
import "./coffeeQuizStyling.css"
import { useNavigate, useParams }  from 'react-router-dom';
import { CoffeeContext} from  "../CoffeeProvider"

//this is the coffeetypescard
export const CoffeeQuiz = () => {
  const { coffeeTypes, getCoffeeTypes } = useContext(CoffeeTypesContext)
  const { flavors, getFlavors } = useContext(FlavorsContext)
  const { actorRatings, getActorRatings } = useContext(ActorRatingsContext)
  const {coffee, getCoffee} = useContext(CoffeeContext)
  


 const [selectedCoffeeType, setSelectedCoffeeType] = useState({})

 const [selectedFlavors, setSelectedFlavors] = useState({})

 const [selectedActor, setSelectedActors] = useState({})

 const [quizResult, setQuizResult] = useState({})
  
 const navigate = useNavigate();

// on clicking the button show or navigate to the matching coffee review of the flavor.id
useEffect(() => {
  getCoffeeTypes()
  .then(getFlavors)
  .then(getActorRatings)
}, [])


// const quizResults = () => {

// }

 const displayAnswerHandle = () => {
   if (selectedFlavors.id === undefined) {
    window.alert("Please click on your choices")

   } else {
    //  quizResults.find(coffee.id)
     setQuizResult(selectedFlavors.id)
   
 }
 
 }

  
  

    return(

    <section>
      <div>
        
        {coffeeTypes.map(type => {
          if(type.id === selectedCoffeeType.id){
            return <CoffeeTypesCard key={type.id} className="highlightedCoffeeSelection" functionToChangeCoffeeTypeState={setSelectedCoffeeType} coffeeTypes={type} /> 
          } else {
            return <CoffeeTypesCard key={type.id} functionToChangeCoffeeTypeState={setSelectedCoffeeType} coffeeTypes={type} /> 

          }
          
        })
        }
      </div>

    <div className="coffeeFlavors">

      {flavors.map(coffeeFlavor => {
        if(coffeeFlavor.id === selectedFlavors.id){
        return <CoffeeFlavorsCard key={coffeeFlavor.id} className="highlightedCoffeeSelection" functionToChangeCoffeeFlavorsState={setSelectedFlavors} coffeeFlavors={coffeeFlavor} />
      } else {
      return <CoffeeFlavorsCard key={coffeeFlavor.id} functionToChangeCoffeeFlavorsState={setSelectedFlavors} coffeeFlavors={coffeeFlavor} />
      }
    })
    }
    </div>

      <div className="coffeeActors">
      {actorRatings.map(actors => {
        if(actors.id === selectedActor.id){
        return <ActorRatingsCard key={actors.id} actors={actors} className="highlightedCoffeeSelection"
        functionToChangeActorState={setSelectedActors} />
      } else {
        return <ActorRatingsCard key={actors.id} actors={actors} 
        functionToChangeActorState={setSelectedActors} />
      }
      })
      }
      </div>
      <Button className="resultsButton" onClick={displayAnswerHandle}  >Show Quiz Results</Button>
    </section>

    )
}
