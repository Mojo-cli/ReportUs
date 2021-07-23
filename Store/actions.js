export const SET_FIRST_NAME = "SET_FIRST_NAME";
export const SET_LAST_NAME = "SET_LAST_NAME";
export const SET_NUMBER = "SET_NUMBER";
export const SET_MAIL = "SET_MAIL";
export const SET_ISSUE = "SET_ISSUE";

export const setFirstName = fname => {
    return {type: SET_FIRST_NAME, fname};
};

export const setLastName = lname => {
    return {type: SET_LAST_NAME, lname};
};

export const setNumber = number => {
    return {type: SET_NUMBER, number};
};

export const setMail = mail => {
    return {type: SET_MAIL, mail};
};

export const setIssue = issue => {
    return {type: SET_ISSUE, issue};
};