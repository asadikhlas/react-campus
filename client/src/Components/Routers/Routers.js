import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Register from "../Register-Login/Register";
import SignIn from "../Register-Login/Sign-in";
import AdminDashboard from "../AdminDashoard/AdminDashboard";
import AdminLogin from "../AdminDashoard/AdminLogin";
import CompanyDashboard from "../CompanyDashboard/Companydashboard";
import StudentDashboard from "../StudentDashboard/StudentDashboard";
import PostJob from "../CompanyDashboard/PostJob";

class Routers extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/admindashboard" component={AdminDashboard} />
          <Route exact path="/adminLogin" component={AdminLogin} />
          <Route exact path="/studentdashboard" component={StudentDashboard} />
          <Route exact path="/companydashboard" component={CompanyDashboard} />
          <Route exact path="/createjob" component={PostJob} />
        </div>
      </Router>
    );
  }
}

export default Routers;
