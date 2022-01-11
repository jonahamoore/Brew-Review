import React from "react";
import { Route, Routes } from "react-router-dom";
import { CoffeeList } from "./coffee/CoffeeList"
import { CoffeeForm } from "./coffee/CoffeeForm"
import { CoffeeDetails } from "./coffee/CoffeeDetails"
import { CoffeeProvider } from "./coffee/CoffeeProvider"
import { CoffeeFilter } from "./coffee/CoffeeFilter";
import { CoffeeTypesProvider } from "../coffeeTypes/CoffeeTypesProvider";
import { FlavorsProvider } from "../flavor/FlavorsProvider";
import { ActorRatingsProvider } from "../actorRatings/actorRatingsProvider";
import { CoffeeQuizzesProvider } from "./coffee/CoffeeQuizzesProvider";
import { CoffeeQuiz } from "./coffee/CoffeeQuiz";




export const ApplicationViews = () => {
    return (
      <CoffeeProvider>
        <CoffeeTypesProvider>
          <FlavorsProvider> 
            <ActorRatingsProvider>
              <CoffeeQuizzesProvider>
              <Routes>
                <Route path="coffee/*" element={<><CoffeeFilter /><CoffeeList /></>} />
                <Route path="coffee/create/*" element={<CoffeeForm />} />
                <Route path="coffee/edit/:coffeeId/*" element={<CoffeeForm />} />
                <Route path="coffee/detail/:coffeeId/*" element={<CoffeeDetails />} />
                <Route path="coffeeQuiz/*" element={<CoffeeQuiz/>} />
              </Routes>
              </CoffeeQuizzesProvider>
            </ActorRatingsProvider>
          </FlavorsProvider>
        </CoffeeTypesProvider>
      </CoffeeProvider>
    )}