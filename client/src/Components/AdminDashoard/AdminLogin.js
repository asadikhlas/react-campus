import React, { Component } from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message
} from "semantic-ui-react";
import { connect } from "react-redux";
import { adminAsyncLogin } from "../../Store/Middlewares/adminLoginMiddleware";

class AdminLogin extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const newObj = {
      email,
      password
    };

    this.props.adminAsyncLogin(newObj);
  };

  componentWillReceiveProps(newProps) {
    const oldProps = this.props;
    if (oldProps.adminUser !== newProps.adminUser) {
      this.props.history.push("/admindashboard");
    } else {
      this.props.history.push("/adminlogin");
    }
  }

  render() {
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 1000 }}>
          <Header as="h2" icon color="violet" textAlign="center">
            Admin Login Here
          </Header>
          <Form
            onSubmit={this.handleSubmit}
            size="large"
            inverted
            widths="equal"
          >
            <Segment inverted color="teal">
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Enter your email address"
                onChange={this.handleChange}
                type="email"
                label="Email Address"
              />

              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Enter your password"
                onChange={this.handleChange}
                type="password"
                label="Password"
              />
              <Button color="violet" fluid size="large">
                Submit
              </Button>
            </Segment>
          </Form>
          {this.props.errorMessage && (
            <Message color="red"> {this.props.errorMessage}</Message>
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = ({ adminLoginReducer }) => {
  return {
    adminUser: adminLoginReducer.adminUser,
    errorMessage: adminLoginReducer.errorMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    adminAsyncLogin: data => {
      dispatch(adminAsyncLogin(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminLogin);
