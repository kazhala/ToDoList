import * as actionTypes from '../types';

const initialstate = {
    search: '',
};

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_SEARCH:
            return {
                ...state,
                search: action.payload.search
            }
    }
    return state;
};

export default reducer;