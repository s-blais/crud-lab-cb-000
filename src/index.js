import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageRestaurant from './reducers/manageRestaurant';
// import rootReducer from './reducers/rootReducer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Had everything working perfectly... then spent hours changing sooooo many things in almost every file because of arbitrary naming differences with the tests. E.g., I renamed the manageRestaurant reducer, logically, because it ultimately isn't managing only restaurants, but reviews, too. But that blows up the tests with incredibly vague component errors... among many other inconsequential, yet test-breaking, differences... 

const store = createStore(manageRestaurant);
// const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);
