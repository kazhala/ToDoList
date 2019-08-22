import * as actionTypes from '../types';

const initialstate = {
    display: 'unfinished',
};

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_DISPLAY:
            return {
                ...state,
                display: action.payload.display
            }
    }
    return state;
};

export default reducer;