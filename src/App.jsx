import React from "react";
import AddMobile from "./components/AddMobile";
import ViewList from "./components/ViewList";
import LoginButton from "./components/auth/LoginButton";
import AuthButton from "./components/auth/AuthButton";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  // return (<AddMobile />)
  return (
    <Router>
      <div className="m-4">
        <nav className="flex justify-between border rounded p-2 m-12">
          <div className="flex">
            <div className="rounded px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">
              <Link to="/addMobile">Add Product</Link>
            </div>

            <div className="rounded px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">
              <Link to="/viewList">View List</Link>
            </div>
          </div>
          <div className="bg-indigo-600 rounded text-white px-3 py-1 2 text-center justify-end w-24 hover:bg-indigo-500">
            <AuthButton />
          </div>
        </nav>

        <Switch>
          <Route path="/viewList">
            <ViewList />
          </Route>
          <Route path="/addMobile">
            <AddMobile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
