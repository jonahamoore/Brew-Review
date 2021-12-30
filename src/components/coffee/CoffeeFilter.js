import React, { useContext } from "react";
import { CoffeeContext } from "./CoffeeProvider";
import "./BrewReview.css"

export const CoffeeFilter = () => {
    const { setSearchTerms } = useContext(CoffeeContext)

    return (
        <>
      Coffee search:
      <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for a coffee... " />
    </>
  )
}