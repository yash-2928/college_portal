import React from 'react'
import { useParams, withRouter } from 'react-router-dom'
import PostService from "../service/postService";
import ProfileService from "../service/profileService";
import JobService from "../service/jobService";
import { getSignedInUser } from '../util/common'

class UserProfile extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentUser: getSignedInUser(),
            userData: null
        }

        this.postService = new PostService(this.state.currentUser.accessToken);
        this.profileService = new ProfileService(
            this.state.currentUser.accessToken
        );
        this.jobService = new JobService(this.state.currentUser.accessToken);

        this.loadJobsByUserId = this.loadJobsByUserId.bind(this);
        this.loadPostsByUserId = this.loadPostsByUserId.bind(this);
        this.loadUserData = this.loadUserData.bind(this);
    }

    loadUserData(userId) {
        this.profileService
            .getUserData(userId)
            .then((data) => {
                this.setState({ userData: data });
            });
    }

    loadPostsByUserId(userId) {
        this.postService
            .getPostsByUserId(userId)
            .then((data) => {
                this.setState({ posts: data });
            });
    }

    loadJobsByUserId(userId) {
        this.jobService
            .getJobsByUserId(userId)
            .then((data) => {
                this.setState({ jobs: data });
            });
    }



    componentDidMount() {
        const id = this.props.match.params.id;
        this.loadUserData(id);
        this.loadPostsByUserId(id);
        this.loadJobsByUserId(id);
    }


    render() {
        if (this.state.userData) {
            return <div>
                User Data: {JSON.stringify(this.state.userData)}
            </div>
        }
        return "Loading..."
    }
}

export default withRouter(UserProfile)