import React, { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "./CoffeeProvider";
// import { CoffeeTypesContext } from "../../coffeeTypes/CoffeeTypesProvider";
import "./BrewReview.css"

export const CoffeeFilter = () => {
    const { setSearchTerms } = useContext(CoffeeContext)
    // const {coffee, getCoffee} = useContext(CoffeeContext)
    // const {searchedCoffee, setSearchedCoffee} = useState("")
    // const {coffeeTypes, getCoffeeTypes} = useContext(CoffeeTypesContext)

//     useEffect(() => {
//       getCoffee()
//       .then(getCoffeeTypes)
//     }, [])

//     const handleSelect = (event) => {
//       setCoffeeFilter(event.coffeeTypes.name)
//     }

//     const handleSearch = (event) => {
//       setSearchedCoffee(event.coffeeTypes.name)
//     }
//     const filteredCoffee = coffee.filter((coffee) => coffee.

    return (
        <>
      <div className="searchBar">
      <strong>Search Review:</strong>
      <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search by coffee name, brand, roast type, or actor name" />
      </div>
    </>
  )}




//         <div className="RoastDropdown">
//           <label for="coffeeRoast">Choose a Roast Type:</label>
//           <select className="filter-select" name="coffeeTypes" onChange={handleSelect} id="coffeeRoast">
//             <option value="Light">Light</option>
//             <option value="Medium">Medium</option>
//             <option value="Dark">Dark</option>
//           </select>
//       </div>