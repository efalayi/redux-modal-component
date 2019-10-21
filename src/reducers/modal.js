import ActionTypes from '../constants/ActionTypes'

const initialState = {
  modalType: null,
  modalProps: {
    open: false
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_MODAL:
      return {
        modalProps: action.modalProps,
        modalType: action.modalType,
        type: action.type
      }
    case ActionTypes.HIDE_MODAL:
      return initialState
    default:
      return state
  }
}
