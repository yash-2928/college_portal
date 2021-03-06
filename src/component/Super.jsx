import * as React from "react";
import { Admin, Resource } from "react-admin";
import { UserList, UserEdit, UserCreate } from "./admin/users";
import { PostList, PostEdit, PostCreate } from "./admin/posts";
import { JobList, JobEdit, JobCreate } from "./admin/jobs";
import Dashboard from "./admin/Dashboard";
import DataProvider from "./admin/dataProvider";

class Super extends React.Component {
  render() {
    return (
      <Admin dataProvider={DataProvider} dashboard={Dashboard}>
        <Resource
          name="posts"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
        />
        <Resource
          name="jobs"
          list={JobList}
          edit={JobEdit}
          create={JobCreate}
        />
        <Resource
          name="users"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
        />
      </Admin>
    );
  }
}

export default Super;
