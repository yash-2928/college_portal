import React from "react";
import Post from "./post";
import Job from "./job";
import Profile from "./profile";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from "./Admin";
import UserProfile from "./UserProfile";

class Body extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {this.props.isAdmin && <Route path="/admin" component={Admin} />}
          <Route path="/post" component={() => <Post isAdmin={this.props.isAdmin} />} />
          <Route path="/job" component={() => <Job isAdmin={this.props.isAdmin} />} />
          <Route path="/user/:id" component={() => <UserProfile />} />
          <Route path="/profile" component={() => <Profile logout={this.props.logout} />} />
        </div>
      </Router>
    );
  }
}

export default Body;
