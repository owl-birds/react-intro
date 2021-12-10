import { useState } from "react";
import Modal from "./Modal";
// import Backdrop from "./Backdrop";

function Card(props) {
    // start the state
    // initial state : false
    const [modelIsOpen, setModelIsOpen] = useState(false);
    // react hook only can be called only
    // in react compoonents function
    // setModelIsOpen: is a function

    // state is important for ur apps
    // for ex : cahnging element , changing screen or etc

    function deleteHandler() {
        // alert("DELETED");
        // alert(props.todo);
        setModelIsOpen(true);
    }
    function closeModal() {
        setModelIsOpen(false);
    }
    return (
        <div className="card">
            <h2 className="todo">{ props.todo }</h2>
            <div>
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {modelIsOpen ? <Modal onCancel={closeModal} onConfirm={closeModal}/> : null}
            {/* {modelIsOpen && <Modal />} */}
        </div>
    )
}
export default Card;