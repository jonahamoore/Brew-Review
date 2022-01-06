import React, { useContext, useNavigate, useEffect, useState, } from "react";
import { CoffeeTypesContext } from "../../../coffeeTypes/CoffeeTypesProvider";
import { FlavorsContext } from "../../../flavor/FlavorsProvider";
import { ActorRatingsContext } from "../../../actorRatings/actorRatingsProvider";
import { grommet, Button } from "grommet";
import { CoffeeTypesCard } from "./CoffeeQuizCard";
import { CoffeeFlavorsCard } from "./CoffeeFlavorsCard";
import { ActorRatingsCard } from "./CoffeeActorsCard";

//this is the coffeetypescard
export const CoffeeQuiz = () => {
  const { coffeeTypes, getCoffeeTypes } = useContext(CoffeeTypesContext)
  const { flavors, getFlavors } = useContext(FlavorsContext)
  const { actorRatings, getActorRatings } = useContext(ActorRatingsContext)

  // const navigate = useNavigate();

  useEffect(() => {
    getCoffeeTypes()
    .then(getFlavors)
    .then(getActorRatings)
  }, [])

    return(

    <section>
      <div className="coffeeTypes">
        {coffeeTypes.map(type => {
          return <CoffeeTypesCard key={type.id} coffeeTypes={type} />
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
