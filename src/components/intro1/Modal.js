function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div className="modal-box">
      <div className="modal">
        <p>Are You Sure?</p>
        <div className="btn-box">
          <button className="btn cancel" onClick={props.onCancel}>
            Cancel
          </button>
          <button className="btn confirm" onClick={confirmHandler}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
