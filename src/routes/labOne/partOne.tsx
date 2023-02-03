import { Link } from "react-router-dom";
import styles from "../../css/labOne/labOne.module.css";
import theory from "../../css/labOne/theory.module.css";
import partOne from "../../css/labOne/partOne.module.css";

import React, { useState, useEffect } from "react";

export default function PartOne({ theoryVis, setTheoryVis, partOneVis, setPartOneVis, partTwoVis, setPartTwoVis }: { theoryVis: any, setTheoryVis: any, partOneVis: any, setPartOneVis: any, partTwoVis:any, setPartTwoVis:any }) {
    
    const [rightAnswer, setRightAnswer] = useState(false);
    const [wrongAnswer, setWrongAnswer] = useState(false);
    const [completeButton, setCompleteButton] = useState(true);
    const [nextButton, setNextButton] = useState(false);

    const [puzzles, setPuzzles] = useState([
        {
            id: 1,
            key: 1,
            x: 25,
            y: 0,
            rotation: 90
        },
        {
            id: 6,
            key: 6,
            x: 25,
            y: 12.5,
            rotation: 0
        },
        {
            id: 13,
            key: 13,
            x: 75,
            y: 25,
            rotation: 90
        },
        {
            id: 2,
            key: 2,
            x: 50,
            y: 0,
            rotation: 0
        },
        {
            id: 3,
            key: 3,
            x: 75,
            y: 0,
            rotation: 0
        },
        {
            id: 4,
            key: 4,
            x: 100,
            y: 0,
            rotation: 270
        },
        {
            id: 7,
            key: 7,
            x: 50,
            y: 12.5,
            rotation: 180
        },
        {
            id: 9,
            key: 9,
            x: 100,
            y: 12.5,
            rotation: 270
        },
        {
            id: 10,
            key: 10,
            x: 0,
            y: 25,
            rotation: 0
        },
        {
            id: 32,
            key: 32,
            x: 50,
            y: 75,
            rotation: 270
        },
        {
            id: 11,
            key: 11,
            x: 25,
            y: 25,
            rotation: 90
        },
        {
            id: 12,
            key: 12,
            x: 50,
            y: 25,
            rotation: 0
        },
        {
            id: 15,
            key: 15,
            x: 0,
            y: 37.5,
            rotation: 0
        },
        {
            id: 0,
            key: 0,
            x: 0,
            y: 0,
            rotation: 0
        },
        {
            id: 22,
            key: 22,
            x: 50,
            y: 50,
            rotation: 90
        },
        {
            id: 16,
            key: 16,
            x: 25,
            y: 37.5,
            rotation: 180
        },
        {
            id: 17,
            key: 17,
            x: 50,
            y: 37.5,
            rotation: 0
        },
        {
            id: 18,
            key: 18,
            x: 75,
            y: 37.5,
            rotation: 270
        },
        {
            id: 35,
            key: 35,
            x: 0,
            y: 87.5,
            rotation: 180
        },
        {
            id: 19,
            key: 19,
            x: 100,
            y: 37.5,
            rotation: 90
        },
        {
            id: 8,
            key: 8,
            x: 75,
            y: 12.5,
            rotation: 0
        },
        {
            id: 21,
            key: 21,
            x: 25,
            y: 50,
            rotation: 90
        },
        {
            id: 44,
            key: 44,
            x: 100,
            y: 100,
            rotation: 180
        },
        {
            id: 23,
            key: 23,
            x: 75,
            y: 50,
            rotation: 90
        },
        {
            id: 5,
            key: 5,
            x: 0,
            y: 12.5,
            rotation: 0
        },
        {
            id: 24,
            key: 24,
            x: 100,
            y: 50,
            rotation: 0
        },
        {
            id: 43,
            key: 43,
            x: 75,
            y: 100,
            rotation: 90
        },
        {
            id: 26,
            key: 26,
            x: 25,
            y: 62.5,
            rotation: 0
        },
        {
            id: 28,
            key: 28,
            x: 75,
            y: 62.5,
            rotation: 270
        },
        {
            id: 14,
            key: 14,
            x: 100,
            y: 25,
            rotation: 180
        },
        {
            id: 29,
            key: 29,
            x: 100,
            y: 62.5,
            rotation: 270
        },
        {
            id: 30,
            key: 30,
            x: 0,
            y: 75,
            rotation: 0
        },
        {
            id: 31,
            key: 31,
            x: 25,
            y: 75,
            rotation: 180
        },
        {
            id: 33,
            key: 33,
            x: 75,
            y: 75,
            rotation: 0
        },
        {
            id: 27,
            key: 27,
            x: 50,
            y: 62.5,
            rotation: 0
        },
        {
            id: 37,
            key: 37,
            x: 50,
            y: 87.5,
            rotation: 0
        },
        {
            id: 38,
            key: 38,
            x: 75,
            y: 87.5,
            rotation: 270
        },
        {
            id: 20,
            key: 20,
            x: 0,
            y: 50,
            rotation: 0
        },
        {
            id: 39,
            key: 39,
            x: 100,
            y: 87.5,
            rotation: 900
        },
        {
            id: 40,
            key: 40,
            x: 0,
            y: 100,
            rotation: 180
        },
        {
            id: 25,
            key: 25,
            x: 0,
            y: 62.5,
            rotation: 270
        },
        {
            id: 41,
            key: 41,
            x: 25,
            y: 100,
            rotation: 0
        },
        {
            id: 34,
            key: 34,
            x: 100,
            y: 75,
            rotation: 90
        },
        {
            id: 42,
            key: 42,
            x: 50,
            y: 100,
            rotation: 0
        },
        {
            id: 36,
            key: 36,
            x: 25,
            y: 87.5,
            rotation: 270
        },
        
    ]);



    const dragStart = (e: any) => {
        e.stopPropagation();
        console.log(e.target.children[0]);
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

    const dropBack = (e: any) => {
        if ((e.target.id == "puzzles-bank") || (e.target.parentNode.id == "puzzles-bank") || (e.target.parentNode.parentNode.id == "puzzles-bank")) {
            console.log(e.target.parentNode.id);
            console.log(e.target.parentNode.parentNode.id);
            console.log(e.target.id);
            var data = e.dataTransfer.getData("text");

            let target = document.querySelector(`.${partOne['puzzles-bank']}`);
            let puzzle = document.getElementById(data);
            if (target && puzzle) target.appendChild(puzzle);
            //e.target.appendChild(document.getElementById(data));
        }
    }

    const allowDrop = (e: any) => {
        console.log(e.target.children.length);
        if (e.target.children.length > 0) return;
        e.preventDefault();
        e.stopPropagation();
    }

    const allowDropBack = (e: any) => {
        e.preventDefault();
    }

    const rotate = (e: any) => {
        console.log(e.target.getAttribute('data-key'));
        if (e.deltaY > 0) {
            rotateRight(e.target.getAttribute('data-key'))
        } else {
            rotateLeft(e.target.getAttribute('data-key'))
        }
    }

    const rotateRight = (id: any) => {
        const newState = [...puzzles];
        newState.forEach(element => {
            if (element.id == id) {
                element.rotation += 90;
            }
        })
        setPuzzles(newState);
    }

    const rotateLeft = (id: any) => {
        const newState = [...puzzles];
        newState.forEach(element => {
            if (element.id == id) {
                element.rotation -= 90;
            }
        })
        setPuzzles(newState);
    }

    const checkPuzzle = () => {
        console.log(puzzles)
        let check = true;
        let containers = document.getElementsByClassName('container-selector');
        if (containers) {
            for (let i = 0; i < containers.length; i++) {
                let puzzle = containers[i].children[0];
                if (puzzle) {
                    //console.log(puzzle.id + ' ' + containers[i].id + ' ' + puzzles[Number(puzzle.id)].rotation);
                    if ((parseInt(puzzle.id) != parseInt(containers[i].id)) || (Math.abs(puzzles[Number(puzzle.id)].rotation%360) != 0)) check = false;
                } else {
                    check = false;
                }
            }
        }
        console.log(check);
        check = true; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
        setPartOneVis(false);
        setPartTwoVis(true);
    }

    return (
        <div className={`${partOne['wrapper']} ${partOneVis ? partOne['vis'] : ''} `}>
            <div className={styles['container']}>
                <div className={`${partOne['main']}`}>
                    <div className={styles['header']}>
                        <img className={styles["header-icon"]} src="./img/menu/header-icon.png" />
                        <div className={styles['header-title']}>
                            <div className={styles['title-one']}>Котельное оборудование ТЭС.<br /> Устройство, эксплуатация, техническое обслуживание. </div>
                            <div className={styles['title-two']}>Электронный практикум</div>
                        </div>
                    </div>
                    <div className={partOne['container']}>
                        <div className={partOne['left']}>
                            <div className={partOne['title-one']}>Лабораторная работа <b>№1</b></div>
                            <div className={partOne['title-two']}><b>Котельный агрегат ТП-87</b></div>
                            <div className={partOne['description']}>Соберите правильно пазл и нажмите ГОТОВО.</div>
                            <div id={"puzzles-bank"} draggable={false} onDrop={dropBack} onDragOver={allowDropBack} className={partOne['puzzles-bank']}>{
                                puzzles.map((item) =>
                                    <div draggable onDragStart={dragStart} onWheel={rotate} id={String(item.id)} className={partOne['puzzle-crisper']}>
                                        <div onClick={() => { console.log(puzzles) }} data-key={item.key} key={item.key} className={partOne['puzzle']} style={{ backgroundPosition: `${item['x']}% ${item['y']}%`, transform: `rotate(${item['rotation']}deg)` }}>  </div>
                                    </div>
                                )
                            }
                                
                            </div>
                        </div>
                        <div className={partOne['center']}>
                            <div className={partOne['puzzles-container']}>
                                {puzzles.map((item, index) =>
                                    <div id={`${index}-cont`} onDrop={drop} onDragOver={allowDrop} className={`${partOne['puzzle-container']} container-selector`}></div>
                                )}
                                
                            </div>
                        </div>
                        <div className={partOne['right']}>
                            <div className={partOne['messages']}>
                                <div className={`${partOne['right-answer']} ${rightAnswer ? partOne['vis'] : ''} `}>Задание выполнено верно</div>
                                <div className={`${partOne['wrong-answer']} ${wrongAnswer ? partOne['vis'] : ''} `}>Неверно. Попробуйте еще раз!</div>
                            </div>
                            <div onClick={checkPuzzle} className={`${partOne['complete-button']} ${completeButton ? partOne['vis'] : ''} `}>ГОТОВО</div>
                            <div onClick={nextPart} className={`${partOne['next-button']} ${nextButton ? partOne['vis'] : ''} `}>ДАЛЕЕ</div>
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