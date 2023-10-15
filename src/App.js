import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage';
import RecipesPage from './Components/RecipesPage';
import WinningRecipesPage from './Components/WinningRecipesPage'; 
import ContactPage from './Components/ContactPage';
import NavbarComponent from './Components/NavbarComponent';
import FooterComponent from './Components/FooterComponent';
import SubmitPage from './Components/SubmitPage';
import PicklesPage from './Components/PicklesPage';
import PiePage from './Components/PiePage';
import CaserolePage from './Components/CaserolePage';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/recipes" component={RecipesPage} />
        <Route path="/winning-recipes" component={WinningRecipesPage} /> 
        <Route path="/contact" component={ContactPage} />
        <Route path="/pickles" component={PicklesPage} />
        <Route path="/pie" component={PiePage} />
        <Route path="/caserole" component={CaserolePage} />
        <Route path="/submit" component={SubmitPage} />

      </Switch>
      <FooterComponent />
    </Router>
  );
}

export default App;

