import React, {Component} from 'react';
import {connect} from 'react-redux';


class PostDetail extends Component {

  // Renders a logo, if no posts have been selected.
  // If post was clicked, the active state changes and will be
  // update according to media type

  render() {
    if (!this.props.post) {

      return (
        <div className="showPost">
          <div className="logo">
            <img alt="logo" src={require('../img/cranelogo.png')} />
          </div>
          <p id="slogan">Because you have to have some fun while working...</p>
        </div>);

    }
    else {

      return (
        <div className="showPost">
            <h1 id="title">{this.props.post.data.title}</h1>

            <hr id = "dot"/>
          <div className="content">
          {this.props.post.data.is_video &&
            <a href = {this.props.post.data.url}>
            <video controls autoPlay loop>
              <source src={this.props.post.data.media.reddit_video.fallback_url} type="video/mp4" />
              <source src={this.props.post.data.media.reddit_video.fallback_url} type="video/ogg" />
            </video></a>
          }

          {this.props.post.data.url.slice(this.props.post.data.url.length - 3, this.props.post.data.url.length) === "ifv" &&
          <a href = {this.props.post.data.url}><video controls autoPlay loop>
            <source src={this.props.post.data.url.slice(0, this.props.post.data.url.length - 4) + 'mp4' } type="video/mp4" />
          </video></a>
          }

          {this.props.post.data.post_hint.includes("image") &&
            <a href = {this.props.post.data.url}><img alt = {this.props.post.title} src={this.props.post.data.url} /></a>
          }


          {this.props.post.data.post_hint.includes("link") && this.props.post.data.url.slice(this.props.post.data.url.length - 3, this.props.post.data.url.length) !== "ifv" &&
            <a href = {this.props.post.data.url}><img alt = "thumbnail" src={this.props.post.data.thumbnail} /></a>
          }
          </div>
          <hr id = "dot" />
          <h2 id="score">Score: {this.props.post.data.score}</h2>
      </div>
      );
    }
  }
}


function mapStateToProps(state) {
  return {
    post: state.activePost,
    posts: state.allPosts
  }
}


export default connect(mapStateToProps)(PostDetail);
