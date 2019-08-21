import React, { Component } from 'react';
import './index.less';
import styles from './index.less'
class Tooltip extends Component {
    render() {
        return (<>
            <div className={styles.box}>
                <div className={styles.top}>
                    <button tooltip="上边" theme="light">上边</button>
                </div>
                <div className={styles.left}>
                    <button tooltip="左边" placement="left">左边</button>
                </div>
                <div className={styles.right}>
                    <button tooltip="右边" placement="right">右边</button>
                </div>
                <div className={styles.bottom}>
                    <button tooltip="下边" placement="bottom">下边</button>
                </div>
            </div>
        </>
            
        );
    }
}

export default Tooltip;