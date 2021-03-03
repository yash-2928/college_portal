import React from 'react';
import Post from './post';
import Job from './job';
import Profile from './profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Admin from './Min';


class Body extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/post" component={Post} />
          <Route path="/job" component={Job} />
          <Route path="/profile" component={Profile} />
          {this.props.isAdmin && <Route path="/admin" component={Admin}/>}
        </div>
      </Router>
    );
  }
}

export default Body;