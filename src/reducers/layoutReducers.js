import { LAYOUT_ADDTASKFORM_TOGGLE } from '../constants/layoutConstants';

export const layoutAddTaskFormReducer = (state = { isVisible: false }, action) => {
  switch (action.type) {
    case LAYOUT_ADDTASKFORM_TOGGLE:
      return { isVisible: action.payload };
    default:
      return state;
  }
};
