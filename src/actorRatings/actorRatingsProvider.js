import React, { useState, createContext } from "react"

export const ActorRatingsContext = createContext()

export const ActorRatingsProvider = (props) => {

    const [actorRatings, setActorRatings] = useState([])
    

    const getActorRatings = () => {
        return fetch("http://localhost:8088/actorRatings")
        .then(res => res.json())
        .then(setActorRatings)
    }

    const addActorRatings = actorRatingsObj => {
        return fetch("http://localhost:8088/actorRatings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(actorRatingsObj)
        })
        .then(response => response.json())
    }

    const updateActorRatings = actorRatingsObj => {
        return fetch(`http://localhost:8088/actorRatings/${actorRatings.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(actorRatingsObj)
        })
          .then(getActorRatings)
    }

    const getActorRatingsById = (id) => {
        return fetch(`http://localhost:8088/actorRatings/${id}`)
            .then(res => res.json())
    }
    return (
        <ActorRatingsContext.Provider value={{ 
            actorRatings, addActorRatings, getActorRatings, updateActorRatings, getActorRatingsById
        }}>
            {props.children}
        </ActorRatingsContext.Provider>
    )

}