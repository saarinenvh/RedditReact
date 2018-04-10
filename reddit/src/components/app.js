import React, { Component } from 'react';
import PostList from '../containers/post-list'
import PostDetail from '../containers/post-detail'
import Footer from '../components/footer'
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <PostList />
      <PostDetail />
      <Footer />
      </div>
    );
  }
}

export default App;
