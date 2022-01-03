// import React, { useState, useContext } from 'react'
// import { CoffeeTypesContext } from '../../../coffeeTypes/CoffeeTypesProvider'
// import { CoffeeContext } from '../CoffeeProvider'


// export const CoffeeDropDown = () => {
//     const [setCoffeeFilter] = useContext(CoffeeTypesContext)
//     const [coffeeTypes, setCoffeeTypes] = useContext(CoffeeTypesContext)
//     const [coffee, setCoffee] = useContext(CoffeeContext)

//     return(
//         <fieldset>
//         <div className="form-group">
//           <label htmlFor="typesofcoffee"> Coffee Roast: </label>
//           <select value={coffee.coffeeTypesId} name="coffeeTypesId" className="form-control" onChange={(event) => setCoffeeFilter(event.target.value)} >
//             <option value="0">Select a Roast</option>
//             {coffeeTypes.map(t => (
//               <option key={t.id} value={t.id}>
//                 {t.type}
//               </option>
//             ))}
//           </select>
//         </div>
//       </fieldset>
//     )
// }