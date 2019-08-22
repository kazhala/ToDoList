import * as actionTypes from '../types';

const initialstate = {
    text: '',
};

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_TEXT:
            return {
                ...state,
                text: action.payload.text
            }
        case actionTypes.RESET_TEXT:
            return {
                ...state,
                text: ''
            }
    }
    return state;
};

export default reducer;