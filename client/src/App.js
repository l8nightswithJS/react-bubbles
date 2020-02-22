import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblesPage from './components/BubblePage'
import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/login/privateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path='/protected' component={BubblesPage}/>

      </div>
    </Router>
  );
}

export default App;
