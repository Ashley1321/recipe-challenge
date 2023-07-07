import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import LandingPage from './components/landingPage';
import DisplayRecipe from './components/displayRecipe';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import WelcomePage from './components/welcomePage';


function App() {

  const [dish, setDish] = useState([]);
  useEffect(()=> {
    console.log(dish);

  },[dish])
  const addDish = ((_recipe)=>{
    setDish((recipe)=>[...recipe,
      _recipe
    ])

    const store = localStorage.setItem('store',JSON.stringify(dish))
     console.log("saved", JSON.parse(localStorage.getItem('store')));
    
  })

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={WelcomePage}></Route>
        <Route path='/landingPage'>
          <LandingPage addDish={addDish} />
          
        </Route>
        <Route path='/displayRecipe'>
          <DisplayRecipe list={dish} />
        </Route>
      </Switch>
    </Router>
   
  );
}

export default App;
