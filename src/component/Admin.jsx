import React from 'react'
import { Table } from 'react-bootstrap'
import UserService from '../service/userService'
import { getSignedInUser } from '../util/common'
import User from './User'

export default class Admin extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentUser: getSignedInUser(),
            users: []
        }

        this.userService = new UserService(this.state.currentUser.accessToken);

        this.loadUsers = this.loadUsers.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
    }

    loadUsers() {
        this.userService.getUsers().then(users => {
            this.setState({ users })
        })
    }

    deleteUser(userId) {
        this.userService.deleteUser(userId).then(() => this.loadUsers());
    }

    componentDidMount() {
        this.loadUsers()
    }

    render() {
        return <div>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Enrollment No</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user, i) => <User key={i} deleteUser={this.deleteUser} {...user} />)}
                    </tbody>
                </Table>
            </div>
        </div>
        // ReportDashboard
        // Create Job
    }
}