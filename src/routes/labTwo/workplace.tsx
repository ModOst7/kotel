import { Link } from "react-router-dom";
import basedStyles from "../../css/Baza.module.css";
import workplaceStyles from "../../css/labTwo/workplace.module.css";

import { Preview, print } from 'react-html2pdf';
import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectFullname } from "../../features/fullname/fullnameSlice";

import Gas from "./gas";
import Vapor from "./vapor";

export default function Workplace({ theoryVis, setTheoryVis, workplace, setWorkplace, today }: { theoryVis: any, setTheoryVis: any, workplace: any, setWorkplace: any, today:any }) {
    //const today:Date = new Date();
    const yyyy = today.getFullYear();
    let mm: any = today.getMonth() + 1; // Months start at 0!
    let dd: any = today.getDate();
    

    if (dd < 10) { dd = '0' + dd; }
    if (mm < 10) { mm = '0' + mm; }

    const formattedToday = dd + '/' + mm + '/' + yyyy;

    const [timeEnd, setTimeEnd] = useState(new Date());

    const fullname = useSelector(selectFullname);

    const [mainModified, setMainModified] = useState(true);
    const [chooseSlide, setChooseSlide] = useState(false);
    const [gasNextButton, setGasNextButton] = useState(false);
    const [vaporNextButton, setVaporNextButton] = useState(false);

    const [tractOne, setTractOne] = useState(false);
    const [tractTwo, setTractTwo] = useState(false);
    const [final, setFinal] = useState(true);
    const [report, setReport] = useState(true);
    const [printNsave, setPrintNsave] = useState(false);

    const [tractOneComplete, setTractOneComplete] = useState(false);
    const [tractTwoComplete, setTractTwoComplete] = useState(false);
    const [toTractButton, setToTractButton] = useState(false);

    const [tractOneImage, setTractOneImage] = useState(false);
    const [tractTwoImage, setTractTwoImage] = useState(false);

    const [gasComplete, setGasComplete] = useState([false, false, false, false, false, false, false]);
    const [vaporComplete, setVaporComplete] = useState([false, false, false, false, false, false, false]);

    const [gasTitle, setGasTitle] = useState(false);
    const [vaporTitle, setVaporTitle] = useState(false);

    const [reportSlide, setReportSlide] = useState(false);
    const [backVis, setBackVis] = useState(true);

    const firstTract = () => {
        setToTractButton(false);
        setChooseSlide(false);
        setTractOne(true);
        setMainModified(false);
    }

    const secondTract = () => {
        setToTractButton(false);
        setChooseSlide(false);
        setTractTwo(true);
        setMainModified(false);
    }


    interface Gases {
        [index: string]: {
            id: number,
            visible: boolean,
            temperature: string,
            environment: string
        }
    }

    const [gasStates, setGasStates] = useState<Gases>({
        '1': {
            id: 1,
            visible: false,
            temperature: " ",
            environment: " "
        },
        '2': {
            id: 2,
            visible: false,
            temperature: " ",
            environment: " "
        },
        '3': {
            id: 3,
            visible: false,
            temperature: " ",
            environment: " "
        },
        '4': {
            id: 4,
            visible: false,
            temperature: " ",
            environment: " "
        },
        '5': {
            id: 5,
            visible: false,
            temperature: " ",
            environment: " "
        },
        '6': {
            id: 6,
            visible: false,
            temperature: " ",
            environment: " "
        },
        '7': {
            id: 7,
            visible: false,
            temperature: " ",
            environment: " "
        },
    });

    const selectGas = (e: any) => {
        setGasTitle(true);
        let id = e.target.getAttribute('data-id');
        const newState = { ...gasStates };
        console.log(id);

        for (let index: any = 1; index <= Object.keys(newState).length; index++) {
            if (index == id) {
                newState[index].visible = true;
            } else {
                newState[index].visible = false;
            }
        }
        setGasStates(newState);
    }

    interface Vapors {
        [index: string]: {
            id: number,
            visible: boolean,
            temperature: string,
            environment: string,
            pressure: string
        }
    }

    const [vaporStates, setVaporStates] = useState<Vapors>({
        '1': {
            id: 1,
            visible: false,
            temperature: " ",
            environment: " ",
            pressure: " "
        },
        '2': {
            id: 2,
            visible: false,
            temperature: " ",
            environment: " ",
            pressure: " "
        },
        '3': {
            id: 3,
            visible: false,
            temperature: " ",
            environment: " ",
            pressure: " "
        },
        '4': {
            id: 4,
            visible: false,
            temperature: " ",
            environment: " ",
            pressure: " "
        },
        '5': {
            id: 5,
            visible: false,
            temperature: " ",
            environment: " ",
            pressure: " "
        },
        '6': {
            id: 6,
            visible: false,
            temperature: " ",
            environment: " ",
            pressure: " "
        },
        '7': {
            id: 7,
            visible: false,
            temperature: " ",
            environment: " ",
            pressure: " "
        },
    });

    const gasRightAnswers: Gases = {
        '1': {
            id: 1,
            visible: false,
            temperature: "1700–1800",
            environment: "Дымовые газы"
        },
        '2': {
            id: 2,
            visible: false,
            temperature: "1200–1300",
            environment: "Дымовые газы"
        },
        '3': {
            id: 3,
            visible: false,
            temperature: "980–1050",
            environment: "Дымовые газы"
        },
        '4': {
            id: 4,
            visible: false,
            temperature: "350–400",
            environment: "Воздух"
        },
        '5': {
            id: 5,
            visible: false,
            temperature: "200–250",
            environment: "Воздух"
        },
        '6': {
            id: 6,
            visible: false,
            temperature: "120–140",
            environment: "Дымовые газы"
        },
        '7': {
            id: 7,
            visible: false,
            temperature: "400",
            environment: "Воздух"
        },
    }

    const vaporRightAnswers: Vapors = {
        '1': {
            id: 1,
            visible: false,
            temperature: "490",
            environment: "Пароводяная смесь",
            pressure: "15,5"
        },
        '2': {
            id: 2,
            visible: false,
            temperature: "276",
            environment: "Вода",
            pressure: "1,2"
        },
        '3': {
            id: 3,
            visible: false,
            temperature: "104",
            environment: "Вода",
            pressure: "1,1"
        },
        '4': {
            id: 4,
            visible: false,
            temperature: "230",
            environment: "Вода",
            pressure: "1,2"
        },
        '5': {
            id: 5,
            visible: false,
            temperature: "560",
            environment: "Пар",
            pressure: "14,5"
        },
        '6': {
            id: 6,
            visible: false,
            temperature: "490",
            environment: "Пар",
            pressure: "13,0"
        },
        '7': {
            id: 7,
            visible: false,
            temperature: "560",
            environment: "Пар",
            pressure: "14,0"
        },
    }

    const selectVapor = (e: any) => {
        setVaporTitle(true);
        let id = e.target.getAttribute('data-id');
        const newState = { ...vaporStates };

        for (let index: any = 1; index <= Object.keys(newState).length; index++) {
            if (index == id) {
                newState[index].visible = true;
            } else {
                newState[index].visible = false;
            }
        }
        setVaporStates(newState);
    }

    const gasNext = () => {
        setTractOneImage(true);
        setGasTitle(false);

        const newState = gasStates;
        for (let index: any = 1; index <= Object.keys(newState).length; index++) {
            newState[index].visible = false;
        }
        setGasStates(newState);


        setTractOneComplete(true);
        setToTractButton(true);
        setGasNextButton(false);
    }

    const vaporNext = () => {
        setTractTwoImage(true);
        setVaporTitle(false);

        const newState = vaporStates;
        for (let index: any = 1; index <= Object.keys(newState).length; index++) {
            newState[index].visible = false;
        }
        setVaporStates(newState);


        setTractTwoComplete(true);
        setToTractButton(true);
        setVaporNextButton(false);
    }

    const fromGas = () => {
        if (tractTwoComplete) {
            setFinal(true);
            setReport(true);
        } else {
            setChooseSlide(true);
        }
        setTractOne(false);
    }

    const fromVapor = () => {
        if (tractOneComplete) {
            setFinal(true);
            setReport(true);
        } else {
            setChooseSlide(true);
        }
        setTractTwo(false);
    }

    const toReport = () => {
        setTractOne(false);
        setTractTwo(false);
        setFinal(false);
        setReport(false);
        setMainModified(true);

        setReportSlide(true);
        setPrintNsave(true);

        setTimeEnd(new Date());
        console.log('asdas')
    }



    useEffect(() => {
        let keyGas = true;
        for (let i: any = 1; i <= Object.keys(gasStates).length; i++) {
            if ((gasStates[i].environment == " ") || (gasStates[i].temperature == " ")) keyGas = false;
        }

        setGasComplete(gasComplete => gasComplete.map((gas, i) => {
            if ((gasStates[i + 1].environment == gasRightAnswers[String(i + 1)].environment) && (gasStates[i + 1].temperature == gasRightAnswers[String(i + 1)].temperature)) {
                return true;
            } else return false;
        }
        ));

        if (keyGas) setGasNextButton(true);

        let keyVapor = true;
        console.log(vaporStates);
        for (let i: any = 1; i <= Object.keys(vaporStates).length; i++) {
            if ((vaporStates[i].environment == " ") || (vaporStates[i].temperature == " ") || (vaporStates[i].pressure == " ")) keyVapor = false;
        }
        setVaporComplete(vaporComplete => vaporComplete.map((vapor, i) => {
            if ((vaporStates[i + 1].environment == vaporRightAnswers[String(i + 1)].environment) && (vaporStates[i + 1].temperature == vaporRightAnswers[String(i + 1)].temperature)) {
                return true;
            } else return false;
        }
        ))
        if (keyVapor) setVaporNextButton(true);

        console.log(gasComplete);
    }, [gasStates, vaporStates])

    return (
        <div className={`${workplaceStyles['wrapper']} ${workplace ? workplaceStyles['vis'] : ''} `}>
            <div className={basedStyles['container']}>
                <div className={`${workplaceStyles['main']} ${mainModified ? workplaceStyles['modified'] : ''}`}>
                    <div className={basedStyles['header']}>
                        <img className={basedStyles["header-icon"]} src="./img/menu/header-icon.png" />
                        <div className={basedStyles['header-title']}>
                            <div className={basedStyles['title-one']}>Котельное оборудование ТЭС.<br /> Устройство, эксплуатация, техническое обслуживание. </div>
                            <div className={basedStyles['title-two']}>Электронный практикум</div>
                        </div>
                    </div>
                    <div className={`${workplaceStyles['choose-slide']} ${chooseSlide ? workplaceStyles['vis'] : ''}`}>
                        <div onClick={firstTract} className={`${workplaceStyles['block']} ${tractOneComplete ? workplaceStyles['disable'] : ''}`}>Газовоздушный тракт парового котла</div>
                        <div onClick={secondTract} className={`${workplaceStyles['block']} ${tractTwoComplete ? workplaceStyles['disable'] : ''}`}>Пароводяной тракт парового котла</div>
                    </div>
                    {/*==============1111111111111111111111111111111111111111111111====================================================*/}
                    <div className={`${workplaceStyles['tract-one']} ${tractOne ? workplaceStyles['vis'] : ''}`}>
                        <div className={workplaceStyles["left"]}>
                            <div className={workplaceStyles["description"]}>Укажите потоки и температурный режим каждой зоны <br />газовоздушного тракта парового котла.</div>
                            <div>
                                <img className={`${workplaceStyles['kotel-image']} ${tractOneImage ? workplaceStyles['hid'] : ''}`} src="./img/labTwo/kotel.png" />

                            </div>
                            <div style={{ display: gasComplete[0] == true ? 'none' : 'block' }} data-id={1} onClick={selectGas} className={workplaceStyles["gas-one"]}>1</div>
                            <div style={{ display: gasComplete[1] == true ? 'none' : 'block' }} data-id={2} onClick={selectGas} className={workplaceStyles["gas-two"]}>2</div>
                            <div style={{ display: gasComplete[2] == true ? 'none' : 'block' }} data-id={3} onClick={selectGas} className={workplaceStyles["gas-three"]}>3</div>
                            <div style={{ display: gasComplete[3] == true ? 'none' : 'block' }} data-id={4} onClick={selectGas} className={workplaceStyles["gas-four"]}>4</div>
                            <div style={{ display: gasComplete[4] == true ? 'none' : 'block' }} data-id={5} onClick={selectGas} className={workplaceStyles["gas-five"]}>5</div>
                            <div style={{ display: gasComplete[5] == true ? 'none' : 'block' }} data-id={6} onClick={selectGas} className={workplaceStyles["gas-six"]}>6</div>
                            <div style={{ display: gasComplete[6] == true ? 'none' : 'block' }} data-id={7} onClick={selectGas} className={workplaceStyles["gas-seven"]}>7</div>
                            <div className={`${workplaceStyles['tract-one-container']} ${tractOneImage ? workplaceStyles['vis'] : ''}`}>
                                <img className={workplaceStyles["tract-one-image"]} src="./img/labTwo/tract-one.png" />
                                <img className={workplaceStyles["indicator-gas-1"]} src={gasComplete[0] ? "./img/labTwo/right.png" : "./img/labTwo/wrong.png"} />
                                <img className={workplaceStyles["indicator-gas-2"]} src={gasComplete[1] ? "./img/labTwo/right.png" : "./img/labTwo/wrong.png"} />
                                <img className={workplaceStyles["indicator-gas-3"]} src={gasComplete[2] ? "./img/labTwo/right.png" : "./img/labTwo/wrong.png"} />
                                <img className={workplaceStyles["indicator-gas-4"]} src={gasComplete[3] ? "./img/labTwo/right.png" : "./img/labTwo/wrong.png"} />
                                <img className={workplaceStyles["indicator-gas-5"]} src={gasComplete[4] ? "./img/labTwo/right.png" : "./img/labTwo/wrong.png"} />
                                <img className={workplaceStyles["indicator-gas-6"]} src={gasComplete[5] ? "./img/labTwo/right.png" : "./img/labTwo/wrong.png"} />
                                <img className={workplaceStyles["indicator-gas-7"]} src={gasComplete[6] ? "./img/labTwo/right.png" : "./img/labTwo/wrong.png"} />
                            </div>
                        </div>
                        <div className={workplaceStyles["right"]}>
                            <div className={workplaceStyles["answer-title"]} style={{ opacity: gasTitle ? '1' : '0' }}>Ответ:</div>
                            <div className={workplaceStyles["selects-container"]}>
                                <Gas selectVis={gasStates[1].visible} states={gasStates} setStates={setGasStates} id={1} />
                                <Gas selectVis={gasStates[2].visible} states={gasStates} setStates={setGasStates} id={2} />
                                <Gas selectVis={gasStates[3].visible} states={gasStates} setStates={setGasStates} id={3} />
                                <Gas selectVis={gasStates[4].visible} states={gasStates} setStates={setGasStates} id={4} />
                                <Gas selectVis={gasStates[5].visible} states={gasStates} setStates={setGasStates} id={5} />
                                <Gas selectVis={gasStates[6].visible} states={gasStates} setStates={setGasStates} id={6} />
                                <Gas selectVis={gasStates[7].visible} states={gasStates} setStates={setGasStates} id={7} />
                            </div>
                            <div className={workplaceStyles["button-container"]}>
                                <div onClick={gasNext} className={`${workplaceStyles['next-button']} ${gasNextButton ? workplaceStyles['vis'] : ''} `}>ДАЛЕЕ  <b>{'>'}</b></div>
                                <div onClick={fromGas} className={`${workplaceStyles['next-button']} ${toTractButton ? workplaceStyles['vis'] : ''} `}>ДАЛЕЕ  <b>{'>'}</b></div>
                            </div>
                        </div>
                    </div>

                    {/*==============22222222222222222222222222222222222222222222222====================================================*/}
                    <div className={`${workplaceStyles['tract-two']} ${tractTwo ? workplaceStyles['vis'] : ''}`}>
                        <div className={workplaceStyles["left"]}>
                            <div className={workplaceStyles["description"]}>Укажите потоки, параметры температуры и давления каждой <br />зоны пароводяного тракта парового котла.</div>
                            <div>
                                <img className={`${workplaceStyles['kotel-image-2']} ${tractTwoImage ? workplaceStyles['hid'] : ''}`} src="./img/labTwo/kotel.png" />

                            </div>
                            <div style={{ display: vaporComplete[0] == true ? 'none' : 'block' }} data-id={1} onClick={selectVapor} className={workplaceStyles["vapor-one"]}>1</div>
                            <div style={{ display: vaporComplete[1] == true ? 'none' : 'block' }} data-id={2} onClick={selectVapor} className={workplaceStyles["vapor-two"]}>2</div>
                            <div style={{ display: vaporComplete[2] == true ? 'none' : 'block' }} data-id={3} onClick={selectVapor} className={workplaceStyles["vapor-three"]}>3</div>
                            <div style={{ display: vaporComplete[3] == true ? 'none' : 'block' }} data-id={4} onClick={selectVapor} className={workplaceStyles["vapor-four"]}>4</div>
                            <div style={{ display: vaporComplete[4] == true ? 'none' : 'block' }} data-id={5} onClick={selectVapor} className={workplaceStyles["vapor-five"]}>5</div>
                            <div style={{ display: vaporComplete[5] == true ? 'none' : 'block' }} data-id={6} onClick={selectVapor} className={workplaceStyles["vapor-six"]}>6</div>
                            <div style={{ display: vaporComplete[6] == true ? 'none' : 'block' }} data-id={7} onClick={selectVapor} className={workplaceStyles["vapor-seven"]}>7</div>
                            <div className={`${workplaceStyles['tract-two-container']} ${tractTwoImage ? workplaceStyles['vis'] : ''}`}>
                                <img className={workplaceStyles["tract-two-image"]} src="./img/labTwo/tract-two.png" />
                                <img className={workplaceStyles["indicator-vapor-1"]} src={vaporComplete[0] ? "./img/labTwo/right.png" : "./img/labTwo/wrong.png"} />
                                <img className={workplaceStyles["indicator-vapor-2"]} src={vaporComplete[1] ? "./img/labTwo/right.png" : "./img/labTwo/wrong.png"} />
                                <img className={workplaceStyles["indicator-vapor-3"]} src={vaporComplete[2] ? "./img/labTwo/right.png" : "./img/labTwo/wrong.png"} />
                                <img className={workplaceStyles["indicator-vapor-4"]} src={vaporComplete[3] ? "./img/labTwo/right.png" : "./img/labTwo/wrong.png"} />
                                <img className={workplaceStyles["indicator-vapor-5"]} src={vaporComplete[4] ? "./img/labTwo/right.png" : "./img/labTwo/wrong.png"} />
                                <img className={workplaceStyles["indicator-vapor-6"]} src={vaporComplete[5] ? "./img/labTwo/right.png" : "./img/labTwo/wrong.png"} />
                                <img className={workplaceStyles["indicator-vapor-7"]} src={vaporComplete[6] ? "./img/labTwo/right.png" : "./img/labTwo/wrong.png"} />
                            </div>
                        </div>
                        <div className={workplaceStyles["right"]}>
                            <div className={workplaceStyles["answer-title"]} style={{ opacity: vaporTitle ? '1' : '0' }}>Ответ:</div>
                            <div className={workplaceStyles["selects-container"]} style={{ minWidth: "903px" }}>
                                <Vapor selectVis={vaporStates[1].visible} states={vaporStates} setStates={setVaporStates} id={1} />
                                <Vapor selectVis={vaporStates[2].visible} states={vaporStates} setStates={setVaporStates} id={2} />
                                <Vapor selectVis={vaporStates[3].visible} states={vaporStates} setStates={setVaporStates} id={3} />
                                <Vapor selectVis={vaporStates[4].visible} states={vaporStates} setStates={setVaporStates} id={4} />
                                <Vapor selectVis={vaporStates[5].visible} states={vaporStates} setStates={setVaporStates} id={5} />
                                <Vapor selectVis={vaporStates[6].visible} states={vaporStates} setStates={setVaporStates} id={6} />
                                <Vapor selectVis={vaporStates[7].visible} states={vaporStates} setStates={setVaporStates} id={7} />
                            </div>
                            <div className={workplaceStyles["button-container"]}>
                                <div onClick={vaporNext} className={`${workplaceStyles['next-button']} ${vaporNextButton ? workplaceStyles['vis'] : ''} `}>ДАЛЕЕ  <b>{'>'}</b></div>
                                <div onClick={fromVapor} className={`${workplaceStyles['next-button']} ${toTractButton ? workplaceStyles['vis'] : ''} `}>ДАЛЕЕ  <b>{'>'}</b></div>
                            </div>
                        </div>
                    </div>
                    {/*==============FINAL===========FINAL=============FINAL===============*/}
                    <div className={`${workplaceStyles['final-slide']} ${final ? workplaceStyles['vis'] : ''} `}>
                        <div className={workplaceStyles["final-title"]}>Лабораторная работа завершена.</div>
                        <div className={workplaceStyles["final-container"]}>
                            <div><img className={workplaceStyles["report-image-1"]} src="./img/labTwo/full-kotel.png" /></div>
                            <div className={workplaceStyles["final-description"]}>
                                <p className={workplaceStyles["final-description-title"]}>Схема устройства парового котла с естественной циркуляцией:</p>
                                <p className={workplaceStyles["final-description-text"]}>1 – барабан; <br />2 – топочная камера;
                                    <br />3 – горелочное устройство;
                                    <br />4 – первичная пылевоздушная смесь;
                                    <br />5 – топочные экраны; <br />6 – фестон;
                                    <br />7 – опускные трубы;
                                    <br />8 – нижние коллекторы;
                                    <br />9 – первая ступень водяного экономайзера;
                                    <br />10 – вторая ступень водяного экономайзера;
                                    <br />11 – трубопровод; <br />12 – паропровод;
                                    <br />13 – конвективный пароперегреватель;
                                    <br />14 – пароохладитель;
                                    <br />15 – ширмовый пароперегреватель;
                                    <br />16 – первая ступень воздухоподогревателя;
                                    <br />17 – вторая ступень воздухоподогревателя;
                                    <br />18 – промежуточный пароперегреватель;
                                    <br />19 – подача холодного воздуха;
                                    <br />20 – уходящие газы;
                                    <br />21 – радиационный пароперегреватель;
                                    <br />22 – отводящие трубы;
                                    <br />23 – пар на турбину;
                                    <br />24 – шлаковый комод;
                                    <br />25 – канал гидрошлакоудаления;
                                    <br />26 – горизонтальный газоход;
                                    <br />27 – поворотная камера;
                                    <br />28 – конвективная шахта;
                                    <br />29 – горячий воздух
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*==============REPORT===========REPORT=============REPORT===============*/}
                    <div className={`${workplaceStyles['report-slide']} ${reportSlide ? workplaceStyles['vis'] : ''} `}>
                        <div className={workplaceStyles["report-container"]}>
                            <div className={workplaceStyles["report-left"]}>
                                <div className={workplaceStyles["report-left-text"]}>
                                    Поздравляем, Вы выполнили лабораторную работу!
                                    Текст, который описывает функциональные возможности отчета и навигацию в этой части практикума.
                                </div>
                                <Link to={`/menu/`}><div className={`${workplaceStyles['back']} ${backVis ? workplaceStyles['vis'] : ''} `}>{'<'}  НАЗАД</div></Link>
                            </div>
                            <Preview id={workplaceStyles["pdf-lab2"]} className={'pdf'}>
                                <div id={"lab2-print"} className={workplaceStyles["report-right"]}>
                                    <div className={workplaceStyles["report-right-container"]}>
                                        <div className={workplaceStyles["report-header"]}>
                                            <div className={workplaceStyles["report-header-text"]}>Котельное оборудование ТЭС. Устройство, эксплуатация, техническое обслуживание. <br />Электронный практикум</div>
                                            <div className={workplaceStyles["report-header-text"]}>Лабораторная работа 2. Устройство парового котла с естественной циркуляцией</div>
                                            <div className={workplaceStyles["report-header-text"]}>Ф. И. О.: {fullname.lastName} {fullname.firstName}</div>
                                            <div className={workplaceStyles["report-header-text"]}>Дата/ время прохождения: {formattedToday}, {today.getHours()}:{today.getMinutes()}</div>
                                            <div className={workplaceStyles["report-header-text"]}>Затрачено времени на прохождение: {Math.round((Number(timeEnd) - Number(today))/1000/60)} мин.</div>
                                            <div className={workplaceStyles["report-header-text"]}>Правильных ответов: А из N</div>
                                        </div>
                                        <div className={workplaceStyles["report-tracts"]}>
                                            <div>
                                                <img className={workplaceStyles["report-image-1"]} src="./img/labTwo/report-1.png" />
                                                <img className={workplaceStyles["report-image-2"]} src="./img/labTwo/report-2.png" />
                                            </div>
                                            <div className={workplaceStyles["report-tracts-container"]}>
                                                <div className={workplaceStyles["report-header-row"]}>
                                                    <div className={workplaceStyles["report-col-1"]}>№ зоны <br />тракта</div>
                                                    <div className={workplaceStyles["report-col-2"]}>Ваш ответ</div>
                                                    <div className={workplaceStyles["report-col-3"]}>Верный ответ</div>
                                                </div>
                                                <div className={workplaceStyles["report-title-row"]}>Газовоздушный тракт</div>
                                                <div className={workplaceStyles["report-row"]}>
                                                    <div className={workplaceStyles["report-col-1"]}>1</div>
                                                    <div className={workplaceStyles["report-col-2"]}>Среда: {gasStates[1].environment} <br />Температура: {gasStates[1].temperature} °С</div>
                                                    <div className={workplaceStyles["report-col-3"]}>Среда: Дымовые газы <br />Температура: 1700–1800 °С</div>
                                                </div>
                                                <div className={workplaceStyles["report-row"]}>
                                                    <div className={workplaceStyles["report-col-1"]}>2</div>
                                                    <div className={workplaceStyles["report-col-2"]}>Среда: {gasStates[2].environment} <br />Температура: {gasStates[2].temperature} °С</div>
                                                    <div className={workplaceStyles["report-col-3"]}>Среда: Дымовые газы <br />Температура: 1200–1300 °С</div>
                                                </div>
                                                <div className={workplaceStyles["report-row"]}>
                                                    <div className={workplaceStyles["report-col-1"]}>3</div>
                                                    <div className={workplaceStyles["report-col-2"]}>Среда: {gasStates[3].environment} <br />Температура: {gasStates[3].temperature} °С</div>
                                                    <div className={workplaceStyles["report-col-3"]}>Среда: Дымовые газы <br />Температура: 980–1050 °С</div>
                                                </div>
                                                <div className={workplaceStyles["report-row"]}>
                                                    <div className={workplaceStyles["report-col-1"]}>4</div>
                                                    <div className={workplaceStyles["report-col-2"]}>Среда: {gasStates[4].environment} <br />Температура: {gasStates[4].temperature} °С</div>
                                                    <div className={workplaceStyles["report-col-3"]}>Среда: Воздух <br />Температура: 350–400 °С</div>
                                                </div>
                                                <div className={workplaceStyles["report-row"]}>
                                                    <div className={workplaceStyles["report-col-1"]}>5</div>
                                                    <div className={workplaceStyles["report-col-2"]}>Среда: {gasStates[5].environment} <br />Температура: {gasStates[5].temperature} °С</div>
                                                    <div className={workplaceStyles["report-col-3"]}>Среда: Воздух <br />Температура: 200–250 °С</div>
                                                </div>
                                                <div className={workplaceStyles["report-row"]}>
                                                    <div className={workplaceStyles["report-col-1"]}>6</div>
                                                    <div className={workplaceStyles["report-col-2"]}>Среда: {gasStates[6].environment} <br />Температура: {gasStates[6].temperature} °С</div>
                                                    <div className={workplaceStyles["report-col-3"]}>Среда: Дымовые газы <br />Температура: 120–140 °С</div>
                                                </div>
                                                <div className={workplaceStyles["report-row"]}>
                                                    <div className={workplaceStyles["report-col-1"]}>7</div>
                                                    <div className={workplaceStyles["report-col-2"]}>Среда: {gasStates[7].environment} <br />Температура: {gasStates[7].temperature} °С</div>
                                                    <div className={workplaceStyles["report-col-3"]}>Среда: Воздух <br />Температура: 400 °С</div>
                                                </div>
                                                <div className={workplaceStyles["report-title-row"]}>Паровой тракт</div>
                                                <div className={workplaceStyles["report-row"]}>
                                                    <div className={workplaceStyles["report-col-1"]}>1</div>
                                                    <div className={workplaceStyles["report-col-2"]}>Среда: {vaporStates[1].environment} <br />Температура: {vaporStates[1].temperature} °С <br />Давление: {vaporStates[1].pressure} МПа</div>
                                                    <div className={workplaceStyles["report-col-3"]}>Среда: Пароводяная смесь <br />Температура: 490 °С <br />Давление: 15,5 МПа</div>
                                                </div>
                                                <div className={workplaceStyles["report-row"]}>
                                                    <div className={workplaceStyles["report-col-1"]}>2</div>
                                                    <div className={workplaceStyles["report-col-2"]}>Среда: {vaporStates[2].environment} <br />Температура: {vaporStates[2].temperature} °С <br />Давление: {vaporStates[2].pressure} МПа</div>
                                                    <div className={workplaceStyles["report-col-3"]}>Среда: Вода <br />Температура: 276 °С <br />Давление: 1,2 МПа</div>
                                                </div>
                                                <div className={workplaceStyles["report-row"]}>
                                                    <div className={workplaceStyles["report-col-1"]}>3</div>
                                                    <div className={workplaceStyles["report-col-2"]}>Среда: {vaporStates[3].environment} <br />Температура: {vaporStates[3].temperature} °С <br />Давление: {vaporStates[3].pressure} МПа</div>
                                                    <div className={workplaceStyles["report-col-3"]}>Среда: Вода <br />Температура: 104 °С <br />Давление: 1,1 МПа</div>
                                                </div>
                                                <div className={workplaceStyles["report-row"]}>
                                                    <div className={workplaceStyles["report-col-1"]}>4</div>
                                                    <div className={workplaceStyles["report-col-2"]}>Среда: {vaporStates[4].environment} <br />Температура: {vaporStates[4].temperature} °С <br />Давление: {vaporStates[4].pressure} МПа</div>
                                                    <div className={workplaceStyles["report-col-3"]}>Среда: Вода <br />Температура: 230 °С <br />Давление: 1,2 МПа</div>
                                                </div>
                                                <div className={workplaceStyles["report-row"]}>
                                                    <div className={workplaceStyles["report-col-1"]}>5</div>
                                                    <div className={workplaceStyles["report-col-2"]}>Среда: {vaporStates[5].environment} <br />Температура: {vaporStates[5].temperature} °С <br />Давление: {vaporStates[5].pressure} МПа</div>
                                                    <div className={workplaceStyles["report-col-3"]}>Среда: Пар <br />Температура: 560 °С <br />Давление: 14,5 МПа</div>
                                                </div>
                                                <div className={workplaceStyles["report-row"]}>
                                                    <div className={workplaceStyles["report-col-1"]}>6</div>
                                                    <div className={workplaceStyles["report-col-2"]}>Среда: {vaporStates[6].environment} <br />Температура: {vaporStates[6].temperature} °С <br />Давление: {vaporStates[6].pressure} МПа</div>
                                                    <div className={workplaceStyles["report-col-3"]}>Среда: Пар <br />Температура: 490 °С <br />Давление: 13,0 МПа</div>
                                                </div>
                                                <div className={workplaceStyles["report-row"]}>
                                                    <div className={workplaceStyles["report-col-1"]}>7</div>
                                                    <div className={workplaceStyles["report-col-2"]}>Среда: {vaporStates[7].environment} <br />Температура: {vaporStates[7].temperature} °С <br />Давление: {vaporStates[7].pressure} МПа</div>
                                                    <div className={workplaceStyles["report-col-3"]}>Среда: Пар <br />Температура: 560 °С <br />Давление: 14,0 МПа</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Preview>
                        </div>
                    </div>
                </div>
            </div>
            <div className={basedStyles['footer']}>
                <div className={basedStyles['help']}><img className={basedStyles["help-icon"]} src="./img/menu/help.png" /></div>
                <div onClick={toReport} className={`${basedStyles['report']} ${report ? basedStyles['vis'] : ''} `}><div>ОТЧЕТ</div><img className={basedStyles["report-icon"]} src="./img/menu/report.png" /></div>
                <div className={`${basedStyles['print-save']} ${printNsave ? basedStyles['vis'] : ''} `}>
                    <div onClick={() => print("a", workplaceStyles["pdf-lab2"])} className={basedStyles['save']}><div>СОХРАНИТЬ</div><img className={basedStyles["save-icon"]} src="./img/menu/save.png" /></div>
                    <div onClick={() => { window.print() }} className={basedStyles['print']}><div>ПЕЧАТЬ</div><img className={basedStyles["print-icon"]} src="./img/menu/print.png" /></div>
                </div>
            </div>
        </div>
    );
}