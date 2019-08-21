import React, { useState, useEffect } from "react";
import styles from "./index.less";

const Item = ({ handleClick, text }) => {
    return (
        <li className={styles.item} onClick={handleClick}>
            {text}
        </li>
    );
};
const Select = ({
    list = [],
    allowClear = false,
    width = 200,
    onChange = () => {}
}) => {
    const [value, setVal] = useState("");
    const [open, setOpen] = useState(false);

    const showDrop = () => {
        setOpen(!open);
    };
    const handleClick = text => {
        setVal(text);
        setOpen(!open);
    };
    const clickOtherPlace = e => {
        if (e.path.includes(styles.wraper)) {
            console.log("includes");
        }
    };
    const clickClear = e => {
        e.stopPropagation();
        setVal("");
    };

    useEffect(() => {
        onChange(value);
    }, [onChange, value]);

    // useEffect(() => {
    //     window.addEventListener('click', clickOtherPlace)
    //     return () => {
    //         window.removeEventListener('click', clickOtherPlace)
    //     }
    // }, [])

    return (
        <>
            <div
                style={{ width: `${width}px` }}
                className={[styles.wraper, open ? styles.open : ""].join(" ")}
            >
                <div className={styles.selection} onClick={showDrop}>
                    <div className={styles.render}>
                        <div className={styles.value}>{value}</div>
                    </div>
                    {value && allowClear ? (
                        <span className={styles.clear} onClick={clickClear}>
                            <i className="iconfont icon-close-circle-o" />
                        </span>
                    ) : (
                        <></>
                    )}
                    <span className={styles.arrow}>
                        <i className="iconfont icon-jiantou_down" />
                    </span>
                </div>
                <ul className={[styles.dropdown].join(" ")}>
                    {list.map(item => (
                        <Item
                            handleClick={() => {
                                handleClick(item.text);
                            }}
                            key={item.id}
                            {...item}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Select;
