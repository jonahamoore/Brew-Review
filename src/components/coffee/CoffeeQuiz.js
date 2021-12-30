import React, { useContext } from "react";

export const CoffeeQuiz = () => {

    return(
<form className="coffeeQuizForm">
    <fieldset>
        <div className="form-group">
          <label htmlFor="typesofcoffee"> Coffee Roast: </label>
          <select value={coffee.coffeeTypesId} name="coffeeTypesId" className="form-control" onChange={}>
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
            <label htmlFor="flavor">Flavor: </label>
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
            <label htmlFor="actorRatings">Actor to Coffee Comparison: </label>
            <select value={coffee.actorRatingsId} name="actorRatingsId" id="coffeeActorRatings" className="form-control" onChange={}>
              <option value="0">Select an Actor</option>
              {actorRatings.map(a => (
                <option key={a.id} value={a.id}>
                  {a.actorName}
                </option>
              ))}
            </select>
          </div>
    </fieldset>
</form>
    )
}