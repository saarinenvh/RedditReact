import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectPost} from '../actions/select-post'
import {moveLeft, moveRight} from '../actions/arrow-click'

// Post item list
class PostList extends Component {

  createListItems() {

    // List items that will show on page
    var items = this.props.slider.slice(0,5)

    // If arr is empty, return dots
    if (!this.props.slider) {
      return <p>...</p>

  } else {

    // Map each post item to html code
    return items.map(
      (post) => { return(

      <div className='postLink' key={post.data.id} onClick={() => this.props.selectPost(post)} >
        <img id="thumbnail" alt={post.data.title} src={post.data.thumbnail} />
      </div>

    )})
  }
}

  // Render a postList, contains all elements in the list
  render() {
    return (

      <div className = 'postList'>
        <img id="arrow" alt = "Scroll left" src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Arrleft.svg" onClick={() => this.props.moveLeft(this.props.slider)} />
        {this.createListItems()}
        <img id="arrow" alt = "Scroll righ" src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Arrright.svg" onClick={() => this.props.moveRight(this.props.slider)} />
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.allPosts,
    list: state.list,
    slider: state.slider
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectPost: selectPost, moveLeft: moveLeft, moveRight: moveRight}, dispatch)
};


export default connect(mapStateToProps, matchDispatchToProps)(PostList);
