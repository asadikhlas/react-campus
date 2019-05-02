import React, { Component } from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom';

class Routers extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={SignIn} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/admindashboard" component={AdminDashboard} />
                <Route exact path="/studentdashboard" component={StudentDashboard} />
                <Route exact path="/companydashboard" component={CompanyDashboard} />
                <Route exact path="/createjob" component={PostJob} />
            </div>
        </Router>
    )
  }
}

export default Routers;
