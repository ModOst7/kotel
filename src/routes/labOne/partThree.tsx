import { Link } from "react-router-dom";
import styles from "../../css/labOne/labOne.module.css";
import partOne from "../../css/labOne/partOne.module.css";
import partTwo from "../../css/labOne/partTwo.module.css";
import partThree from "../../css/labOne/partThree.module.css";

import React, { useState, useEffect } from "react";

export default function PartThree({ partTwoVis, setPartTwoVis, partThreeVis, setPartThreeVis }: { partTwoVis: any, setPartTwoVis: any, partThreeVis: any, setPartThreeVis: any }) {

    const [rightAnswer, setRightAnswer] = useState(false);
    const [wrongAnswer, setWrongAnswer] = useState(false);
    const [completeButton, setCompleteButton] = useState(true);
    const [nextButton, setNextButton] = useState(false);

    const [mainModified, setMainModified] = useState(false);
    const [containerVis, setContainerVis] = useState(true);

    const [slideOne, setSlideOne] = useState(true);
    const [slideTwo, setSlideTwo] = useState(false);
    const [slideThree, setSlideThree] = useState(false);
    const [slideFour, setSlideFour] = useState(false);
    const [nextSlideButton, setNextSlideButton] = useState(false);
    const [prevSlideButton, setPrevSlideButton] = useState(true);
    const [closeSlideButton, setCloseSlideButton] = useState(false);

    const [detail0, setDetail0] = useState(false);
    const [detail1, setDetail1] = useState(false);
    const [detail2, setDetail2] = useState(false);
    const [detail3, setDetail3] = useState(false);
    const [detail4, setDetail4] = useState(false);
    const [detail5, setDetail5] = useState(false);

    const [labStatus, setLabStatus] = useState(0)

    const [finalVis, setFinalVis] = useState(false);
    const [backVis, setBackVis] = useState(false);

    useEffect(() => { update() }, [labStatus])

    const labText = [
        <div>Укажите область, в которой организован процесс горения топлива <br />и расположены опускные трубы котельного агрегата. <br />Выберите соответствующую цифру на схеме</div>,
        <div>Укажите оборудование, которое предназначено для разделения пароводяной смеси на пар и воду <br />с раздельным их выводом по трубам к пароперегревателю или в опускные трубы контуров циркуляции. <br />Выберите соответствующую цифру на схеме.</div>,
        <div>Укажите теплообменные поверхности, необходимые для предварительного <br />подогрева воздуха подаваемого на горение в горелочные устройства. <br />Выберите соответствующую цифру на схеме.</div>,
        <div>Укажите секцию, в которой осуществляется дополнительный подогрев <br />пара до необходимых параметров за счет лучистого теплообмена. <br />Выберите соответствующую цифру на схеме. </div>,
        <div>Укажите теплообменные поверхности, необходимые для предварительного подогрева воды. <br />Выберите соответствующую цифру на схеме.</div>,
        <div>Укажите область, в которой расположены горелочные устройства котельного агрегата. <br />Выберите соответствующую цифру на схеме.</div>
    ]

    const process = (e: any) => {
        console.log(e.target.getAttribute('data-status'));
        console.log('status ' + labStatus);
        switch (labStatus) {
            case 0:
                if (labStatus == e.target.getAttribute('data-status')) {
                    setDetail0(true);
                    setSlideOne(true);
                    setMainModified(true);
                    setContainerVis(false);
                    setNextSlideButton(true);
                } else {
                    setWrongAnswer(true);
                    setTimeout(() => setWrongAnswer(false), 2000);
                }
                break;
            case 1:
                if (labStatus == e.target.getAttribute('data-status')) {
                    setDetail1(true);
                    setSlideOne(true);
                    setMainModified(true);
                    setContainerVis(false);
                    setNextSlideButton(true);
                } else {
                    setWrongAnswer(true);
                    setTimeout(() => setWrongAnswer(false), 2000);
                }
                break;
            case 2:
                if (labStatus == e.target.getAttribute('data-status')) {
                    setDetail2(true);
                    setSlideOne(true);
                    setMainModified(true);
                    setContainerVis(false);
                    setNextSlideButton(true);
                } else {
                    setWrongAnswer(true);
                    setTimeout(() => setWrongAnswer(false), 2000);
                }
                break;
            case 3:
                if (labStatus == e.target.getAttribute('data-status')) {
                    setDetail3(true);
                    setSlideOne(true);
                    setMainModified(true);
                    setContainerVis(false);
                    setNextSlideButton(true);
                } else {
                    setWrongAnswer(true);
                    setTimeout(() => setWrongAnswer(false), 2000);
                }
                break;
            case 4:
                if (labStatus == e.target.getAttribute('data-status')) {
                    setDetail4(true);
                    setSlideOne(true);
                    setMainModified(true);
                    setContainerVis(false);
                    setNextSlideButton(true);
                } else {
                    setWrongAnswer(true);
                    setTimeout(() => setWrongAnswer(false), 2000);
                }
                break;
            case 5:
                if (labStatus == e.target.getAttribute('data-status')) {
                    setDetail5(true);
                    setSlideOne(true);
                    setMainModified(true);
                    setContainerVis(false);
                    setNextSlideButton(true);
                } else {
                    setWrongAnswer(true);
                    setTimeout(() => setWrongAnswer(false), 2000);
                }
                break;
            default:
                break;
        }
    }

    const nextSlide2 = () => {
        if (slideOne) {
            setSlideOne(false);
            setSlideTwo(true);
            setNextSlideButton(false);
            setCloseSlideButton(true);
            return;
        }
    }

    const prevSlide2 = () => {
        if (slideOne) {
            setCloseSlideButton(false);
            update();
            setContainerVis(true);
            setMainModified(false);
            return;
        }
        if (slideTwo) {
            setCloseSlideButton(false);
            setNextSlideButton(true);
            setSlideTwo(false);
            setSlideOne(true);
            return;
        }
    }

    const closeSlide2 = () => {
        setLabStatus(labStatus + 1);
        setContainerVis(true);
        setMainModified(false);
        setCloseSlideButton(false);
        setSlideThree(false);
        setSlideTwo(false);
    }

    const nextSlide3 = () => {
        if (slideOne) {
            setSlideOne(false);
            setSlideTwo(true);
            return;
        }
        if (slideTwo) {
            setSlideTwo(false);
            setSlideThree(true);
            setNextSlideButton(false);
            setCloseSlideButton(true);
            return;
        }

    }

    const prevSlide3 = () => {
        if (slideOne) {
            setCloseSlideButton(false);
            update();
            setContainerVis(true);
            setMainModified(false);
            return;
        }
        if (slideTwo) {
            setCloseSlideButton(false);
            setSlideTwo(false);
            setSlideOne(true);
            return;
        }
        if (slideThree) {
            setCloseSlideButton(false);
            setSlideThree(false);
            setSlideTwo(true);
            setNextSlideButton(true);
            return;
        }
    }

    const closeSlide3 = () => {
        setLabStatus(labStatus + 1);
        setContainerVis(true);
        setMainModified(false);
        setCloseSlideButton(false);
        setSlideThree(false);
    }

    const nextSlide4 = () => {
        if (slideOne) {
            setSlideOne(false);
            setSlideTwo(true);
            return;
        }
        if (slideTwo) {
            setSlideTwo(false);
            setSlideThree(true);
            return;
        }
        if (slideThree) {
            setSlideThree(false);
            setSlideFour(true);
            setNextSlideButton(false);
            setCloseSlideButton(true);
            return;
        }

    }

    const prevSlide4 = () => {
        if (slideOne) {
            setCloseSlideButton(false);
            update();
            setContainerVis(true);
            setMainModified(false);
            return;
        }
        if (slideTwo) {
            setCloseSlideButton(false);
            setSlideTwo(false);
            setSlideOne(true);
            return;
        }
        if (slideThree) {
            setCloseSlideButton(false);
            setSlideThree(false);
            setSlideTwo(true);
            setNextSlideButton(true);
            return;
        }
        if (slideFour) {
            setCloseSlideButton(false);
            setSlideFour(false);
            setSlideThree(true);
            setNextSlideButton(true);
            return;
        }
    }

    const closeSlide4 = () => {
        setLabStatus(labStatus + 1);
        setContainerVis(true);
        setMainModified(false);
        setCloseSlideButton(false);
        setSlideFour(false);
        setNextButton(true);
    }

    const update = () => {
        setDetail0(false);
        setDetail1(false);
        setDetail2(false);
        setDetail3(false);
        setDetail4(false);
        setDetail5(false);
    }

    const final = () => {
        setContainerVis(false);
        setFinalVis(true);
        setBackVis(true);
    }

    return (
        <div className={`${partTwo['wrapper']} ${partThreeVis ? partTwo['vis'] : ''} `}>
            <div className={styles['container']}>
                <div className={`${partThree['main']} ${mainModified ? partThree['modified'] : ''} `}>
                    <div className={styles['header']}>
                        <img className={styles["header-icon"]} src="./img/menu/header-icon.png" />
                        <div className={styles['header-title']}>
                            <div className={styles['title-one']}>Котельное оборудование ТЭС.<br /> Устройство, эксплуатация, техническое обслуживание. </div>
                            <div className={styles['title-two']}>Электронный практикум</div>
                        </div>
                    </div>
                    <div className={`${partThree['container']} ${containerVis ? partThree['vis'] : ''} `}>
                        <div className={partOne['left']}>
                            <div className={partOne['title-one']}>Лабораторная работа <b>№1</b></div>
                            <div className={partOne['title-two']}><b>Задание 3</b></div>
                            <div className={partOne['description']}>{labText[labStatus]}</div>

                        </div>
                        <div className={partOne['center']}>
                            <img className={partTwo["kotel"]} src="./img/labOne/kotel2.png" />
                            <div onClick={process} data-status={1} className={`${partThree["circle"]} ${partTwo["circle-container-1"]}`}>1</div>
                            <div onClick={process} data-status={0} className={`${partThree["circle"]} ${partTwo["circle-container-2"]}`}>2</div>
                            <div onClick={process} data-status={5} className={`${partThree["circle"]} ${partTwo["circle-container-3"]}`}>3</div>
                            <div onClick={process} data-status={999} className={`${partThree["circle"]} ${partTwo["circle-container-4"]}`}>4</div>
                            <div onClick={process} data-status={3} className={`${partThree["circle"]} ${partTwo["circle-container-5"]}`}>5</div>
                            <div onClick={process} data-status={999} className={`${partThree["circle"]} ${partTwo["circle-container-6"]}`}>6</div>
                            <div onClick={process} data-status={4} className={`${partThree["circle"]} ${partTwo["circle-container-7-1"]}`}>7</div>
                            <div onClick={process} data-status={4} className={`${partThree["circle"]} ${partTwo["circle-container-7-2"]}`}>7</div>
                            <div onClick={process} data-status={2} className={`${partThree["circle"]} ${partTwo["circle-container-8-1"]}`}>8</div>
                            <div onClick={process} data-status={2} className={`${partThree["circle"]} ${partTwo["circle-container-8-2"]}`}>8</div>
                            <div onClick={process} data-status={999} className={`${partThree["circle"]} ${partTwo["circle-container-9"]}`}>9</div>
                            <div onClick={process} data-status={999} className={`${partThree["circle"]} ${partTwo["circle-container-10"]}`}>10</div>
                        </div>
                        <div className={partOne['right']}>
                            <div className={partOne['messages']}>
                                <div className={`${partThree['right-answer']} ${rightAnswer ? partThree['vis'] : ''} `}>Задание выполнено верно</div>
                                <div className={`${partThree['wrong-answer']} ${wrongAnswer ? partThree['vis'] : ''} `}>Неверно. Попробуйте еще раз!</div>
                            </div>

                            <div onClick={final} className={`${partThree['next-button']} ${nextButton ? partThree['vis'] : ''} `}>ДАЛЕЕ</div>
                        </div>
                    </div>
                    {/*============00000000000000000000000000000000000000000000000000000000000000000000000000000000=============================================================================================*/}
                    <div className={`${partThree['detail-0']} ${detail0 ? partThree['vis'] : ''} `}>
                        <div className={`${partThree['detail-container']} ${slideOne ? partThree['vis'] : ''} `}>
                            <div style={{marginLeft: '450px'}} className={partThree['left-column']}>
                                <img className={partThree["img-0-1"]} src="./img/labOne/detail0-1.png" />
                                <div className={partThree["img-title"]}>Топочная камера котельного агрегата</div>
                            </div>
                            <div className={partThree['right-column']}>
                            </div>
                        </div>
                        <div className={`${partThree['detail-container']} ${slideTwo ? partThree['vis'] : ''} `}>
                            <div className={partThree['left-column']}>
                                <img className={partThree["img-0-2"]} src="./img/labOne/detail0-2.png" />
                                <div className={partThree["img-title"]}></div>
                            </div>
                            <div className={partThree['right-column']}>
                                <p>В отличие от обычных призматических камер, в нижней части топочной камеры имеется пережим, который образован гнутыми во внутрь топочной камеры трубами фронтового и заднего экранов. Примерно 50% этих труб изогнуты по профилю выступа без развилок, а другая их часть имеет развилки в верхней и нижней частях выступов.</p>
                                <p>Глубина выступов пережима – 1890 мм с каждой стороны. Нижняя часть топки является камерой горения (предтопком). Выше пережима расположена камера догорания. Экранные трубы Ø60 × 6, Ст. 20 с шагом 64 мм закрывают полностью фронтовую, заднюю и боковые стены топочной камеры и, сходясь внизу, образуют под топки с двумя летками для удаления жидкого шлака. Тепловые и конструктивные параметры топочной камеры представлены в таблице.</p>
                            </div>
                        </div>
                        <div className={`${partThree['detail-container']} ${slideThree ? partThree['vis'] : ''} `}>
                            <div className={partThree['left-column']}>
                                <img className={partThree["img-0-2"]} src="./img/labOne/detail0-2.png" />
                                <div className={partThree["img-title"]}></div>
                            </div>
                            <div className={partThree['right-column']} style={{width: '705px'}}>
                                <div className={partThree['table-title']}>Основные параметры топочной камеры</div>
                                <div className={partThree['table']}>
                                    <div className={partThree['table-header']}>
                                        <div className={partThree['col-one']}>Характеристики</div>
                                        <div className={partThree['col-two']}>Ед. изм.</div>
                                        <div className={partThree['col-three']}>Вся топка</div>
                                        <div className={partThree['col-four']}>Предтопок</div>
                                    </div>
                                    <div className={partThree['table-body']}>
                                        <div className={partThree['table-row']}>
                                            <div className={partThree['col-one']}>Размеры камеры топки в свету</div>
                                            <div className={partThree['col-two']}>мм</div>
                                            <div className={partThree['col-three']}>7552 × 14080</div>
                                            <div className={partThree['col-four']}>7552 × 14080</div>
                                        </div>
                                        <div className={partThree['table-row']}>
                                            <div className={partThree['col-one']}>Расчетный объем камеры топки</div>
                                            <div className={partThree['col-two']}>м<sup>3</sup></div>
                                            <div className={partThree['col-three']}>2180</div>
                                            <div className={partThree['col-four']}>580</div>
                                        </div>
                                        <div className={partThree['table-row']}>
                                            <div className={partThree['col-one']}>Температура уходящих газов на выходе</div>
                                            <div className={partThree['col-two']}>°С</div>
                                            <div className={partThree['col-three']}>1234</div>
                                            <div className={partThree['col-four']}>1785</div>
                                        </div>
                                        <div className={partThree['table-row']}>
                                            <div className={partThree['col-one']}>Радиационная поверхность нагрева</div>
                                            <div className={partThree['col-two']}>м<sup>2</sup></div>
                                            <div className={partThree['col-three']}>1235</div>
                                            <div className={partThree['col-four']}>411</div>
                                        </div>
                                        <div className={partThree['table-row']}>
                                            <div className={partThree['col-one']}>Тепловое напряжение объема</div>
                                            <div className={partThree['col-two']}>кВт/м<sup>3</sup></div>
                                            <div className={partThree['col-three']}>149</div>
                                            <div className={partThree['col-four']}>578</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={partThree['navigation']}>
                            <div onClick={prevSlide3} className={`${partThree['prev-slide-button']} ${prevSlideButton ? partThree['vis'] : ''} `}>{'<'}  НАЗАД</div>
                            <div onClick={nextSlide3} className={`${partThree['next-slide-button']} ${nextSlideButton ? partThree['vis'] : ''} `}>ДАЛЕЕ  {'>'}</div>
                            <div onClick={closeSlide3} className={`${partThree['close-slide-button']} ${closeSlideButton ? partThree['vis'] : ''} `}>ВЕРНУТЬСЯ  {'>'}</div>
                        </div>
                    </div>

                    {/*=============================================111111111111111111111111111111111111111111111111111111111111111=============================================================================================*/}
                    <div className={`${partThree['detail-1']} ${detail1 ? partThree['vis'] : ''} `}>
                        <div className={`${partThree['detail-container']} ${slideOne ? partThree['vis'] : ''} `}>
                            <div className={partThree['left-column']}>
                                <img className={partThree["img-1-1"]} src="./img/labOne/detail1-1.png" />
                                <div className={partThree["img-title"]}></div>
                            </div>
                            <div className={partThree['right-column']}>
                                <p className={partThree['description-title']}>Конструкция барабана-сепаратора:</p>
                                1 – патрубок выхода пара;<br />
                                2 – потолочный дырчатый лист;<br />
                                3 – патрубок входа питательной воды;<br />
                                4 – погружной дырчатый лист;<br />
                                5 – наклонный дырчатый лист;<br />
                                6 – отбойный щит;<br />
                                7 – диффузоры;<br />
                                8 – отбойные щитки;<br />
                                9 – смеситель;<br />
                                10 – опускной трубопровод;<br />
                                11 – цилиндрический корпус с эллиптическими днищами;<br />
                                12 – патрубки входа пароводяной смеси;<br />
                                13 – перемычка по воде<br />

                            </div>
                        </div>
                        <div className={`${partThree['detail-container']} ${slideTwo ? partThree['vis'] : ''} `}>
                            <div className={partThree['left-column']}>
                                <img className={partThree["img-1-2"]} src="./img/labOne/detail1-2.png" />
                                <div className={partThree["img-title"]}></div>
                            </div>
                            <div className={partThree['right-column']} style={{ width: '765px' }} >
                                <p>На котле установлен один барабан сварной конструкции, изготовленный из стали 16ГНМА. Внутренний диаметр барабана 1800 мм, толщина стенки 115 мм, длина цилиндрической части 16200 мм. Барабан установлен на двух роликовых опорах, которые обеспечивают его свободное удлинение при нагревании. Средний уровень воды в барабане на 200 мм ниже осевой линии барабана (геометрической оси барабана).</p>
                                <ul><p>В состав внутрибарабанных сепарационных устройств входят:</p>
                                    <li>циклоны грубой сепарации Ø350 мм и Ø315 мм, которые установлены на вводах пароводяной смеси в барабан из экранных поверхностей. Часть из них правого закручивания, часть – левого. В чистом отсеке размещено 40–42 циклона, в солевых – по 12;</li>
                                    <li>устройства для барботажной промывки пара;</li>
                                    <li>дырчатые щиты для отделения влаги при выходе пара из барабана.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={partThree['navigation']}>
                            <div onClick={prevSlide2} className={`${partThree['prev-slide-button']} ${prevSlideButton ? partThree['vis'] : ''} `}>{'<'}  НАЗАД</div>
                            <div onClick={nextSlide2} className={`${partThree['next-slide-button']} ${nextSlideButton ? partThree['vis'] : ''} `}>ДАЛЕЕ  {'>'}</div>
                            <div onClick={closeSlide2} className={`${partThree['close-slide-button']} ${closeSlideButton ? partThree['vis'] : ''} `}>ВЕРНУТЬСЯ  {'>'}</div>
                        </div>
                    </div>

                    {/*=============================================22222222222222222222222222222222222222222222222222222222222222222222222222222===================================================*/}
                    <div className={`${partThree['detail-2']} ${detail2 ? partThree['vis'] : ''} `}>
                        <div className={`${partThree['detail-container']} ${slideOne ? partThree['vis'] : ''} `}>
                            <div style={{marginLeft: '450px'}} className={partThree['left-column']}>
                                <img className={partThree["img-2-1"]} src="./img/labOne/detail2-1.png" />
                                <div className={partThree["img-title"]}>Воздухоподогреватель (трубчатый воздухоподогреватель)</div>
                            </div>
                            <div className={partThree['right-column']}>
                            </div>
                        </div>
                        <div className={`${partThree['detail-container']} ${slideTwo ? partThree['vis'] : ''} `}>
                            <div className={partThree['left-column']}>
                                <img className={partThree["img-1-2"]} src="./img/labOne/detail2-2.png" />
                                <div className={partThree["img-title"]}></div>
                            </div>
                            <div className={partThree['right-column']}>
                                <p>Воздухоподогреватель стальной, трубчатый, двухступенчатый, выполнен врассечку с водяным экономайзером, благодаря чему воздух подогревается до температуры 400 °С.</p>
                                <p>Верхняя ступень воздухоподогревателя (вторая ступень по ходу воздуха) имеет поверхность нагрева 9120 м<sup>2</sup> и изготовлена из труб Ø51 × 1,5 с шагом установки S1 = 78 мм, S2 = 51мм.</p>
                                <p>Нижняя ступень воздухоподогревателя (первая ступень по ходу воздуха) имеет поверхность нагрева 19800 м<sup>2</sup> и изготовлена из труб Ø40 × 1,5 с шагом установки S1 = 62 мм и S2 = 40,5 мм, материал труб – Ст. 20.</p>
                            </div>
                        </div>
                        <div className={`${partThree['detail-container']} ${slideThree ? partThree['vis'] : ''} `}>
                            <div className={partThree['left-column']}>
                                <img className={partThree["img-1-2"]} src="./img/labOne/detail2-2.png" />
                                <div className={partThree["img-title"]}></div>
                            </div>
                            <div className={partThree['right-column']}>
                                <p>Верхняя ступень воздухоподогревателя – одноходовая, нижняя ступень - включена по схеме четырехходового перекрестного тока. Подвод холодного воздуха к нижней ступени осуществляется с трех сторон: с фронта, сзади и сбоку, с последующим развертыванием потока в трубном пучке нижнего ряда секций. Такая схема движения воздуха в нижней ступени обеспечивает отсутствие перепускных коробов между секциями этой ступени.</p>
                                <p>Весь воздухоподогреватель изготовлен в виде секций, состоящих их труб и трубных досок. Верхняя ступень включает 12 секций, нижняя – 24 секции высотой 5 м. Нижняя ступень разделена по высоте на две части с просветом высотой 1200 мм, где установлены шесть лазов для осмотра и очистки трубной системы.</p>
                            </div>
                        </div>
                        <div className={partThree['navigation']}>
                            <div onClick={prevSlide3} className={`${partThree['prev-slide-button']} ${prevSlideButton ? partThree['vis'] : ''} `}>{'<'}  НАЗАД</div>
                            <div onClick={nextSlide3} className={`${partThree['next-slide-button']} ${nextSlideButton ? partThree['vis'] : ''} `}>ДАЛЕЕ  {'>'}</div>
                            <div onClick={closeSlide3} className={`${partThree['close-slide-button']} ${closeSlideButton ? partThree['vis'] : ''} `}>ВЕРНУТЬСЯ  {'>'}</div>
                        </div>
                    </div>
                    {/*=============================================333333333333333333333333333333333333333333===================================================*/}
                    <div className={`${partThree['detail-3']} ${detail3 ? partThree['vis'] : ''} `}>
                        <div className={`${partThree['detail-container']} ${slideOne ? partThree['vis'] : ''} `}>
                            <div style={{marginLeft: '450px'}} className={partThree['left-column']}>
                                <img className={partThree["img-3-1"]} src="./img/labOne/detail3-1.png" />
                                <div className={partThree["img-title"]}>Ширмовый пароперегреватель</div>
                            </div>
                            <div className={partThree['right-column']}>
                            </div>
                        </div>
                        <div className={`${partThree['detail-container']} ${slideTwo ? partThree['vis'] : ''} `}>
                            <div className={partThree['left-column']}>
                                <img className={partThree["img-3-2"]} src="./img/labOne/detail3-2.png" />
                                <div className={partThree["img-title"]}><p>Устройство пароперегревателя:</p>
                                    1 – потолочный пароперегреватель; 2 – ширмовый пароперегреватель; 3 – конвективный пароперегреватель
                                </div>
                            </div>
                            <div className={partThree['right-column']} >
                                <p>Пароперегреватель конструктивно выполнен из потолочного 1, ширмового 2 и четырех ступеней конвективного 3 пароперегревателей.</p>
                                <p>По характеру тепловосприятия пароперегреватель разделяется на радиационную, полурадиационную и конвективную части. К радиационной части относится часть потолочного пароперегревателя, которая находится над топочной камерой, к полурадиационной части – ширмовый пароперегреватель, к конвективной части – остальная часть потолочного пароперегревателя и 1, 2, 3 и 4 ступени конвективного пароперегревателя.</p>

                            </div>
                        </div>
                        <div className={partThree['navigation']}>
                            <div onClick={prevSlide2} className={`${partThree['prev-slide-button']} ${prevSlideButton ? partThree['vis'] : ''} `}>{'<'}  НАЗАД</div>
                            <div onClick={nextSlide2} className={`${partThree['next-slide-button']} ${nextSlideButton ? partThree['vis'] : ''} `}>ДАЛЕЕ  {'>'}</div>
                            <div onClick={closeSlide2} className={`${partThree['close-slide-button']} ${closeSlideButton ? partThree['vis'] : ''} `}>ВЕРНУТЬСЯ  {'>'}</div>
                        </div>
                    </div>
                    {/*=============================================4444444444444444444444444444444444444===================================================*/}
                    <div className={`${partThree['detail-4']} ${detail4 ? partThree['vis'] : ''} `}>
                        <div className={`${partThree['detail-container']} ${slideOne ? partThree['vis'] : ''} `}>
                            <div style={{marginLeft: '450px'}} className={partThree['left-column']}>
                                <img className={partThree["img-2-1"]} src="./img/labOne/detail4-1.png" />
                                <div className={partThree["img-title"]}>Горизонтальная часть водяного экономайзера</div>
                            </div>
                            <div className={partThree['right-column']}>
                            </div>
                        </div>
                        <div className={`${partThree['detail-container']} ${slideTwo ? partThree['vis'] : ''} `}>
                            <div className={partThree['left-column']}>
                                <img className={partThree["img-1-2"]} src="./img/labOne/detail4-2.png" />
                                <div className={partThree["img-title"]}>Вертикальная часть водяного экономайзера</div>
                            </div>
                            <div className={partThree['right-column']}>
                                <p>Водяной экономайзер выполнен из змеевиков с горизонтальным расположением. Змеевики и камеры изготовлены из стали марки Ст. 20. Диаметр труб змеевиков 25 × 3,5 мм. Водяной экономайзер рассчитан для подогрева питательной воды от 230 до 330 °С и выполнен врассечку с воздухоподогревателем.</p>
                                <p>Поверхность нагрева нижней части (первой ступени по ходу воды) водяного экономайзера равна 2580 м<sup>2</sup>, а верхней (второй ступени по ходу воды) – 1450 м<sup>2</sup>. Змеевики экономайзера располагаются параллельно фронту котла в шахматном порядке с шагом 85 мм в верхней ступени и 80 мм в нижней.</p>
                                <p>Входные и выходные камеры экономайзера выполнены из труб. Камеры нижней ступени расположены внутри газохода, что позволяет уменьшить присосы холодного воздуха в эту часть газохода.</p>
                            </div>
                        </div>
                        <div className={`${partThree['detail-container']} ${slideThree ? partThree['vis'] : ''} `}>
                            <div className={partThree['left-column']}>
                                <img className={partThree["img-1-2"]} src="./img/labOne/detail4-2.png" />
                                <div className={partThree["img-title"]}>Вертикальная часть водяного экономайзера</div>
                            </div>
                            <div className={partThree['right-column']}>
                                <p>В вертикальном положении пакеты змеевиков дистанционируются стояками, которые привариваются к балкам и камерам, являющимся одновременно и несущими конструкциями водяного экономайзера.</p>
                                <p>Питательная вода после нижней ступени водяного экономайзера по четырем трубам Ø159 × 12 подводится в конденсаторы и из них в верхнюю ступень водяного экономайзера. На трубопроводах в рассечке экономайзера имеются четыре дренажа – перемычки с запорной арматурой Д<sub>у</sub> = 50 мм, служащих для соединения нижней ступени с верхней при спуске воды с экономайзера и охлаждения труб водяного экономайзера при пусках и остановках котла.</p>
                            </div>
                        </div>
                        <div className={partThree['navigation']}>
                            <div onClick={prevSlide3} className={`${partThree['prev-slide-button']} ${prevSlideButton ? partThree['vis'] : ''} `}>{'<'}  НАЗАД</div>
                            <div onClick={nextSlide3} className={`${partThree['next-slide-button']} ${nextSlideButton ? partThree['vis'] : ''} `}>ДАЛЕЕ  {'>'}</div>
                            <div onClick={closeSlide3} className={`${partThree['close-slide-button']} ${closeSlideButton ? partThree['vis'] : ''} `}>ВЕРНУТЬСЯ  {'>'}</div>
                        </div>
                    </div>
                    {/*=============================================555555555555555555555555555555555===================================================*/}
                    <div className={`${partThree['detail-5']} ${detail5 ? partThree['vis'] : ''} `}>
                        <div className={`${partThree['detail-container']} ${slideOne ? partThree['vis'] : ''} `}>
                            <div className={partThree['left-column']}>
                                <img className={partThree["img-5-1"]} src="./img/labOne/detail5-1.png" />
                                <div className={partThree["img-title"]}>Газомазутная горелка</div>
                            </div>
                            <div className={partThree['right-column']}>
                                <img className={partThree["img-5-2"]} src="./img/labOne/detail5-2.png" />
                                <div className={partThree["img-title"]}>Пылеугольная горелка</div>
                            </div>
                        </div>
                        <div className={`${partThree['detail-container']} ${slideTwo ? partThree['vis'] : ''} `}>
                            <div className={partThree['left-column']}>
                                <img className={partThree["img-5-3"]} src="./img/labOne/detail5-3.png" />
                                <div className={partThree["img-title"]}>Пылеугольная (пылегазовая) горелка в действии</div>
                            </div>
                            <div className={partThree['right-column']}>
                                <p>Пылегазовая горелка предназначена для работы на газе или угольной пыли, в исключительных случаях разрешается включение горелки с одновременной подачей газа и угольной пыли на кратковременную работу (момент перехода с одного вида топлива на другой).</p>
                            </div>
                        </div>
                        <div className={`${partThree['detail-container']} ${slideThree ? partThree['vis'] : ''} `}>
                            <div className={partThree['left-column']}>
                                <img className={partThree["img-5-4"]} src="./img/labOne/detail5-4.png" />
                                <div className={partThree["img-title"]}><p>Устройство горелки котельного агрегата:</p>
                                    1 – труба, по которой осуществляется подача первичного воздуха; 2 – прямоточный мундштук; 3 – наконечник; 4 – амбразура; 5 – полукольцо; 6 – улитка; 7 – трубка-сопло; 8 – кольцевой канал; 9 – отверстие
                                </div>
                            </div>
                            <div className={partThree['right-column']}>
                                <p>Подача первичного воздуха осуществляется от короба первичного воздуха вентилятором горячего дутья (ВГД) по трубам 1 Ø426 мм через прямоточные мундштуки 2 горелок с приваренными к ним со стороны топки наконечниками 3 длиной 400 мм из жаропрочной стали, утопленные в амбразурах 4 на 200 мм. Подача газа осуществляется от газопровода котла последовательно через две задвижки Д<sub>у</sub> = 150 мм (на каждую горелку) и газопровод Д<sub>у</sub> = 150 мм, от которого расходятся два полукольца 5 Ø133 мм, врезанные диаметрально противоположно в кольцо газовой горелки Ø108 мм, расположенное вокруг пылепровода Ø426 мм у улитки 6 вторичного воздуха. Из кольца Ø108 мм равномерно отводятся 20–24 трубки-сопла 7 (Д<sub>у</sub> = 20 мм) газовой горелки, прижатые к мундштуку 2 пылепровода, закрепленные на нем и закрытые кожухом для снижения сопротивления движению вторичного воздуха.</p>
                            </div>
                        </div>
                        <div className={`${partThree['detail-container']} ${slideFour ? partThree['vis'] : ''} `}>
                            <div className={partThree['left-column']}>
                                <img className={partThree["img-5-4"]} src="./img/labOne/detail5-4.png" />
                                <div className={partThree["img-title"]}><p>Устройство горелки котельного агрегата:</p>
                                    1 – труба, по которой осуществляется подача первичного воздуха; 2 – прямоточный мундштук; 3 – наконечник; 4 – амбразура; 5 – полукольцо; 6 – улитка; 7 – трубка-сопло; 8 – кольцевой канал; 9 – отверстие
                                </div>
                            </div>
                            <div className={partThree['right-column']}>
                                <p>Наконечники газовых трубок длиной 400 мм выполнены из жаропрочной стали, их концы длиною 60–70 мм отогнуты от воздухопровода на 15–20 °С. Для снижения тепловосприятия боковых экранов на крайних газовых горелках отглушено по восемь газовых трубок, которые обращены к боковым экранам.</p>
                                <p>Подача вторичного воздуха в топку котла осуществляется из улитки вторичного воздуха 6 двумя потоками: по кольцевому каналу 8, после закрутки в улитке 6 между наконечником 3 и стенкой амбразуры 4 Ø800 мм, выложенной из фасонных огнеупорных кирпичей; в отверстие 9 треугольной формы над горелкой (длина стороны треугольника равна 250 мм) для защиты горелки от перекрытия расплавленным шлаком, стекающим со стен.</p>

                            </div>
                        </div>

                        <div className={partThree['navigation']}>
                            <div onClick={prevSlide4} className={`${partThree['prev-slide-button']} ${prevSlideButton ? partThree['vis'] : ''} `}>{'<'}  НАЗАД</div>
                            <div onClick={nextSlide4} className={`${partThree['next-slide-button']} ${nextSlideButton ? partThree['vis'] : ''} `}>ДАЛЕЕ  {'>'}</div>
                            <div onClick={closeSlide4} className={`${partThree['close-slide-button']} ${closeSlideButton ? partThree['vis'] : ''} `}>ВЕРНУТЬСЯ  {'>'}</div>
                        </div>
                    </div>
                    {/*=============================================FINAL===================================================*/}
                    <div className={`${partThree['final']} ${finalVis ? partThree['vis'] : ''} `}>
                        <div>Все задания выполнены верно. <br />Лабораторная работа завершена.</div>
                        <Link to={`/menu/`}><div className={`${partThree['back']} ${backVis ? partThree['vis'] : ''} `}>{'<'}  НАЗАД</div></Link>
                    </div>
                </div>
            </div>
            <div className={styles['footer']}>
                <div className={styles['help']}><img className={styles["help-icon"]} src="./img/menu/help.png" /></div>
                
            </div>
        </div>
    );
}