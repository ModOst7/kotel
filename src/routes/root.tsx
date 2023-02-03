import { Link } from "react-router-dom";
import styles from "../css/Root.module.css";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    changeFirstName,
    changeLastName,
    selectFullname,
} from "../features/fullname/fullnameSlice";

export default function Root() {
    const fullname = useSelector(selectFullname);
    const dispatch = useDispatch();

    const [scale, setScale] = useState(1)
    useEffect(() => {
        scalable(setScale)
        window.onresize = () => {
            scalable(setScale)
        }
    })

    const checkFullname = (e: any) => {
        if (!fullname.firstName || !fullname.lastName) {
            e.preventDefault();
            if (!fullname.firstName) {
                (document.getElementById('first-name') as HTMLInputElement).reportValidity();
            }
            if (!fullname.lastName) {
                (document.getElementById('last-name') as HTMLInputElement).reportValidity();
            }
        }
    }

    return (
        <>

            <div style={{ "transform": `scale(${scale})`, width: 1920, height: 969, transformOrigin: "top left" }} className={styles['main']}>
                <div className={styles['container']}>
                    <div className={styles['section']}>
                        <div className={styles['title-one']}>
                            Котельное оборудование ТЭС. <br />Устройство, эксплуатация, <br />техническое обслуживание.
                        </div>
                        <div className={styles['title-two']}>Электронный практикум</div>
                        <div className={styles['form']}>
                            <div className={styles['block-name']}>
                                <div className={styles["label-name"]}>Имя:</div>
                                <input
                                    id="first-name"
                                    type="text"
                                    className={styles["first-name"]}
                                    required
                                    name="firstname"
                                    value={fullname.firstName}
                                    placeholder=""
                                    onChange={(e) => {
                                        dispatch(changeFirstName(e.target.value));
                                    }}
                                />
                            </div>
                            <div className={styles['block-name']}>
                                <div className={styles["label-name"]}>Фамилия:</div>
                                <input
                                    id="last-name"
                                    type="text"
                                    required
                                    name="lastName"
                                    value={fullname.lastName}
                                    className={styles["last-name"]}
                                    placeholder=""
                                    onChange={(e) => {
                                        dispatch(changeLastName(e.target.value));
                                    }}
                                />
                            </div>
                            <Link to={`/menu/`} onClick={checkFullname}>
                                <div className={styles['button-container']}>
                                    <button type="submit" className={styles["accept-button"]} >ПОДТВЕРДИТЬ</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const scalable = (setScale: React.Dispatch<React.SetStateAction<number>>) => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scaleWidth = width / 1920
    const scaleHeight = height / 969

    console.log(width, height)

    if (scaleWidth > scaleHeight) {
        setScale(scaleHeight)
    } else {
        setScale(scaleWidth)
    }


}