import { Link } from "react-router-dom";
import basedStyles from "../../css/Baza.module.css";

import React, { useState, useEffect, useMemo } from "react";
import Theory from "./theory";
import Workplace from "./workplace";


export default function LabTwo() {

    const [scale, setScale] = useState(1)

    const [items, setItems] = useState([false, false, false, false, false, false, false, false]);
    const [moving, setMoving] = useState(false);

    const [theoryVis, setTheoryVis] = useState(true);
    const [workplace, setWorkplace] = useState(false);
    const [partOneVis, setPartOneVis] = useState(false);
    const [partTwoVis, setPartTwoVis] = useState(false);
    const [partThreeVis, setPartThreeVis] = useState(false);
    //const date = new Date();
    const date = useMemo(() => new Date(), []);

    useEffect(() => {
        scalable(setScale)
        window.onresize = () => {
            scalable(setScale)
        }
    })


    return (
        <>

            <div style={{ "transform": `scale(${scale})`, width: 1920, height: 969, transformOrigin: "top left" }} className={basedStyles['main']}>
                <Theory theoryVis={theoryVis} setTheoryVis={setTheoryVis} workplace={workplace} setWorkplace={setWorkplace} />
                <Workplace theoryVis={theoryVis} setTheoryVis={setTheoryVis} workplace={workplace} setWorkplace={setWorkplace} today={date}/>
                {/*<PartOne theoryVis={theoryVis} setTheoryVis={setTheoryVis} partOneVis={partOneVis} setPartOneVis={setPartOneVis} partTwoVis={partTwoVis} setPartTwoVis={setPartTwoVis}  />
                <PartTwo partOneVis={partOneVis} setPartOneVis={setPartOneVis} partTwoVis={partTwoVis} setPartTwoVis={setPartTwoVis} partThreeVis={partThreeVis} setPartThreeVis={setPartThreeVis}  />
    <PartThree partTwoVis={partTwoVis} setPartTwoVis={setPartTwoVis} partThreeVis={partThreeVis} setPartThreeVis={setPartThreeVis}  />*/}

                {/*<div className={styles['wrapper']}>
                    <div className={styles['container']}>
                        <div className={`${styles['main']} ${moving ? styles['moved'] : ''} `}>
                            <div className={styles['header']}>
                                <img className={styles["header-icon"]} src="./img/menu/header-icon.png" />
                                <div className={styles['header-title']}>
                                    <div className={styles['title-one']}>Котельное оборудование ТЭС.<br /> Устройство, эксплуатация, техническое обслуживание. </div>
                                    <div className={styles['title-two']}>Электронный практикум</div>
                                </div>
                            </div>         
                        </div>                
                    </div>
                    <div className={styles['footer']}>
                        <div className={styles['help']}><img className={styles["help-icon"]} src="./img/menu/help.png" /></div>
                    </div>
    </div>*/}
            </div>
        </>
    );
}

const scalable = (setScale: React.Dispatch<React.SetStateAction<number>>) => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scaleWidth = width / 1920
    const scaleHeight = height / 969


    if (scaleWidth > scaleHeight) {
        setScale(scaleHeight)
    } else {
        setScale(scaleWidth)
    }


}