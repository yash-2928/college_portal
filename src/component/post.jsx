import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { CURRENT_USER } from '../App';
import CommentService from '../service/commentService';
import PostService from '../service/postService';
import CreatePost from './CreatePost';
import Postitem from './PostItem';

class Post extends React.Component {

  postService;
  commentService;

  constructor(props) {
    super(props)

    let currentUser = localStorage.getItem(CURRENT_USER)
    currentUser = JSON.parse(currentUser)

    this.state = {
      currentUser,
      posts: []
    }

    this.postService = new PostService(currentUser.accessToken);
    this.commentService = new CommentService(currentUser.accessToken);
    this.loadPosts = this.loadPosts.bind(this);
    this.createPost = this.createPost.bind(this);
    this.createComment = this.createComment.bind(this);

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

  updatePost(postId) {
    this.postService.getPost(postId).then(updatePost => {
      const updatedPosts = this.state.posts.map(post => {
        if (post.postId === postId) {
          return updatePost
        }
        return post
      })
      this.setState({ posts: updatedPosts })
    })
  }

  createComment(postId, content) {
    this.commentService.createComment(
      this.state.currentUser.userId,
      postId,
      content
    ).then(() => this.updatePost(postId))
  }

  render() {
    return (
      <Container>
        <CreatePost createPost={this.createPost} />
        {this.state.posts.map((post, i) => <Postitem createComment={this.createComment} key={i} {...post} />)}
      </Container>
    );
  }
}


export default Post;