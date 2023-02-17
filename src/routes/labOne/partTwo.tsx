import { Link } from "react-router-dom";
import styles from "../../css/labOne/labOne.module.css";
import partOne from "../../css/labOne/partOne.module.css";
import partTwo from "../../css/labOne/partTwo.module.css";

import React, { useState, useEffect } from "react";

export default function PartTwo({ partOneVis, setPartOneVis, partTwoVis, setPartTwoVis, partThreeVis, setPartThreeVis }: { partOneVis: any, setPartOneVis: any, partTwoVis: any, setPartTwoVis: any, partThreeVis: any, setPartThreeVis: any}) {

    const [rightAnswer, setRightAnswer] = useState(false);
    const [wrongAnswer, setWrongAnswer] = useState(false);
    const [completeButton, setCompleteButton] = useState(true);
    const [nextButton, setNextButton] = useState(false);

    const dragStart = (e: any) => {
        e.stopPropagation();
        e.dataTransfer.setData("text", e.target.id);
        console.log(e.dataTransfer.getData("text"));
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

    const dropBack = (e:any) => {
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

    const allowDropBack = (e:any) => {
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
                            <div className={styles['title-one']}>Котельное оборудование ТЭС.<br /> Устройство, эксплуатация, техническое обслуживание. </div>
                            <div className={styles['title-two']}>Электронный практикум</div>
                        </div>
                    </div>
                    <div className={partTwo['container']}>
                        <div className={partOne['left']}>
                            <div className={partOne['title-one']}>Лабораторная работа <b>№1</b></div>
                            <div className={partOne['title-two']}><b>Задание 2</b></div>
                            <div className={partOne['description']}>Переместите цифры, обозначающие элементы котельного агрегата ТП-87, <br />на соответствующие выноски на рисунке.</div>
                            <div className={partTwo['circles']}>
                                <div className={partTwo['row']}>
                                    <div data-drop={true} onDrop={dropBack} onDragOver={allowDropBack} id={"1-box"} className={partTwo['circle-box']}><div className={partTwo['circle-background']}>1</div><div id={"1-circ"} onDragStart={dragStart} draggable data-circle={1} className={partTwo['circle']}>1</div></div>
                                    <div className={partTwo['row-text']}>– барабан</div>
                                </div>
                                <div className={partTwo['row']}>
                                    <div data-drop={true} onDrop={dropBack} onDragOver={allowDropBack} id={"2-box"} className={partTwo['circle-box']}><div className={partTwo['circle-background']}>2</div><div id={"2-circ"} onDragStart={dragStart} draggable data-circle={2} className={partTwo['circle']}>2</div></div>
                                    <div className={partTwo['row-text']}>– топочная камера</div>
                                </div>
                                <div className={partTwo['row']}>
                                    <div data-drop={true} onDrop={dropBack} onDragOver={allowDropBack} id={"3-box"} className={partTwo['circle-box']}><div className={partTwo['circle-background']}>3</div><div id={"3-circ"} onDragStart={dragStart} draggable data-circle={3} className={partTwo['circle']}>3</div></div>
                                    <div className={partTwo['row-text']}>– пылеугольные горелки</div>
                                </div>
                                <div className={partTwo['row']}>
                                    <div data-drop={true} onDrop={dropBack} onDragOver={allowDropBack} id={"4-box"} className={partTwo['circle-box']}><div className={partTwo['circle-background']}>4</div><div id={"4-circ"} onDragStart={dragStart} draggable data-circle={4} className={partTwo['circle']}>4</div></div>
                                    <div className={partTwo['row-text']}>– под с леткой</div>
                                </div>
                                <div className={partTwo['row']}>
                                    <div data-drop={true} onDrop={dropBack} onDragOver={allowDropBack} id={"5-box"} className={partTwo['circle-box']}><div className={partTwo['circle-background']}>5</div><div id={"5-circ"} onDragStart={dragStart} draggable data-circle={5} className={partTwo['circle']}>5</div></div>
                                    <div className={partTwo['row-text']}>– ширмовый пароперегреватель</div>
                                </div>
                                <div className={partTwo['row']}>
                                    <div data-drop={true} onDrop={dropBack} onDragOver={allowDropBack} id={"6-box"} className={partTwo['circle-box']}><div className={partTwo['circle-background']}>6</div><div id={"6-circ"} onDragStart={dragStart} draggable data-circle={6} className={partTwo['circle']}>6</div></div>
                                    <div className={partTwo['row-text']}>– конвективная часть пароперегревателя</div>
                                </div>
                                <div className={partTwo['row']}>
                                    <div data-drop={true} onDrop={dropBack} onDragOver={allowDropBack} id={"7-box"} className={partTwo['circle-box']}><div className={partTwo['circle-background']}>7</div><div id={"7-1-circ"} onDragStart={dragStart} draggable data-circle={7} className={partTwo['circle']}>7</div><div onContextMenu={putBack} id={"7-2-circ"} onDragStart={dragStart} draggable data-circle={7} className={partTwo['circle']}>7</div></div>
                                    <div className={partTwo['row-text']}>– водяной экономайзер</div>
                                </div>
                                <div className={partTwo['row']}>
                                    <div data-drop={true} onDrop={dropBack} onDragOver={allowDropBack} id={"8-box"} className={partTwo['circle-box']}><div className={partTwo['circle-background']}>8</div><div id={"8-1-circ"} onDragStart={dragStart} draggable data-circle={8} className={partTwo['circle']}>8</div><div onContextMenu={putBack} id={"8-2-circ"} onDragStart={dragStart} draggable data-circle={8} className={partTwo['circle']}>8</div></div>
                                    <div className={partTwo['row-text']}>– трубчатый воздухоподогреватель</div>
                                </div>
                                <div className={partTwo['row']}>
                                    <div data-drop={true} onDrop={dropBack} onDragOver={allowDropBack} id={"9-box"} className={partTwo['circle-box']}><div className={partTwo['circle-background']}>9</div><div id={"9-circ"} onDragStart={dragStart} draggable data-circle={9} className={partTwo['circle']}>9</div></div>
                                    <div className={partTwo['row-text']}>– выносной сепарационный циклон</div>
                                </div>
                                <div className={partTwo['row']}>
                                    <div data-drop={true} onDrop={dropBack} onDragOver={allowDropBack} id={"10-box"} className={partTwo['circle-box']}><div className={partTwo['circle-background']}>10</div><div id={"10-circ"} onDragStart={dragStart} draggable data-circle={10} className={partTwo['circle']}>10</div></div>
                                    <div className={partTwo['row-text']}>– пережим топки</div>
                                </div>
                            </div>
                        </div>
                        <div className={partOne['center']}>
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
                                <div className={`${partOne['right-answer']} ${rightAnswer ? partOne['vis'] : ''} `}>Задание выполнено верно</div>
                                <div className={`${partOne['wrong-answer']} ${wrongAnswer ? partOne['vis'] : ''} `}>Неверно. Попробуйте еще раз!</div>
                            </div>
                            <div onClick={check} className={`${partTwo['complete-button']} ${completeButton ? partTwo['vis'] : ''} `}>ГОТОВО</div>
                            <div onClick={nextPart} className={`${partTwo['next-button']} ${nextButton ? partTwo['vis'] : ''} `}>ДАЛЕЕ</div>
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