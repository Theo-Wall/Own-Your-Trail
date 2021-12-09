import React, { useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import "./Modal.css"


const Modal = props => {
    const closeOnEscapeKeyDown = (e) => {
        if ((e.charCode || e.keyCode) === 27 ) {
            props.onClose()
        }
    }

    useEffect( () => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    })
    
    return (
        <CSSTransition
            in={props.show}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }}
        >
            <div className = 'modal' onClick={props.onClose}>
                <div className = "modal-content" onClick={e => e.stopPropagation()}>
                    <div className = "modal-header">
                        {props.title}
                    </div>
                    <div className = "modal-body">
                        {props.children}
                    </div>
                    {/* <div className = "modal-footer">
                        {/* <button onClick = {props.onClose} className="button">Close</button>
                        <button onClick = {props.onSubmit} className="button">Submit</button>
                        {props.button1}
                        {props.button2}
                    </div> */}
                </div>
            </div>
        </CSSTransition>
    )
}

export default Modal