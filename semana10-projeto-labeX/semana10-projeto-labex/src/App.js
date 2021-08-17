import React from 'react' 
import { BrowserRouter, Router, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
      <Switch> 
        
        <Router path={"/adminhome"}>
        <AdminHomePage />
        </Router>

        <Router path={"/applicationform"}>
        <ApplicationFormPage />
        </Router>

        <Router path={"/createtrip"}>
        <CreateTripPage />
        </Router>

        <Router path={"/home"}>
        <HomePage /> 
        </Router>

        <Router path={"/listtrips"}>
        <ListTripsPage />
        </Router>

        <Router path={"/login"}>
        <LoginPage />
        </Router>

        <Router path={"/tripdetails"}>
        <TripDetailsPage />
        </Router>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
