import * as actionTypes from './types';

export const addtodo = (todo) => {
    return {
        type: actionTypes.ADD_TODO,
        payload: {
            key: todo.key,
            spec: todo.spec,
            complete: todo.complete
        }
    }
}

export const completetodo = (key) => {
    return {
        type: actionTypes.COMPLETE_TODO,
        payload: { key: key }
    }
}

export const removetodo = (todo) => {
    return {
        type: actionTypes.REMOVE_TODO,
        payload: { todo: todo }
    }
}

export const handleall = (option) => {
    return {
        type: actionTypes.HANDLE_ALL,
        payload: { option: option }
    }
}

export const changedisplay = (display) => {
    return {
        type: actionTypes.CHANGE_DISPLAY,
        payload: { display: display }
    }
}

export const updatetext = (text) => {
    return {
        type: actionTypes.UPDATE_TEXT,
        payload: { text: text }
    }
}

export const resettext = () => {
    return {
        type: actionTypes.RESET_TEXT
    }
}

export const updatesearch = (search) => {
    return {
        type: actionTypes.UPDATE_SEARCH,
        payload: { search: search }
    }
}