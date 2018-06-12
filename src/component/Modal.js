
//-----------------------------------------------------------模态框组件
import React, { Component } from "react";
import ReactDom from "react-dom";
import "./Modal.css";
class Modal extends Component {
    constructor() {
        super();
        this.container = document.querySelector('#root');
    }
    render() {
        return ReactDom.createPortal(this.props.children, this.container);
    }
}

export default class ModelPage extends Component {
    constructor() {
        super();
        this.state = { show: false };
    }
    render() {
        return (
            <div>
                <button onClick={() => { this.setState({ show: !this.state.show }) }}>显示</button>
                {
                    this.state.show ? <Modal>
                        <div className="modal-container">
                            <div className="modal-content">
                                显示模态窗口
                        </div>
                        </div>
                    </Modal> : null
                }
            </div >
        )
    }
}

