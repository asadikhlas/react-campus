import React, { Component } from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { asyncLogin } from "../../Store/Middlewares/login_middleware";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    role: "company"
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleRole = event => {
    this.setState({
      role: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password, role } = this.state;
    const newObj = {
      email,
      password,
      role
    };

    this.props.asyncLogin(newObj);
  };

  componentWillReceiveProps(newProps) {
    const oldProps = this.props;
    if (oldProps.currentUser !== newProps.currentUser) {
      this.props.history.push("/studentDashboard");
    }
  }

  render() {
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 1000 }}>
          <Header as="h2" icon color="violet" textAlign="center">
            Login Here
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
              <label
                style={{
                  fontWeight: "bold"
                }}
              >
                Type
              </label>
              <select
                value={this.state.role}
                name="role"
                onChange={this.handleRole}
              >
                <option value="company">Company</option>
                <option value="student">Student</option>
              </select>
              <br />
              <br />

              <Button color="violet" fluid size="large">
                Submit
              </Button>
              {this.props.sign_in_success && <div>success</div>}
              {this.props.sign_in_error && <div>error</div>}
            </Segment>
          </Form>
          {this.props.errorMessage && (
            <Message color="red"> {this.props.errorMessage}</Message>
          )}

          <Message color="black">
            Not Registered? <Link to="/register">Create an account</Link> <br />{" "}
            Or Are you Admin ? <Link to="/adminLogin">Admin Login</Link>
          </Message>

        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => {
  return {
    currentUser: loginReducer.currentUser,
    errorMessage: loginReducer.errorMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    asyncLogin: data => {
      dispatch(asyncLogin(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
