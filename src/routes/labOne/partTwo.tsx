import { Link } from "react-router-dom";
import styles from "../../css/labOne/labOne.module.css";
import partOne from "../../css/labOne/partOne.module.css";
import partTwo from "../../css/labOne/partTwo.module.css";

import React, { useState, useEffect } from "react";

export default function PartTwo({scale, partOneVis, setPartOneVis, partTwoVis, setPartTwoVis, partThreeVis, setPartThreeVis }: {scale:any, partOneVis: any, setPartOneVis: any, partTwoVis: any, setPartTwoVis: any, partThreeVis: any, setPartThreeVis: any }) {

    const [rightAnswer, setRightAnswer] = useState(false);
    const [wrongAnswer, setWrongAnswer] = useState(false);
    const [completeButton, setCompleteButton] = useState(true);
    const [nextButton, setNextButton] = useState(false);

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

        e.dataTransfer.setDragImage(node, 10, 10);
    }

    const drop = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        var data = e.dataTransfer.getData("text");
        console.log(data);
        e.target.appendChild(document.getElementById(data));
    }

    const allowDrop = (e: any) => {
        console.log(e.target.children.length);
        if (e.target.children.length > 0) return;
        e.preventDefault();
        e.stopPropagation();
    }

    const dropBack = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        var data = e.dataTransfer.getData("text");
        console.log(document.getElementById(data)?.id);
        console.log(e.target.parentNode.id);
        if ((parseInt(e.target.parentNode.id) == parseInt(document.getElementById(data)!.id)) && (e.target.parentNode.getAttribute('data-drop'))) {
            //console.log(e.target.parentNode.getAttribute('data-drop'));
            e.target.parentNode.appendChild(document.getElementById(data));
        }
    }

    const allowDropBack = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const putBack = (e: any) => {
        e.preventDefault();
        let idNum = parseInt(e.target.id);
        document.getElementById(idNum + '-box')?.appendChild(e.target);
        console.log(e.target.id);
    }

    const check = () => {
        let check = true;
        let containers = document.getElementsByClassName(partTwo["circle-container"]);
        for (let i = 0; i < containers.length; i++) {
            let circle = containers[i].children[0];
            if (circle) {
                if (parseInt(circle.id) != parseInt(containers[i].id)) check = false;
            } else {
                check = false;
            }
        }
        console.log(check);
        //check = true; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        if (check) {
            setRightAnswer(true);
            setNextButton(true);
            setCompleteButton(false);
        } else {
            setWrongAnswer(true);
            setTimeout(() => setWrongAnswer(false), 3000);
        }
    }

    const nextPart = () => {
        setPartTwoVis(false);
        setPartThreeVis(true);
    }

    return (
        <div className={`${partTwo['wrapper']} ${partTwoVis ? partTwo['vis'] : ''} `}>
            <div className={styles['container']}>
                <div className={`${partTwo['main']}`}>
                    <div className={styles['header']}>
                        <img className={styles["header-icon"]} src="./img/menu/header-icon.png" />
                        <div className={styles['header-title']}>
                            <div className={styles['title-one']}>?????????????????? ???????????????????????? ??????.<br /> ????????????????????, ????????????????????????, ?????????????????????? ????????????????????????. </div>
                            <div className={styles['title-two']}>?????????????????????? ??????????????????</div>
                        </div>
                    </div>
                    <div className={partTwo['container']}>
                        <div className={partOne['left']}>
                            <div className={partOne['title-one']}>???????????????????????? ???????????? <b>???1</b></div>
                            <div className={partOne['title-two']}><b>?????????????? 2</b></div>
                            <div className={partOne['description']}>?????????????????????? ??????????, ???????????????????????? ???????????????? ???????????????????? ???????????????? ????-87, <br />???? ?????????????????????????????? ?????????????? ???? ??????????????.</div>
                            <div className={partTwo['circles']}>
                                <div className={partTwo['row']}>
                                    <div data-drop={true} onDrop={dropBack} onDragOver={allowDropBack} id={"1-box"} className={partTwo['circle-box']}>
                                        <div className={partTwo['circle-background']}>1</div>
                                        <div id={"1-circ"} onDragStart={dragStart} draggable data-circle={1} className={partTwo['circle']}>
                                            <div>1</div>
                                        </div>
                                    </div>
                                    <div className={partTwo['row-text']}>??? ??????????????</div>
                                </div>
                                <div className={partTwo['row']}>
                                    <div data-drop={true} onDrop={dropBack} onDragOver={allowDropBack} id={"2-box"} className={partTwo['circle-box']}>
                                        <div className={partTwo['circle-background']}>2</div>
                                        <div id={"2-circ"} onDragStart={dragStart} draggable data-circle={2} className={partTwo['circle']}>
                                            <div>2</div>
                                        </div>
                                    </div>
                                    <div className={partTwo['row-text']}>??? ???????????????? ????????????</div>
                                </div>
                                <div className={partTwo['row']}>
                                    <div data-drop={true} onDrop={dropBack} onDragOver={allowDropBack} id={"3-box"} className={partTwo['circle-box']}>
                                        <div className={partTwo['circle-background']}>3</div>
                                        <div id={"3-circ"} onDragStart={dragStart} draggable data-circle={3} className={partTwo['circle']}>
                                            <div>3</div>
                                        </div>
                                    </div>
                                    <div className={partTwo['row-text']}>??? ???????????????????????? ??????????????</div>
                                </div>
                                <div className={partTwo['row']}>
                                    <div data-drop={true} onDrop={dropBack} onDragOver={allowDropBack} id={"4-box"} className={partTwo['circle-box']}>
                                        <div className={partTwo['circle-background']}>4</div>
                                        <div id={"4-circ"} onDragStart={dragStart} draggable data-circle={4} className={partTwo['circle']}>
                                            <div>4</div>
                                        </div>
                                    </div>
                                    <div className={partTwo['row-text']}>??? ?????? ?? ????????????</div>
                                </div>
                                <div className={partTwo['row']}>
                                    <div data-drop={true} onDrop={dropBack} onDragOver={allowDropBack} id={"5-box"} className={partTwo['circle-box']}>
                                        <div className={partTwo['circle-background']}>5</div>
                                        <div id={"5-circ"} onDragStart={dragStart} draggable data-circle={5} className={partTwo['circle']}>
                                            <div>5</div>
                                        </div>
                                    </div>
                                    <div className={partTwo['row-text']}>??? ???????????????? ??????????????????????????????????</div>
                                </div>
                                <div className={partTwo['row']}>
                                    <div data-drop={true} onDrop={dropBack} onDragOver={allowDropBack} id={"6-box"} className={partTwo['circle-box']}>
                                        <div className={partTwo['circle-background']}>6</div>
                                        <div id={"6-circ"} onDragStart={dragStart} draggable data-circle={6} className={partTwo['circle']}>
                                            <div>6</div>
                                        </div>
                                    </div>
                                    <div className={partTwo['row-text']}>??? ???????????????????????? ?????????? ??????????????????????????????????</div>
                                </div>
                                <div className={partTwo['row']}>
                                    <div data-drop={true} onDrop={dropBack} onDragOver={allowDropBack} id={"7-box"} className={partTwo['circle-box']}>
                                        <div className={partTwo['circle-background']}>7</div>
                                        <div id={"7-1-circ"} onDragStart={dragStart} draggable data-circle={7} className={partTwo['circle']}>
                                            <div>7</div>
                                        </div>
                                        <div id={"7-2-circ"} onDragStart={dragStart} draggable data-circle={7} className={partTwo['circle']}>
                                            <div>7</div>
                                        </div>
                                    </div>
                                    <div className={partTwo['row-text']}>??? ?????????????? ??????????????????????</div>
                                </div>
                                <div className={partTwo['row']}>
                                    <div data-drop={true} onDrop={dropBack} onDragOver={allowDropBack} id={"8-box"} className={partTwo['circle-box']}>
                                        <div className={partTwo['circle-background']}>8</div>
                                        <div id={"8-1-circ"} onDragStart={dragStart} draggable data-circle={8} className={partTwo['circle']}>
                                            <div>8</div>
                                        </div>
                                        <div id={"8-2-circ"} onDragStart={dragStart} draggable data-circle={8} className={partTwo['circle']}>
                                            <div>8</div>
                                        </div>
                                    </div>
                                    <div className={partTwo['row-text']}>??? ?????????????????? ????????????????????????????????????????</div>
                                </div>
                                <div className={partTwo['row']}>
                                    <div data-drop={true} onDrop={dropBack} onDragOver={allowDropBack} id={"9-box"} className={partTwo['circle-box']}>
                                        <div className={partTwo['circle-background']}>9</div>
                                        <div id={"9-circ"} onDragStart={dragStart} draggable data-circle={9} className={partTwo['circle']}>
                                            <div>9</div>
                                        </div>
                                    </div>
                                    <div className={partTwo['row-text']}>??? ???????????????? ?????????????????????????? ????????????</div>
                                </div>
                                <div className={partTwo['row']}>
                                    <div data-drop={true} onDrop={dropBack} onDragOver={allowDropBack} id={"10-box"} className={partTwo['circle-box']}>
                                        <div className={partTwo['circle-background']}>10</div>
                                        <div id={"10-circ"} onDragStart={dragStart} draggable data-circle={10} className={partTwo['circle']}>
                                            <div>10</div>
                                        </div>
                                    </div>
                                    <div className={partTwo['row-text']}>??? ?????????????? ??????????</div>
                                </div>
                            </div>
                        </div>
                        <div className={partTwo['center']}>
                            <img className={partTwo["kotel"]} src="./img/labOne/kotel2.png" />
                            <div onDrop={drop} onDragOver={allowDrop} id={"1-cont"} className={`${partTwo["circle-container"]} ${partTwo["circle-container-1"]}`}></div>
                            <div onDrop={drop} onDragOver={allowDrop} id={"2-cont"} className={`${partTwo["circle-container"]} ${partTwo["circle-container-2"]}`}></div>
                            <div onDrop={drop} onDragOver={allowDrop} id={"3-cont"} className={`${partTwo["circle-container"]} ${partTwo["circle-container-3"]}`}></div>
                            <div onDrop={drop} onDragOver={allowDrop} id={"4-cont"} className={`${partTwo["circle-container"]} ${partTwo["circle-container-4"]}`}></div>
                            <div onDrop={drop} onDragOver={allowDrop} id={"5-cont"} className={`${partTwo["circle-container"]} ${partTwo["circle-container-5"]}`}></div>
                            <div onDrop={drop} onDragOver={allowDrop} id={"6-cont"} className={`${partTwo["circle-container"]} ${partTwo["circle-container-6"]}`}></div>
                            <div onDrop={drop} onDragOver={allowDrop} id={"7-1-cont"} className={`${partTwo["circle-container"]} ${partTwo["circle-container-7-1"]}`}></div>
                            <div onDrop={drop} onDragOver={allowDrop} id={"7-2-cont"} className={`${partTwo["circle-container"]} ${partTwo["circle-container-7-2"]}`}></div>
                            <div onDrop={drop} onDragOver={allowDrop} id={"8-1-cont"} className={`${partTwo["circle-container"]} ${partTwo["circle-container-8-1"]}`}></div>
                            <div onDrop={drop} onDragOver={allowDrop} id={"8-2-cont"} className={`${partTwo["circle-container"]} ${partTwo["circle-container-8-2"]}`}></div>
                            <div onDrop={drop} onDragOver={allowDrop} id={"9-cont"} className={`${partTwo["circle-container"]} ${partTwo["circle-container-9"]}`}></div>
                            <div onDrop={drop} onDragOver={allowDrop} id={"10-cont"} className={`${partTwo["circle-container"]} ${partTwo["circle-container-10"]}`}></div>
                        </div>
                        <div className={partOne['right']}>
                            <div className={partOne['messages']}>
                                <div className={`${partOne['right-answer']} ${rightAnswer ? partOne['vis'] : ''} `}>?????????????? ?????????????????? ??????????</div>
                                <div className={`${partOne['wrong-answer']} ${wrongAnswer ? partOne['vis'] : ''} `}>??????????????. ???????????????????? ?????? ??????!</div>
                            </div>
                            <div onClick={check} className={`${partTwo['complete-button']} ${completeButton ? partTwo['vis'] : ''} `}>????????????</div>
                            <div onClick={nextPart} className={`${partTwo['next-button']} ${nextButton ? partTwo['vis'] : ''} `}>??????????</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['footer']}>
                <div className={styles['help']}><img className={styles["help-icon"]} src="./img/menu/help.png" /></div>
            </div>
        </div>
    );
}