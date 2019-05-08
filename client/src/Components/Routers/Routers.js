import React, { Component } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import Register from "../Register-Login/Register";
import SignIn from "../Register-Login/Sign-in";
import AdminDashboard from "../AdminDashoard/AdminDashboard";
import AdminLogin from "../AdminDashoard/AdminLogin";
import CompanyDashboard from "../CompanyDashboard/Companydashboard";
import StudentDashboard from "../StudentDashboard/StudentDashboard";
import PostJob from "../CompanyDashboard/PostJob";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  isSuccess,
  isCompanySuccess,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isSuccess || isCompanySuccess ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

class Routers extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/admindashboard" component={AdminDashboard} />
          <Route exact path="/adminLogin" component={AdminLogin} />
          {/* prettier-ignore*/}
          <PrivateRoute isCompanySuccess={this.props.isCompanySuccess && this.props.companyUser.role === 'company'} exact path="/postjob" component={PostJob} />
          {/* prettier-ignore*/}
          <PrivateRoute isCompanySuccess={this.props.isCompanySuccess && this.props.companyUser.role === 'company'} exact path="/companydashboard" component={CompanyDashboard} />
          {/* prettier-ignore*/}
          <PrivateRoute isSuccess={this.props.isSuccess && this.props.currentUser.role === "student"} exact path="/studentdashboard" component={StudentDashboard}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ loginReducer, companyLoginReducer }) => {
  return {
    isSuccess: loginReducer.isSuccess,
    currentUser: loginReducer.currentUser,
    companyUser: companyLoginReducer.companyUser,
    isCompanySuccess: companyLoginReducer.isSuccess
  };
};

export default connect(
  mapStateToProps,
  null
)(Routers);
