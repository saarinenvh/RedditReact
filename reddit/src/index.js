
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import allReducers from './reducers';
import App from './components/app';
import * as fetchAll from './actions/fetch-posts';
import * as createList from './actions/create-list'
import './index.css'


const store = createStore(allReducers,applyMiddleware(thunk));

store.dispatch(fetchAll.fetchPosts())
setInterval(function(){ store.dispatch(fetchAll.fetchPosts())}, 60000);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
