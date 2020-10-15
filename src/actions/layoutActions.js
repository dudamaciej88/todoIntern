import {LAYOUT_ADDTASKFORM_TOGGLE} from '../constants/layoutConstants';

export const toggleAddTaskForm = (value) => (dispatch) => {
    dispatch({type: LAYOUT_ADDTASKFORM_TOGGLE, payload: value})
}