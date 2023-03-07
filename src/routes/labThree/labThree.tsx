import { Link } from "react-router-dom";
import styles from "../../css/labOne/labOne.module.css";

import React, { useState, useEffect } from "react";
import Theory from "./theory";

import PartOne from "./partOne";
import PartTwo from "./partTwo";

export default function LabThree() {

    const [scale, setScale] = useState(1)

    const [items, setItems] = useState([false, false, false, false, false, false, false, false]);
    const [moving, setMoving] = useState(false);

    const [theoryVis, setTheoryVis] = useState(true);
    const [partOneVis, setPartOneVis] = useState(false);
    const [partTwoVis, setPartTwoVis] = useState(false);
    const [partThreeVis, setPartThreeVis] = useState(false);

    useEffect(() => {
        scalable(setScale)
        window.onresize = () => {
            scalable(setScale)
        }
    })

    const handleClick = (e: any) => {
        const newItems = items.map((item, index) => {
            if (e.target.getAttribute("data-key") == index) {
                return true;
            } else return false;
        })
        setMoving(true);
        setItems(newItems);
    }

    return (
        <>

            <div style={{ "transform": `scale(${scale})`, width: 1920, height: 969, transformOrigin: "top left" }} className={styles['main']}>
                <Theory theoryVis={theoryVis} setTheoryVis={setTheoryVis} partOneVis={partOneVis} setPartOneVis={setPartOneVis} />
                <PartOne scale={scale} theoryVis={theoryVis} setTheoryVis={setTheoryVis} partOneVis={partOneVis} setPartOneVis={setPartOneVis} partTwoVis={partTwoVis} setPartTwoVis={setPartTwoVis}  />
                <PartTwo partOneVis={partOneVis} setPartOneVis={setPartOneVis} partTwoVis={partTwoVis} setPartTwoVis={setPartTwoVis} partThreeVis={partThreeVis} setPartThreeVis={setPartThreeVis}  />
    
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