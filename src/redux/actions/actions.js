import {types} from "../../types";

export const changeTextAction = () => {
    return {
        type: types.CHANGE_TEXT,
    }
}

export const clearTextAction = () => {
    return {
        type: types.CLEAR_TEXT,
    }
}

export const showAndHideText = () => {
    return function (dispatch) {
        dispatch(changeTextAction());
        setTimeout(() => {
            dispatch(clearTextAction());
        }, 3000)
    }
}