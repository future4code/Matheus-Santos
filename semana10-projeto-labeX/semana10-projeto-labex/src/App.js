import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage" 
import { LoginPage } from "./components/LoginPage" 
import { AdminHomePage } from "./components/AdminHomePage" 
import { ListTripsPage } from "./components/ListTripsPage" 
import { ApplicationFormPage } from "./components/ApplicationFormPage" 
import { CreateTripPage } from "./components/CreateTripPage" 
import { TripDetailsPage } from "./components/TripDetailsPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/LoginPage"}>
          <LoginPage />
        </Route>

        <Route exact path={"/AdminHomePage"}>
          <AdminHomePage />
        </Route>

        <Route exact path={"/ListTripsPage"}>
          <ListTripsPage />
        </Route>

        <Route exact path={"/ApplicationFormPage"}>
          <ApplicationFormPage />
        </Route>

        <Route exact path={"/CreateTripPage"}>
          <CreateTripPage />
        </Route>

        <Route exact path={"/TripDetailsPage"}>
          <TripDetailsPage />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
