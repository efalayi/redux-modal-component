import ActionTypes from '../constants/ActionTypes'

export const showModal = ({ modalProps, modalType }) => dispatch => {
  dispatch({
    type: ActionTypes.SHOW_MODAL,
    modalProps,
    modalType
  })
}

export const hideModal = () => dispatch => {
  dispatch({
    type: ActionTypes.HIDE_MODAL
  })
}
