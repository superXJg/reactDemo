import React, { Component } from 'react';

class Tooltip extends Component {
    render() {
        return (
            <div className="box">
                <div className="top">
                    <button tooltip="上边"></button>
                </div>
                <div className="left">
                    <button tooltip="左边"></button>
                </div>
                <div className="right">
                    <button tooltip="右边"></button>
                </div>
                <div className="bottom">
                    <button tooltip="下边"></button>
                </div>
            </div>
        );
    }
}

export default Tooltip;