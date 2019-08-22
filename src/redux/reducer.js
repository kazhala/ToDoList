import * as actionTypes from './types';

const initialstate = {
    task: [],
    search: ''
};

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return {
                ...state,
                task: state.task.concat({
                    key: action.payload.key,
                    spec: action.payload.spec,
                    complete: action.payload.complete
                })
            }
        case actionTypes.COMPLETE_TODO:
            let tempArr = state.task.slice();
            let updatedArr = tempArr.map(todo => {
                if (todo.key === action.payload.key) {
                    return ({
                        key: todo.key,
                        spec: todo.spec,
                        complete: !todo.complete
                    })
                } else {
                    return todo;
                }
            })
            return {
                ...state,
                task: updatedArr,
            }
        case actionTypes.REMOVE_TODO:
            let temptask = state.task.slice();
            let index = temptask.indexOf(action.payload.todo);
            temptask.splice(index, 1);
            return {
                ...state,
                task: temptask,
            }
        case actionTypes.HANDLE_ALL:
            let allArr = [];
            if (action.payload.option === "complete") {
                allArr = state.task.map(todo => {
                    if (!todo.complete) {
                        return ({
                            key: todo.key,
                            spec: todo.spec,
                            complete: !todo.complete
                        });
                    } else {
                        return todo;
                    }
                });
            } else if (action.payload.option === "remove") {
                allArr = state.task.filter(todo => !todo.complete)
            }
            return {
                ...state,
                task: allArr
            }
    }
    return state;
};

export default reducer;