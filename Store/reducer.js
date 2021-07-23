import {
    SET_FIRST_NAME,
    SET_LAST_NAME,
    SET_NUMBER,
    SET_MAIL,
    SET_ISSUE
} from './actions';

const initialState = {
    fname: '',
    lname: '',
    number: '',
    mail: '',
    issue: ''
};

const infoReducer = (state = initialState, action) => {
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

export default infoReducer;