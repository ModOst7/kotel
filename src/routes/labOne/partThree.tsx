import { Link } from "react-router-dom";
import styles from "../../css/labOne/labOne.module.css";
import partOne from "../../css/labOne/partOne.module.css";
import partTwo from "../../css/labOne/partTwo.module.css";
import partThree from "../../css/labOne/partThree.module.css";

import React, { useState, useEffect } from "react";

export default function PartTwo({ partOneVis, setPartOneVis, partTwoVis, setPartTwoVis, partThreeVis, setPartThreeVis }: { partOneVis: any, setPartOneVis: any, partTwoVis: any, setPartTwoVis: any, partThreeVis: any, setPartThreeVis: any}) {

    const [rightAnswer, setRightAnswer] = useState(false);
    const [wrongAnswer, setWrongAnswer] = useState(false);
    const [completeButton, setCompleteButton] = useState(true);
    const [nextButton, setNextButton] = useState(false);

    

    const check = () => {
        
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
                            <div className={partOne['title-two']}><b>Задание 3</b></div>
                            <div className={partOne['description']}>Переместите цифры, обозначающие элементы котельного агрегата ТП-87, <br />на соответствующие выноски на рисунке.</div>
                            
                        </div>
                        <div className={partOne['center']}>
                            
                        </div>
                        <div className={partOne['right']}>
                            <div className={partOne['messages']}>
                                <div className={`${partOne['right-answer']} ${rightAnswer ? partOne['vis'] : ''} `}>Задание выполнено верно</div>
                                <div className={`${partOne['wrong-answer']} ${wrongAnswer ? partOne['vis'] : ''} `}>Неверно. Попробуйте еще раз!</div>
                            </div>
                            <div onClick={check} className={`${partOne['complete-button']} ${completeButton ? partOne['vis'] : ''} `}>ГОТОВО</div>
                            <div className={`${partOne['next-button']} ${nextButton ? partOne['vis'] : ''} `}>ДАЛЕЕ</div>
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