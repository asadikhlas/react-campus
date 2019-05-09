import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Header,
  Menu,
  Responsive,
  Segment,
  Visibility
} from "semantic-ui-react";
import PostJob from './PostJob';
import StudentTable from '../Tables/studentTable';
// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Welcome To Company Portal"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    />
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {
    screen: "student"
  };

  handleScreen = event => {
    if (event.target.name === "student") {
      this.setState({
        screen: "student"
      });
    } else {
      this.setState({
        screen: "job"
      });
    }
  };

  handleSignout = () => {
    window.location.reload(true);
  };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 250, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Button
                  as="a"
                  inverted={!fixed}
                  primary={fixed}
                  style={{ marginLeft: "0.7em" }}
                  name="student"
                  onClick={this.handleScreen}
                >
                  View Students
                </Button>

                <Button
                  as="a"
                  inverted={!fixed}
                  primary={fixed}
                  style={{ marginLeft: "0.7em" }}
                  name="job"
                  onClick={this.handleScreen}
                >
                  Post Jobs
                </Button>
                <Menu.Item position="right">
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                    onClick={this.handleSignout}
                  >
                    Sign Out
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
          <br />
          {this.state.screen === "student" ? <StudentTable /> : <PostJob />}
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const CompanyDashboard = () => <ResponsiveContainer />;
export default CompanyDashboard;
