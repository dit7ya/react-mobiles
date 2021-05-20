import React from "react";
import AddMobile from "./components/AddMobile";
import ViewList from "./components/ViewList"
import LoginButton from "./components/auth/LoginButton"


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const App = () => {
  // return (<AddMobile />)
  return (
    <Router>
      <nav className="flex justify-between border rounded mb-8 p-2">
        {/* <div className="bg-purple-200 rounded pl-1 pr-1 text-sm text-gray-700"> */}
        {/*   <Link to="/">Home</Link> */}
        {/* </div> */}
        <div className="bg-purple-200 rounded pl-1 pr-1 text-sm text-gray-700">
          <Link to="/addMobile">Add Mobile</Link>
        </div>

        <div className="bg-purple-200 rounded pl-1 pr-1 text-sm text-gray-700">
          <Link to="/viewList">View Mobile List</Link>
        </div>
        <LoginButton/>
      </nav>

      <Switch>

        <Route path="/addMobile">
          <AddMobile />
        </Route>
        <Route path="/viewList">
          <ViewList />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
