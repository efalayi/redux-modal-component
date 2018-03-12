import React from 'react'

const ConfirmModal = ({ closeModal, confirmAction, title, message }) => {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5
          className="modal-title"
        >{title}</h5>
        <button type="button" className="close" aria-label="Close" onClick={closeModal}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>{message}</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={closeModal}>cancel</button>
        <button type="button" className="btn btn-primary" onClick={confirmAction}>continue</button>
      </div>
    </div>
  )
}

export default ConfirmModal
