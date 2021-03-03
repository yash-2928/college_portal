import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { CURRENT_USER } from '../App';
import PostService from '../service/postService';
import CreatePost from './CreatePost';
import PostItem from './PostItem';

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
      this.setState({ posts: data });
    })
  }

  createPost(title, content, type) {
    this.postService.createPost({
      userId: this.state.currentUser.userId,
      postTitle: title,
      postType: type,
      content: content
    }).then(() => this.loadPosts())
  }

  render() {
    return (
      <Container>
        <Row><CreatePost createPost={this.createPost} /></Row>
        <hr />
        {this.state.posts.map((post, i) => <PostItem key={i} {...post} /> )} 
      </Container>
    );
  }
}


export default Post;