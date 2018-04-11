
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import allReducers from './reducers';
import App from './components/app';
import * as nextPost from './actions/select-post'
import * as fetchAll from './actions/fetch-posts';
import './index.css'


const store = createStore(allReducers,applyMiddleware(thunk));

// Fetches all the date from destination url


store.dispatch(fetchAll.fetchPosts())

// Updates the state every 60 seconds
setInterval(function(){ store.dispatch(fetchAll.fetchPosts())}, 60000);


setTimeout(function(){ store.dispatch(nextPost.nextPost(store.getState().allPosts))}, 10000);
setInterval(function(){ store.dispatch(nextPost.nextPost(store.getState().allPosts))}, 10000);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
