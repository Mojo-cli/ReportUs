import React from 'react';

import ContactUs from './Screens/ContactUs';
import infoReducer from './Store/reducer';

import Header from './Components/Header'

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import {
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_NUMBER,
  SET_MAIL,
  SET_ISSUE
} from './Store/actions';

const initialState = {
  fname: '',
  lname: '',
  number: '',
  mail: '',
  issue: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case SET_FIRST_NAME:
        return {...state, fname: action.fname};
      case SET_LAST_NAME:
        return {...state, lname: action.lname};
      case SET_NUMBER:
        return {...state, number: action.number};
      case SET_MAIL:
        return {...state, mail: action.mail};
      case SET_ISSUE:
        return {...state, issue: action.issue};
      default:
        return state;
    }
}

// const rootReducer = combineReducers({
//   information:infoReducer
// });

const store = createStore(reducer);

export default function App() {
  return <Provider store={store}><Header title="Contact Us"/><ContactUs/></Provider>;
}

