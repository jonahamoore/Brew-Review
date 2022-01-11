import React, { useContext, useEffect, useState, } from "react";
import { CoffeeTypesContext } from "../../coffeeTypes/CoffeeTypesProvider";
import { FlavorsContext } from "../../flavor/FlavorsProvider";
import { ActorRatingsContext } from "../../actorRatings/actorRatingsProvider";
import { grommet, Button, Card } from "grommet";
import { CoffeeTypesCard } from "./CoffeeQuizCard";
import { CoffeeFlavorsCard } from "./CoffeeFlavorsCard";
import { ActorRatingsCard } from "./CoffeeActorsCard";
import { CoffeeQuizzesContext } from "./CoffeeQuizzesProvider";
import "./BrewReview.css"
import { useNavigate, useParams }  from 'react-router-dom';
import { CoffeeContext} from  "./CoffeeProvider"
import { CoffeeCard } from "./CoffeeCard";

//this is the coffeetypescard
export const CoffeeQuiz = () => {
  const { coffeeTypes, getCoffeeTypes } = useContext(CoffeeTypesContext)
  const { flavors, getFlavors } = useContext(FlavorsContext)
  const { actorRatings, getActorRatings } = useContext(ActorRatingsContext)
  const {coffee, getCoffee} = useContext(CoffeeContext)
  


 const [selectedCoffeeType, setSelectedCoffeeType] = useState({})

 const [selectedFlavors, setSelectedFlavors] = useState({})

 const [selectedActor, setSelectedActors] = useState({})

 const [quizResult, setQuizResults] = useState({})
  
 

// on clicking the button show or navigate to the matching coffee review of the flavor.id
useEffect(() => {
  getCoffee()
  .then(getCoffeeTypes)
  .then(getFlavors)
  .then(getActorRatings)
}, [])


 const displayAnswerHandle = () => {
   if (selectedFlavors.id === undefined) {
    window.alert("Please click on your choices")

   } else {
      const coffeeResult = coffee.find(c => c.flavorsId === +selectedFlavors.id)
      setQuizResults(coffeeResult)
      console.log(selectedFlavors.id, coffeeResult)  
 }
 }

 

    return(

    <section>

      <h2 className="coffeeRoastTitle">What is your favorite type of coffee roast?</h2>
      <div className="coffeeQuiz">

        {coffeeTypes.map(type => {
          console.log(type, selectedCoffeeType, type.id === selectedCoffeeType.id)
          if(type.id === selectedCoffeeType.id){
            return <CoffeeTypesCard key={type.id}  functionToChangeCoffeeTypeState={setSelectedCoffeeType} coffeeTypes={type} highlighted={true} /> 
          } else {
            return <CoffeeTypesCard key={type.id} functionToChangeCoffeeTypeState={setSelectedCoffeeType} coffeeTypes={type} highlighted={false} /> 

          }
          
        })
        }
      </div>

    <div className="coffeeQuiz">
        <h2 className="coffeeFlavorTitle">Which of the following flavors do you enjoy the most?</h2>
      {flavors.map(coffeeFlavor => {
        if(coffeeFlavor.id === selectedFlavors.id){
        return <CoffeeFlavorsCard key={coffeeFlavor.id} className="highlightedCoffeeSelection" functionToChangeCoffeeFlavorsState={setSelectedFlavors} coffeeFlavors={coffeeFlavor} />
      } else {
      return <CoffeeFlavorsCard key={coffeeFlavor.id} functionToChangeCoffeeFlavorsState={setSelectedFlavors} coffeeFlavors={coffeeFlavor} />
      }
    })
    }
    </div>

      <div className="coffeeQuiz">
        <h2 className="coffeeActorTitle">Which of the following is your favorite actor or actress?</h2>
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
      <Button className="resultsButton" onClick={displayAnswerHandle}
      >Show Quiz Results</Button>      
          {quizResult.id !== undefined? <h2 className="quizResultsStyling">{quizResult.name}</h2> : <></>}
    </section>

    )
}


// condition ? optionIfTrue : optionIfFalse

// if(condition){
//   optionIfTrue
// } else {
//   optionIfFalse
// }