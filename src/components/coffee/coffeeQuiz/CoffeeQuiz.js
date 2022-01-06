import React, { useContext, useNavigate, useEffect, useState, } from "react";
import { CoffeeTypesContext } from "../../../coffeeTypes/CoffeeTypesProvider";
import { FlavorsContext } from "../../../flavor/FlavorsProvider";
import { ActorRatingsContext } from "../../../actorRatings/actorRatingsProvider";
import { grommet, Button } from "grommet";
import { CoffeeTypesCard } from "./CoffeeQuizCard";
import { CoffeeFlavorsCard } from "./CoffeeFlavorsCard";
import { ActorRatingsCard } from "./CoffeeActorsCard";
import { CoffeeQuizzesContext } from "./CoffeeQuizzesProvider";

//this is the coffeetypescard
export const CoffeeQuiz = () => {
  const { coffeeTypes, getCoffeeTypes } = useContext(CoffeeTypesContext)
  const { flavors, getFlavors } = useContext(FlavorsContext)
  const { actorRatings, getActorRatings } = useContext(ActorRatingsContext)
  // const [quiz, getQuiz] = useContext(CoffeeQuizzesContext)
 //state here! pass state to the children, then when click change state

 const [quiz, setQuiz] = useState()

 const [selectedCoffeeType, setSelectedCoffeeType] = useState({})
  
 // make state varibale for flavor and actor


  useEffect(() => {
    getCoffeeTypes()
    .then(getFlavors)
    .then(getActorRatings)
  }, [])

  
  

    return(

    <section>
      <div className="coffeeTypes">
        
        {coffeeTypes.map(type => {
          if(type.id === selectedCoffeeType.id){
            return <CoffeeTypesCard key={type.id} className="highlightedCoffeeTypeSelection" functionToChangeCoffeeTypeState={setSelectedCoffeeType} coffeeTypes={type} /> 
          } else {
            return <CoffeeTypesCard key={type.id} functionToChangeCoffeeTypeState={setSelectedCoffeeType} coffeeTypes={type} /> 

          }
          
        })
        }
      </div>

      <div className="coffeeFlavors">
      {flavors.map(coffeeFlavors => {
        return <CoffeeFlavorsCard key={coffeeFlavors.id} coffeeFlavors={coffeeFlavors} />
      })
      }
      </div>

      <div className="coffeeActors">
      {actorRatings.map(actors => {
        return <ActorRatingsCard key={actors.id} actors={actors} />
      })
      }
      </div>
    </section>
    )
}
