import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class BlogPosts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {title: 'This is a fake post', _id: '325kjlljh'},
        {title: 'This is another fake post', _id: '234sdjlk'}
      ],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3030/posts')
      .then((data) => {
        this.setState({posts: data.data});
      })
      .catch((err) => {
        console.log('You still need to implement the `POSTS` `GET`', err);
      });
  }
  
  render() {
    const { posts } = this.state;
    return (
      <div>
      <Link to='/new-post'><button className="btn btn-default btn-sm">Create New Post</button></Link>
        {posts.map((post) => {
          return (
              <div key={post._id}>
                <Link to={`posts/${post._id}`}>{post.title}</Link>
              </div>
            )
        })}
      </div>
    );
  }
}

