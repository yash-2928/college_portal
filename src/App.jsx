import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./component/header";
import Body from "./component/body";
import Login from "./component/login";
import Signup from "./component/signup";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { login } from "./service/authService";
import { getSignedInUser, loadSignedInUser, removeSignedInUser } from "./util/common";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: getSignedInUser()
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    removeSignedInUser();
    this.setState({ currentUser: null }, () => {
      window.location.pathname = "/";
    });
  }

  handleLogin(email, password) {
    if (email && password) {
      login(email, password).then((data) => {
        if (data) {
          loadSignedInUser(data)
          this.setState({ currentUser: data }, () => {
            window.location.pathname = "/post";
          });
        }
      });
    }
  }

  render() {
    if (this.state.currentUser) {
      return (
        <div>
          <>
            <Header
              logout={this.handleLogout}
              isAdmin={this.state.currentUser.isAdmin}
            />
            <Body isAdmin={this.state.currentUser.isAdmin} />
          </>
        </div>
      );
    } else {
      return (
        <Router>
          <>
            <Route
              exact
              path="/"
              component={() => <Login login={this.handleLogin} />}
            />
            <Route path="/signup" component={Signup} />
          </>
        </Router>
      );
    }
  }
}

export default App;
