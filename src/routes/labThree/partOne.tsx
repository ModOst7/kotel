import { Link } from "react-router-dom";
import styles from "../../css/labOne/labOne.module.css";
import commonStyles from "../../css/labOne/partOne.module.css";

import labOne from "../../css/labOne/labOne.module.css"
import partOne from "../../css/labThree/partOne.module.css"

import React, { useState, useEffect } from "react";

export default function PartOne({ scale, theoryVis, setTheoryVis, partOneVis, setPartOneVis, partTwoVis, setPartTwoVis }: { scale: any, theoryVis: any, setTheoryVis: any, partOneVis: any, setPartOneVis: any, partTwoVis: any, setPartTwoVis: any }) {

    const [backButton, setBackButton] = useState(true);
    const [nextButton, setNextButton] = useState(false);

    const [right, setRight] = useState(false);
    const [wrong, setWrong] = useState(false);

    const [elementsVis, setElementsVis] = useState(true);

    const [exerciseComplete, setExerciseComplete] = useState(false);


    const dragStart = (e: any) => {
        e.stopPropagation();
        e.dataTransfer.setData("text", e.target.id);

        e.target.children[0].style.transform = `scale(${scale})`;
        let node = document.getElementById(e.target.id)?.cloneNode(true);
        document.getElementById("drag-coveredup")!.appendChild(node!);
        setTimeout(() => {
            e.target.children[0].style.transform = `scale(1)`;
            node!.parentNode!.removeChild(node!);
        }, 1)

        console.log(e.target.id);
        //e.dataTransfer.setDragImage(node, 50, 50);



        e.stopPropagation();
        console.log(e.target.getAttribute('data-key'));
        //console.log(e.target.children[0]);
        e.dataTransfer.setData("text", e.target.id);
        //console.log(e.dataTransfer.getData("text"));
    }

    const drop = (e: any) => {
        console.log("drop");
        e.preventDefault();
        e.stopPropagation();
        var data = e.dataTransfer.getData("text");
        console.log(data);
        e.target.appendChild(document.getElementById(data));

        let elementCount = document.getElementsByClassName(partOne['drop-container'])[0].getElementsByClassName(partOne['element']).length;
        if (elementCount == 6) {
            setBackButton(false);
            setNextButton(true);
            console.log(true);
        } else {
            setBackButton(true);
            setNextButton(false);
            console.log(false);
        }
    }

    const allowDrop = (e: any) => {
        console.log(e.target.children.length);
        if (e.target.children.length > 0) return;
        e.preventDefault();
        e.stopPropagation();
    }

    const dropBack = (e: any) => {
        console.log("dropBack");
        console.log(e.target.className);
        var data = e.dataTransfer.getData("text");
        console.log(data);
        console.log(partOne["kondensator"]);
        switch (data) {
            case partOne["deaerator"]:
                document.getElementsByClassName(partOne["deaerator"])[0]?.appendChild(document.getElementById(partOne["deaerator"])!);
                break;
            case partOne["gazomazut"]:
                document.getElementsByClassName(partOne["gazomazut"])[0]?.appendChild(document.getElementById(partOne["gazomazut"])!);
                break;
            case partOne["kondensator"]:
                document.getElementsByClassName(partOne["kondensator"])[0]?.appendChild(document.getElementById(partOne["kondensator"])!);
                break;
            case partOne["nasos"]:
                document.getElementsByClassName(partOne["nasos"])[0]?.appendChild(document.getElementById(partOne["nasos"])!);
                break;
            case partOne["par"]:
                document.getElementsByClassName(partOne["par"])[0]?.appendChild(document.getElementById(partOne["par"])!);
                break;
            case partOne["pitatel"]:
                document.getElementsByClassName(partOne["pitatel"])[0]?.appendChild(document.getElementById(partOne["pitatel"])!);
                break;
            case partOne["sbornik"]:
                document.getElementsByClassName(partOne["sbornik"])[0]?.appendChild(document.getElementById(partOne["sbornik"])!);
                break;
            case partOne["vozduh"]:
                document.getElementsByClassName(partOne["vozduh"])[0]?.appendChild(document.getElementById(partOne["vozduh"])!);
                break;
            default:
                console.log('asd')
                break;
        }

        let elementCount = document.getElementsByClassName(partOne['drop-container'])[0].getElementsByClassName(partOne['element']).length;
        if (elementCount == 6) {
            setBackButton(false);
            setNextButton(true);
            console.log(true);
        } else {
            setBackButton(true);
            setNextButton(false);
            console.log(false);
        }
    }

    const allowDropBack = (e: any) => {
        if (e.target.parentNode.parentNode.parentNode.className == partOne['drop-box']) return;
        
        e.preventDefault();        
    }

    const check = (e: any) => {
        let elements = document.getElementsByClassName(partOne['drop-container'])[0].getElementsByClassName(partOne['element']);

        let elementNames = Array.prototype.map.call(elements, (element) => element.getAttribute("data-key"));
        if (elementNames.includes("gazomazut") || elementNames.includes("vozduh")) {
            setWrong(true);
            setTimeout(() => {
                setWrong(false);
            }, 3000)
        } else {
            setRight(true);
            setNextButton(false);
            setElementsVis(false);
            setTimeout(() => {
                setExerciseComplete(true);
                setElementsVis(true);
            }, 500);


            document.getElementById(partOne["for-sbornik"])?.appendChild(document.getElementById(partOne["sbornik"])!);
            document.getElementById(partOne["for-kondensator"])?.appendChild(document.getElementById(partOne["kondensator"])!);
            document.getElementById(partOne["for-nasos"])?.appendChild(document.getElementById(partOne["nasos"])!);
            document.getElementById(partOne["for-pitatel"])?.appendChild(document.getElementById(partOne["pitatel"])!);
            document.getElementById(partOne["big-box"])?.appendChild(document.getElementById(partOne["deaerator"])!);
            document.getElementById(partOne["for-par"])?.appendChild(document.getElementById(partOne["par"])!);
        }

    }

    const nextStep = (e: any) => {
        console.log('asd');
        setPartTwoVis(true);
        setPartOneVis(false);
    }

    useEffect(() => {

    }, [partOneVis])

    return (
        <div className={`${commonStyles['wrapper']} ${partOneVis ? commonStyles['vis'] : ''} `}>
            <div className={styles['container']}>
                <div className={`${commonStyles['main']}`}>
                    <div className={styles['header']}>
                        <img className={styles["header-icon"]} src="./img/menu/header-icon.png" />
                        <div className={styles['header-title']}>
                            <div className={styles['title-one']}>Котельное оборудование ТЭС.<br /> Устройство, эксплуатация, техническое обслуживание. </div>
                            <div className={styles['title-two']}>Электронный практикум</div>
                        </div>
                    </div>
                    <div className={partOne['container']}>
                        <div className={partOne['left']}>
                            <div className={partOne['exercise-title']}>Чтобы собрать схему деаэрации водоподготовительной установки котельного агрегата, переместите ее элементы на активную область экрана.</div>
                            <div className={partOne['exercise-status']}>
                                <div className={`${partOne['message-wrong']} ${wrong ? partOne['vis'] : "ss"} `}>
                                    <img draggable={"false"} className={partOne["image-wrong"]} src="./img/labThree/wrong.png" />
                                    <div className={partOne["text-wrong"]}>Неверно. Попробуйте еще раз!</div>
                                </div>
                                <div className={`${partOne['message-right']} ${right ? partOne['vis'] : "ss"} `}>
                                    <img draggable={"false"} className={partOne["image-right"]} src="./img/labThree/right.png" />
                                    <div className={partOne["text-right"]}>Верно!</div>
                                </div>
                            </div>
                            <div className={partOne['drop-container']}>
                                <div className={partOne['drop-row']}>
                                    <div id={partOne['for-sbornik']} onDrop={drop} onDragOver={allowDrop} className={partOne['drop-box']}></div>
                                    <div id={partOne['for-kondensator']} onDrop={drop} onDragOver={allowDrop} className={partOne['drop-box']}></div>
                                    <div id={partOne['for-nasos']} onDrop={drop} onDragOver={allowDrop} className={partOne['drop-box']}></div>
                                </div>
                                <div className={partOne['drop-row']}>
                                    <div id={partOne['for-pitatel']} onDrop={drop} onDragOver={allowDrop} className={partOne['drop-box']}></div>
                                    <div id={partOne['big-box']} onDrop={drop} onDragOver={allowDrop} className={`${partOne['drop-box']}`} style={{width: '305px', height: '264px'}}></div>
                                    <div id={partOne['for-par']} onDrop={drop} onDragOver={allowDrop} className={partOne['drop-box']}></div>
                                </div>
                            </div>
                        </div>
                        <div className={partOne['right']}>
                            <div className={partOne['box-title']}>Элементы схемы</div>
                            <div onDrop={dropBack} onDragOver={allowDropBack} className={partOne['drag-container']}>
                                <div className={`${partOne['drag-box']} ${partOne['deaerator']}`}>
                                    <div data-key={"deaerator"} id={partOne["deaerator"]} draggable={right ? false : true} onDragStart={dragStart} className={`${partOne['element']} ${elementsVis ? partOne['visible'] : partOne['hidden']}`}>
                                        <div>
                                            <img draggable={"false"} className={partOne["image-over"]} src="./img/labThree/deaerator_OVER.png" />
                                            <img draggable={"false"} className={partOne["image-on"]} src="./img/labThree/deaerator_ON.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${partOne['drag-box']} ${partOne['gazomazut']}`}>
                                    <div data-key={"gazomazut"} id={partOne["gazomazut"]} draggable={right ? false : true} onDragStart={dragStart} className={`${partOne['element']} ${partOne['visible']}`}>
                                        <div>
                                            <img draggable={"false"} className={partOne["image-over"]} src="./img/labThree/gazomazut_OVER.png" />
                                            <img draggable={"false"} className={partOne["image-on"]} src="./img/labThree/gazomazut_ON.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${partOne['drag-box']} ${partOne['kondensator']}`}>
                                    <div data-key={"kondensator"} id={partOne["kondensator"]} draggable={right ? false : true} onDragStart={dragStart} className={`${partOne['element']} ${elementsVis ? partOne['visible'] : partOne['hidden']}`}>
                                        <div>
                                            <img draggable={"false"} className={partOne["image-over"]} src="./img/labThree/kondensator_OVER.png" />
                                            <img draggable={"false"} className={partOne["image-on"]} src="./img/labThree/kondensator_ON.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${partOne['drag-box']} ${partOne['nasos']}`}>
                                    <div data-key={"nasos"} id={partOne["nasos"]} draggable={right ? false : true} onDragStart={dragStart} className={`${partOne['element']} ${elementsVis ? partOne['visible'] : partOne['hidden']}`}>
                                        <div>
                                            <img draggable={"false"} className={partOne["image-over"]} src="./img/labThree/nasos_OVER.png" />
                                            <img draggable={"false"} className={partOne["image-on"]} src="./img/labThree/nasos_ON.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${partOne['drag-box']} ${partOne['par']}`}>
                                    <div data-key={"par"} id={partOne["par"]} draggable={right ? false : true} onDragStart={dragStart} className={`${partOne['element']} ${elementsVis ? partOne['visible'] : partOne['hidden']}`}>
                                        <div>
                                            <img draggable={"false"} className={partOne["image-over"]} src="./img/labThree/par_OVER.png" />
                                            <img draggable={"false"} className={partOne["image-on"]} src="./img/labThree/par_ON.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${partOne['drag-box']} ${partOne['pitatel']}`}>
                                    <div data-key={"pitatel"} id={partOne["pitatel"]} draggable={right ? false : true} onDragStart={dragStart} className={`${partOne['element']} ${elementsVis ? partOne['visible'] : partOne['hidden']}`}>
                                        <div>
                                            <img draggable={"false"} className={partOne["image-over"]} src="./img/labThree/pitatel_OVER.png" />
                                            <img draggable={"false"} className={partOne["image-on"]} src="./img/labThree/pitatel_ON.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${partOne['drag-box']} ${partOne['sbornik']}`}>
                                    <div data-key={"sbornik"} id={partOne["sbornik"]} draggable={right ? false : true} onDragStart={dragStart} className={`${partOne['element']} ${elementsVis ? partOne['visible'] : partOne['hidden']}`}>
                                        <div>
                                            <img draggable={"false"} className={partOne["image-over"]} src="./img/labThree/sbornik_OVER.png" />
                                            <img draggable={"false"} className={partOne["image-on"]} src="./img/labThree/sbornik_ON.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${partOne['drag-box']} ${partOne['vozduh']}`}>
                                    <div data-key={"vozduh"} id={partOne["vozduh"]} draggable={right ? false : true} onDragStart={dragStart} className={`${partOne['element']} ${partOne['visible']}`}>
                                        <div>
                                            <img draggable={"false"} className={partOne["image-over"]} src="./img/labThree/vozduh_OVER.png" />
                                            <img draggable={"false"} className={partOne["image-on"]} src="./img/labThree/vozduh_ON.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={partOne['navigation']}>
                                <div onClick={() => {setPartOneVis(false); setTheoryVis(true); }} className={`${partOne['prev-slide-button']} ${backButton ? partOne['vis'] : ''} `}>{'<'}  НАЗАД</div>
                                <div onClick={check} className={`${partOne['next-slide-button']} ${nextButton ? partOne['vis'] : ''} `}>ДАЛЕЕ  {'>'}</div>
                                <div onClick={nextStep} className={`${partOne['next-slide-button']} ${exerciseComplete ? partOne['vis'] : ''} `}>ДАЛЕЕ  {'>'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['footer']}>
                <div className={`${styles['help']}`}><img className={styles["help-icon"]} src="./img/menu/help.png" /></div>
            </div>
        </div>
    );
}