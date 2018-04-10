import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectPost} from '../actions/select-post'
import {moveLeft, moveRight} from '../actions/arrow-click'

class PostList extends Component {
  createListItems() {
    var items = this.props.posts.slice(0,5)
    if (!this.props.posts) {
      return <p>...</p>
  } else {
    return items.map( (post) => {
      return(
      <div className='postLink' key={post.data.id} onClick={() => this.props.selectPost(post)} >
      <img src={post.data.thumbnail} alt={post.data.title}/>
      </div>
    )})
  }
}

  render() {
    return (
      <div className = 'postList'>
      <img id="arrow" src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Arrleft.svg" onClick={() => this.props.moveLeft(this.props.posts)} />
      {this.createListItems()}
      <img id="arrow" src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Arrright.svg" onClick={() => this.props.moveRight(this.props.posts)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.allPosts,
    list: state.list
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectPost: selectPost, moveLeft: moveLeft, moveRight: moveRight}, dispatch)
};


export default connect(mapStateToProps, matchDispatchToProps)(PostList);
