import React from "react";
import Post from "./post";
import Job from "./job";
import Profile from "./profile";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from "./Admin";

class Body extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {this.props.isAdmin && <Route path="/admin" component={Admin} />}
          <Route path="/post" component={() => <Post isAdmin={this.props.isAdmin} />} />
          <Route path="/job" component={Job} />
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default Body;
