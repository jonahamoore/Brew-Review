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
{/* <div className="RoastDropdown">
  <label for="coffeeRoast">Choose a Roast Type:</label>
  <select name="coffeeTypes" id="coffeeRoast">
    <option value="Light">Light</option>
    <option value="Medium">Medium</option>
    <option value="Dark">Dark</option>
  </select>
</div> */}