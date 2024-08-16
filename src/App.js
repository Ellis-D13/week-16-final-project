import React from 'react'; // import required modules and components
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
import AboutUs from './Components/AboutUs';
import TermsOfService from './Components/TermsOfService';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TipCalculator from './Components/TipCalculator';
import TipDistributionCalculator from './Components/TipDistributionCalculator';

// define the main app functional component 
function App() {
  // component rendering logic
  return (
    // router component for routing 
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
        <Route path="/about-us" component={AboutUs} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/tip-calculator" component={TipCalculator} />
        <Route path="/tip-distribution" component={TipDistributionCalculator} />


      </Switch>
      <FooterComponent />
    </Router>
  );
}



export default App;

