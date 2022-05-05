import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AllStudents from "./components/student/AllStudents";

const MainRoute = () => {
  return (
    <div>
      <Router>
        {/* <Route
          exact
          path="/"
          render={() => (
            <div>
              <HomeCarousal />
              <HomeAdds />
            </div>
          )}
        /> */}
        <Route exact path="/" render={() => <AllStudents />} />
      </Router>
    </div>
  );
};

export default MainRoute;
