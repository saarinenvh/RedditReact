import React, {Component} from 'react';
import {connect} from 'react-redux';

class PostDetail extends Component {
  render() {
    if (!this.props.post) {
      return (
        <div className="showPost">
        <div className="logo">
        <img src={require('../img/cranelogo.png')} />
        </div>
        <h2 id="slogan">Because you have to have some fun while working...</h2>

        </div>);
    } else {
      return (
        <div className="showPost">
            <h1>{this.props.post.data.title}</h1>
            {this.props.post.data.is_video &&
              <video controls autoPlay loop>
                <source src={this.props.post.data.media.reddit_video.fallback_url} type="video/mp4" />
                <source src={this.props.post.data.media.reddit_video.fallback_url} type="video/ogg" />
              </video>
            }

            {this.props.post.data.url.slice(this.props.post.data.url.length - 3, this.props.post.data.url.length) == "ifv" &&
            <video controls autoPlay loop>
              <source src={this.props.post.data.url.slice(0, this.props.post.data.url.length - 4) + 'mp4' } type="video/mp4" />
            </video>
            }

            {!this.props.post.data.is_video &&
              <img src={this.props.post.data.url} />
            }

        </div>
      );

    }
  }
}

function mapStateToProps(state) {
  return {
    post: state.activePost,
    list: state.postList
  }
}

export default connect(mapStateToProps)(PostDetail);
