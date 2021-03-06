import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { CURRENT_USER } from '../App';
import PostService from '../service/postService';
import CreatePost from './CreatePost';

class Post extends React.Component {
  constructor(props) {
    super(props)

    let currentUser = localStorage.getItem(CURRENT_USER)
    currentUser = JSON.parse(currentUser)

    this.state = {
      currentUser,
      posts: []
    }

    this.postService = new PostService(currentUser.accessToken);
    this.loadPosts = this.loadPosts.bind(this);
    this.createPost = this.createPost.bind(this);

  }

  componentDidMount() {
    this.loadPosts()
  }

  loadPosts() {
    this.postService.getPosts().then(data => {
      if (data) {

        this.setState({ posts: data });
      }
    })
  }

  createPost(title, content, file) {
    this.postService.createPost(
      file,
      title,
      content,
      this.state.currentUser.userId
    ).then(() => this.loadPosts())
  }

  render() {
    return (
      <Container>
        <CreatePost createPost={this.createPost} />
        {this.state.posts}
      </Container>
    );
  }
}


export default Post;