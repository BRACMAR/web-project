import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react';
import './App.css';
import "./lib/font-awesome/css/all.min.css";

function App() {
  return (
    <Router>
      <Header/>


      <Switch>
        <Route exact path="/">
          <Watchlist/>
        </Route>

        <Route exact path="/watched">
          <Watched/>
        </Route>

        <Route exact path="/add">
          <Add/>
        </Route>

      </Switch>    
      
    </Router>
  );
}

export default App;
