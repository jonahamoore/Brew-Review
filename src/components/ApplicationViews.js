import React from "react";
import { Route, Routes } from "react-router-dom";
import { CoffeeList } from "./coffee/CoffeeList"
import { CoffeeForm } from "./coffee/CoffeeForm"
import { CoffeeDetails } from "./coffee/CoffeeDetails"
import { CoffeeProvider } from "./coffee/CoffeeProvider"
import { TypeProvider } from "../typeofcoffee/TypeOfCoffeeProvider";
import { TypeList } from "../typeofcoffee/TypeList";
import { Home } from "../Home";


export const ApplicationViews = () => {
    return (
      <CoffeeProvider>
        <TypeProvider>  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="coffee/*" element={<CoffeeList />} />
            <Route path="typeOfCoffee/*" element={<TypeList />} />
            <Route path="coffee/create/*" element={<CoffeeForm />} />
            <Route path="coffee/edit/:coffeeId/*" element={<CoffeeForm />} />
            <Route path="coffee/detail/:coffeeId/*" element={<CoffeeDetails />} />
          </Routes>
        </TypeProvider>
      </CoffeeProvider>
    )}