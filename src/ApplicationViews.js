import React from "react";
import { Route, Routes } from "react-router-dom";
import { CoffeeList } from "./components/coffee/CoffeeList"
import { CoffeeForm } from "./components/coffee/CoffeeForm"
import { CoffeeDetails } from "./components/coffee/CoffeeDetails"
import { CoffeeProvider } from "./components/coffee/CoffeeProvider"





export const ApplicationViews = () => {
    return (
      <CoffeeProvider>
        <Routes>
          <Route path="coffee/*" element={<CoffeeList />} />
          <Route path="coffee/create/*" element={<CoffeeForm />} />
          <Route path="coffee/edit/:coffeeId/*" element={<CoffeeForm />} />
          <Route path="coffee/detail/:coffeeId/*" element={<CoffeeDetails />} />
        </Routes>
      </CoffeeProvider>
    )}