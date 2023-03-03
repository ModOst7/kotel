import { Link } from "react-router-dom";
import basedStyles from "../../css/Baza.module.css";
import workplaceStyles from "../../css/labTwo/workplace.module.css";

import { Preview, print } from 'react-html2pdf';
import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectFullname } from "../../features/fullname/fullnameSlice";

import Gas from "./gas";
import Vapor from "./vapor";

export default function Workplace({ theoryVis, setTheoryVis, workplace, setWorkplace, today }: { theoryVis: any, setTheoryVis: any, workplace: any, setWorkplace: any, today: any }) {
    //const today:Date = new Date();
    const yyyy = today.getFullYear();
    let mm: any = today.getMonth() + 1; // Months start at 0!
    let dd: any = today.getDate();


    if (dd < 10) { dd = '0' + dd; }
    if (mm < 10) { mm = '0' + mm; }

    const formattedToday = dd + '/' + mm + '/' + yyyy;

    const random = useMemo(() => Math.random() > 0.5 ? true : false, []);

    const [timeEnd, setTimeEnd] = useState(new Date());

    const fullname = useSelector(selectFullname);

    const [mainModified, setMainModified] = useState(false);
    const [chooseSlide, setChooseSlide] = useState(false);
    const [gasNextButton, setGasNextButton] = useState(false);
    const [vaporNextButton, setVaporNextButton] = useState(false);

    const [tractOne, setTractOne] = useState(random);
    const [tractTwo, setTractTwo] = useState(!random);
    const [final, setFinal] = useState(false);
    const [report, setReport] = useState(false);
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
        setReport(true);

        const newState = gasStates;
        for (let index: any = 1; index <= Object.keys(newState).length; index++) {
            newState[index].visible = false;
        }
        setGasStates(newState);


        setTractOneComplete(true);
        setGasNextButton(false);
        /*if (!tractTwoComplete)
            setToTractButton(true);*/
    }

    const vaporNext = () => {
        setTractTwoImage(true);
        setVaporTitle(false);
        setReport(true);

        const newState = vaporStates;
        for (let index: any = 1; index <= Object.keys(newState).length; index++) {
            newState[index].visible = false;
        }
        setVaporStates(newState);


        setTractTwoComplete(true);
        setVaporNextButton(false);
        /*if (!tractOneComplete)
            setToTractButton(true);*/
    }

    const fromGas = () => {
        /*
        if (tractTwoComplete) {
            setFinal(true);
            setReport(true);
        } else {
            setToTractButton(false);
            setChooseSlide(false);
            setTractTwo(true);
        }
        */
        //setFinal(true);
        setPrintNsave(true);
        setReportSlide(true);
        setTractOne(false);
    }

    const fromVapor = () => {

        /*
        if (tractOneComplete) {
            setFinal(true);
            setReport(true);
        } else {
            setToTractButton(false);
            setChooseSlide(false);
            setTractOne(true);
        }
        */
        //setFinal(true);
        setPrintNsave(true);
        setReportSlide(true);
        setTractTwo(false);
    }

    const toReport = () => {
        setTractOne(false);
        setTractTwo(false);
        //setTractOneComplete(false);
        //setTractTwoComplete(false);
        setFinal(false);
        setReport(false);
        setMainModified(true);

        setReportSlide(true);
        setPrintNsave(true);

        setTimeEnd(new Date());

        let result = gasComplete.reduce((sum, current) => {
            if (current) {
                return sum + 1
            } else {
                return sum;
            }
        }, 0);
        result = gasComplete.reduce((sum, current) => {
            if (current) {
                return sum + 1
            } else {
                return sum;
            }
        }, result);
    }

    const fromFinal = () => {
        setTractOne(false);
        setTractTwo(false);
        /*setTractOneComplete(false);
        setTractTwoComplete(false);*/
        setFinal(false);
        setReport(false);
        setMainModified(true);

        setReportSlide(true);
        setPrintNsave(true);
    }

    const toFinal = () => {
        setReportSlide(false);
        setPrintNsave(false);
        setFinal(true);
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
            if ((vaporStates[i + 1].environment == vaporRightAnswers[String(i + 1)].environment) && (vaporStates[i + 1].temperature == vaporRightAnswers[String(i + 1)].temperature) && (vaporStates[i + 1].pressure == vaporRightAnswers[String(i + 1)].pressure)) {
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
                                {/*<div onClick={fromGas} className={`${workplaceStyles['next-button']} ${toTractButton ? workplaceStyles['vis'] : ''} `}>ДАЛЕЕ  <b>{'>'}</b></div>*/}
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
                                <div onClick={vaporNext} className={`${workplaceStyles['next-button']} ${vaporNextButton ? workplaceStyles['vis'] : ''} `} style={{ marginRight: "350px" }} >ДАЛЕЕ  <b>{'>'}</b></div>
                                {/*<div onClick={fromVapor} className={`${workplaceStyles['next-button']} ${toTractButton ? workplaceStyles['vis'] : ''} `} style={{ marginRight: "350px" }}>ДАЛЕЕ  <b>{'>'}</b></div>*/}
                            </div>
                        </div>
                    </div>
                    {/*==============FINAL===========FINAL=============FINAL===============*/}
                    <div className={`${workplaceStyles['final-slide']} ${final ? workplaceStyles['vis'] : ''} `}>
                        <div className={workplaceStyles["final-title"]}> </div>
                        <div className={workplaceStyles["final-container"]}>
                            <div onClick={fromFinal} className={`${workplaceStyles['back']} ${workplaceStyles['vis']}`}>{'<'}  НАЗАД</div>
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
                                    Просмотреть <span onClick={toFinal}>полную схему устройства парового котла</span>
                                </div>
                                <Link to={`/menu/`}><div className={`${workplaceStyles['back']} ${backVis ? workplaceStyles['vis'] : ''} `}>{'<'}  В МЕНЮ</div></Link>
                            </div>
                            <Preview id={workplaceStyles["pdf-lab2"]} className={'pdf'}>
                                <div id={"lab2-print"} className={workplaceStyles["report-right"]}>
                                    <div className={workplaceStyles["report-right-container"]}>
                                        <div className={workplaceStyles["report-header"]}>
                                            <div className={workplaceStyles["report-header-text"]}>Котельное оборудование ТЭС. Устройство, эксплуатация, техническое обслуживание. <br />Электронный практикум</div>
                                            <div className={workplaceStyles["report-header-text"]}>Лабораторная работа 2. Устройство парового котла с естественной циркуляцией</div>
                                            <div className={workplaceStyles["report-header-text"]}>Ф. И. О.: {fullname.lastName} {fullname.firstName}</div>
                                            <div className={workplaceStyles["report-header-text"]}>Дата/ время прохождения: {formattedToday}, {today.getHours()}:{(today.getMinutes() < 10) ? '0' : ''}{today.getMinutes()}</div>
                                            <div className={workplaceStyles["report-header-text"]}>Затрачено времени на прохождение: {Math.round((Number(timeEnd) - Number(today)) / 1000 / 60)} мин.</div>
                                            <div className={workplaceStyles["report-header-text"]}>Правильных ответов: {random ? gasComplete.reduce((sum, current) => {
                                                if (current) {
                                                    return sum + 1
                                                } else {
                                                    return sum;
                                                }
                                            }, 0) : vaporComplete.reduce((sum, current) => {
                                                if (current) {
                                                    return sum + 1
                                                } else {
                                                    return sum;
                                                }
                                            }, 0)} из 7</div>
                                        </div>
                                        <div className={workplaceStyles["report-tracts"]}>
                                            <div>
                                                <img style={{display: tractOneComplete ? "block" : "none"}} className={workplaceStyles["report-image-1"]} src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZcAAAHzCAYAAADsA1BBAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz+GMfKjUSwspElYzWiMmthYjBgKizHKYDPz5peaH6/3RpKtsp2ixMavBX8BW2WtFJGSLWtiw/ScNzM1k8y53XM/93vPOd17LliCKSWtN7ghnclpAb/PsRhactheqaMHK41Ywoquzs5PBqlpXw8SLXbnMmvVjvvXWqIxXYG6JuExRdVywlPCM+s51eRd4U4lGY4Knws7Nbmg8L2pR0r8ZnKixD8ma8HAOFjahR2JKo5UsZLU0sLycvrSqTWlfB/zJa2xzMK8rL0yu9EJ4MeHg2kmGMfLEKPivbjwMCg7auS7i/lzZCVXEa+ygcYqCZLkcIq6JtVjssZFj8lIsWH2/29f9fiwp1S91QfWF8P46AfbDhTyhvF9bBiFE6h/hqtMJT97BCOfoucrWt8h2Lfg4rqiRfbgchu6ntSwFi5K9TIt8Ti8n0FbCDpuoXm51LPyOaePENyUr7qB/QMYkHj7yi/3T2ez4am6FgAAAAlwSFlzAAALEwAACxMBAJqcGAAAIABJREFUeJzsnXd4HNXVh19J7riM21CHakKHAAaDqRcChgVCgEAIkFBDL/loCQERQNQAIbQkJHQIndA39EvvvXcMQx3aGGMb2yrfH+cuWi/SaqUts7s67/PoGe3szNwjaTVn7rnn/A4oiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqL0moakDSgX1g+GA6sCqwNehYf/EngGeNFE4awKj60oipI4dedcrB9sCJyJOJakf7424HHgEBOFzyVsi6IoSsVI+uZbMqwfDANOBQ5yu1qBl4FngU8qaEoDsCgyY1oeaHS2nAScZKJwbgVtURRFSYS6cC7WDwYCDwOT6LyRn5Z0SMr6wUjgRDod3m3A1iYKO5KzSlEUpfzUi3NpBk4APkJu3lUVgnKhuv8Co4G9TBRelKxFiqIo5aXmnYv1g58CTwMDgI1NFN6fsEldYv1gZ+BKYDqwkonCDxI2SVEUpWw0Jm1ACTgccSx/r1bH4rgKuBkYARyQsC2KoihlpR6cy/pue2GiVvSAW2fJhMPWTNIWRVGUclPTzsX6wWQgANqBVxM2pxCeddvVrB/U9O9eURQlH7V+g8vMAGaYKJyTqCUFYKLwU+BTJDS2RMLmKIqilI1ady6D3baWakditx2SqBWKkoP1g5pP8FGqh1p3LoqilI5TrR/8xfrB+KQNUWqfAUkboChKJ272MApoSmD4ccAewP7WD/4OnG6i8IsE7FDqAHUuipIw1g8mALsAExHZoAWStYj5gCPodDKnmij8OmGblBpDnYuiJITLGDwYOIV51+BmAt8nYNJ8dK5jAkTAm8C3Cdii1DjqXBQlAawfeEhR7QZu13XATUirhneT0J+zfnA+sD/wPqLPd5mJwtZK26HUB+pcFCUZzkUcSwTsbaLwloTtAXEqe6FORSkBtehcGoFVgAn2+5nrmCHDmNXePhy4FpHW/9htpyKaY7WUpqz0A6wf/AJZY5kFrGei8K2ETQLAROEZSdug1A+14lwGIjIv2wC/ABYGeGLO95ghw5hBxyBghy7O+wa4HQk33IXEshUlMawfDAL+4V4eVS2ORVFKTbU7lwHA74A/A/Nn7f8YeNp+P+PTKYOHrfrknFn3A68DCwILIc5nZWAZ4DfuawbwV+B0RJlYUZJgJSQb7H0kNKYodUm1OpcGYEvgL8Cybt9bSE+UzKJn+1zgsGl50/CXRWY72wBrAM3A3sCxwMVIYzFFqSQT3fZxE4XtiVqiKGWkGiv0RyAO5FbEObwHbO++Pwp4ChGqLIQ3kDTPNYH13LnzAxcATyKil4pSSVZ322fzHqUoNU61OZfFgEeBrYFpwKFIH/obgGJTMx8B1gJ2BD4EVkOcjcrfK5VkQbd9N1ErFKXMVJNzmYTMJlZCQmBrAGcBs0s4RgeSVbYa8AAS+36QrpMBFKWcVLyORVEqSbU4l+WBe5CQ1f3IDOPtMo73FTAFad41BLgG2KKM4ymKovQrqsG5jAZuQdZabgQ2Q1KIy80cJBPtJCSB4Coku6xipDzTmPKMypz3Q9o70L+7Utck7VyakJv6BOBFYFcqW/TYgWSO/RcYiTi5UZUY+Iq5i1yOpETHKc/cn/JMqhLjKsmR8swvw/YhkwFubV3g6pRnbMozWyVtl6KUg6SdyxHITOUrpDhyRgI2tCNO7RVk5vL3cg2U8kzD9I6mhQBaaVwNGIY4NQPckfKMVkjXISnPNKQ8cyFw/RyaxgB0NDQMBTYEbk155pwk7VOUcpCkcxmLpBaDFDlOTc4UvkNqYWYDO9GZLgpAyjPzpTxzZMozmxY5zt5zaBoFMIY5JwI+UvT5ByRMd1jKM78ocgyl+tgN2BOYObphzisA6zZ+tRtwOPKZOyjlGU0qUeqKJJ3LUchT+93A/xK0I8M7wHnu+5Oh06kg1dSnIQ6xGP6U+WbrgZ9dk47tF+nYfpqO7V+AI91bxxQ5hlJ9HO22+41pmDsVYHzjnG/SsT0T+L+cYxSlLijboqL1g2WAmSYKwy7eXhRJNx6MzBKeK5cdvWQs8F5TQ9PINedb5V+jB4zaBshu+folfdcnawIW3mPgB+1jG+Y2AiuaKHw182bKMyPo7JvxFZqqWi80IJ+rucCwIwa9cxOiPrG1icJbU54Ziqy9NaF/d6W2CJFi4KeBG9KxnaehXDnlX9YALrJ+cDFwco6TORBxLNdRPY4F5J/79GGNQ1o6JEyW20t8XJHX7xhE+3S6SBpIx3Z6yjOfIbU3xc6QlOrjw3RsW4/w5xWFSMd2Vsoz9wKbon93pbYYB6yKtGk4PuWZvdOxvS3zZp+di/WDhRCdpJWZt4tehhWBQcC+wB45TmZrd0zZFs+L4F/T22ac8MR3z3nrjVhjwxFNw4+gswbmEESWpq9MH9HQ9jDdZ6QtgqzBlLJwVEmewYjYanekkBDxoMqYoyhF04hk+U5EitDXRpJTzk7H9vfQy7CYa8u6P/BHnOx9L5l216wZe506/evrkVoWn+oUj3wUmIxomt2Q8sxE4DjgynRsrynmwtYPXgOWIycspvQPrB/cRlZYLGl7FKVYUp5porNd92Bg+3Rsbyh45mL9YHFESdi4Xd8i8bbnEB2wXFYBtnPfz0LEIk87dfrXu7h9aarTsYDMTiYDWyGxxGeALVOeqVYVaUVRlERIx7YNOCvlmTlIUtQ/Up55qKCbpfWDxRAnMhpZ1N4P+G8+yXDrB7sg0/0LgNNMFH7m3sqk897ep5+kMtwGnIpIxPxAOrbV6gwVRVGS5h/IhMIAu/XoXFwo7GLEsVhgRxOFUQEDPQEsmeVUMizmti8XbHLleRNoQ7TOBuPWQKwfjAE2MFF4U4K2KYqiVB3p2LanPHM54lzWKGTmsg+wETJjKdSxYKLwnW7eykiOf1rIdRKiDfgcWVxfwPrBdOAw4CBkPUadi6Ioyo/J9CmaWIhzyVTR71+oY8nDcESgcjaVEacshk9GNDYudLbnHw9si9gNsJL1g0uKuO5Cbnui9YO4KAuVQvkQ6V76jInCan6oUZRa5w23XTyvc7F+sADSrXE6olhcLEu67WAqK1DZa4bQ0HjsyLEsMWDgrjlvLYzIeRSLyrwkgPWDZ4E9TRS+mLQtilKH/LAu3dPM5YeWrCXq950tN9NUguuVje/p4Ij4C3YaNuKC3w33VkF6zIAIXJ5VxKVPREKDzcAnRZqp9EwT8BPkszzRbZ+xfnACcKqJwqp+yFGUWqUn57KK2z5fovEyrV2/RwoJq1nq4jFg4lUzp19+1czpj1k/2Az4MxCbKLy4rxe1fnA44lxu0jqXymL9YDiiEbc/cAJStLpPokYpSp3Sk3BlpvK+qzqWvjAdUSAeAsyHhMaq9SuTePAJgInCO00Uro0UCyk1iInC70wUHoCkw88B9rZ+MKWH0xRF6QNJFAV+CiyN3Lwzi/qLI2m/2XyCCKNlGIJIzWSrCrQCLyDZXRmWQCr/s/kY+Cjr9XyIPE02c5CGZe2I013A7Z8nldpEYTnbLysVwEThPdYP/oxUFF9k/WAFE4WleoBSFIVknMuHiHNZAXgNcRhdLa62A0vR2eflv8DmXRx3HpIiDC6e3sUxbYgDyzgYiwhr5nIccLyzrwmIkBCeUn+cAfwS+cxsA1yaqDWKUmck4VzuATZG9JWuR5zNrXSGoTKESK1JhpsQ1djcmctdWa+nIpX/ubOgD4Avsl5f14Vds4EH3PeZ1rP3dPtTKDWNicJW6wc30LnQf2myFilKfZGEc7kVkVbZApkdxHSqJOfj3+4rH1/R6RjycYb76o6fu60KC9Y3mVnuxEStUJQ6JIlOlG8gXR/HIjLN1cY4YB1kUf+uHo5VapsX3DZ3/U1RlCJJwrl00Dkj2DeB8XtiT+T38gCly5JTqpPv3HZgolYoSh2ShHMBWYSfC+yELOjnsg9SE/N+1te7iBpzNmfkHPM+MjPaLOuYRuDmLo57Humrks1opFcNwJm9/7GU/ob1g6HWD6q6IFhRkiCp/iTvA/9EsrxORhb3s1mVTqmYbFbPeb02kgWWyzLAne77we643PTkdqSI7vWsfUcCHjJruTuP/Uo/xvrBAOD3iAzQcsD31g+eAU4wUXhfkrYpSrWQZPOrE4E9kIX9jYHsf8r9kEX/7JlVO5L1lc2GiPZZNrOZt6XsLKT2ZYGc46YzbwbZ4kgbY5DZSzWrBygJYf1gKLIWt57b1Q4MA9YH7rV+0Gyi8MSk7FOUaiGpsBhIDclf3PdXIbOIDB1IWvF7WV9T+fENf27OMe/Rda/ymV0cl+1YhiF1NEOBG4An+/QTKf2BExDH8ilSHzMcmRUfiziaE6wfrNf96YrSP0i6be8pyOzDIHUs6yMzjUrSAFyIhOLeQ7WmlG6wfjAEkf/pALY1UfiEe2sW0OJmNUcBhwMPJ2OlolQHSTuXucAOwNNIrcGFwG+ZV84lw27Amjn7pgN/pbPYshFZN1k057jPEMHC2V1c9yjg18AMpN7m617+DIlg/WBZJJw40X3lFqFm+A5pUf0M8DjwgInCqgn5WT9oQNbE1qVTtXhUhYbPFOQOsn7wZQ/HtiEdWQcBr2U5lmwuRT5Pa1g/2BM4iR//j2X6Al1p/WBOn6zupAN5IHrGfd2p/WqUaiFp5wLS4XJr5Ma3E7Kg/mvg26xjBgDnI+GrXN5GnBKIXMwp3YxzF/OGuwYgjikjHfMbRE6/qnFPz8cjT8eFhDXHIq2lt3Gv77J+sJeJwo/ynFMRrB/4wN+RvttJM7aAYzKN3rqTBMrsH4yEeXOVIrIZkee93jCOzoeu76wfHAb8u5oeIJT+STU4F4CXEN2wm4AU0kp4Kzp1xVqBTZDQVTbTkTWSDO8g1fVdzVyezno9CrgWmILMnvaiBloXWz9YAZGuWR6J71+NtAZ4BnmC7eqG4tMpcbIz8jO/Yv1gXxOF11TC7q6wfrAF8qQ/DpldXYH8jZ6lci2wByMyQ3OYd82vK9qQz+FvgJWtH0zoopV3pgHccyYKj7d+cC4/7lt0JaLK/Fs6Mxr7ygAkW20i8DPkf+QCYDvrB7uYKPwi38mKUk4KdS4NPR9SNA8hT2C3IxXTzwDHILOSVuQm+lgP1+gAbsvzfgPifM4AJiCzpm2AR4oxvBK4XiS3IZlvbwG7mSh8vIBTvwBeBS63fnAKcvPZCgnLvGui8Om8Z5cB6wfLIA8FQxAR0T1MFE5NwI5MSwkKvRFbP7gKcdI3Wj/4lYnCN1xobzskrR7kd4yJwh+FWLNCYdNKdPP/FLjf+sHpwK+QGf6mwGXWD7bQGYySFD2FVSK3zZ0JlIt3kfj7XUiY4h/IrGZLindwayD1KzcjjuVVYBI14FgcpyGO5SVg1QIdyzy4ePzWQOaJ+tLsG2wlcAWHlyGO5T/Az5JwLEVwCDKjXhl43frBu4gDvx5p5XC5icIbuj+9PJgo7HAz0VURvb7Ngd0rbYeiZOjJuTzrtpUU9sv8Y+yAhHqWQ57YX0A6Qeb2dMnH4sD/IbOip5BstK+RG8Rq7vpVj/WDyUj3xFZgVxOFM/t6Lfck+0dk9rM8sgBdSQ5AnPonwEElap9dMUwUfoXcwC9GEkSWRB6EIuRnS/SGbqLwQzob2v3NrWspSsXpKSyWaZ61vPWDESYKp1fAJpDw1vWIBtn+SHhsZfd1HOIUngI+9geMbfumbdrLcztaZyELrgsBCwMrAT/NuuZs4BwkdBFX5scoGZlY/nkmCl/Ie2QBmCicaf3gYCTmvw3itCvFtm57hInCb/IeWaWYKIyBPa0f7Is8/EwHplZRCOpKZB1xfSTN/9pkzVH6I3mdi7sJPQFMBloQyYtKMhs4CwmPbYzcCH+OPC0u6TWNZOLwlZk6+yNem9Vlg8gZQBpZrE9Tu0KUmZnj/SW85sPIg8MK1g+GFTMbKhTrB43IjBFkraWmMVE4FwlTVhUmCjusH1jEuUxEnYuSAIUs6B+MpPAeYv3gJhOFD5bZpq74HrjDfTUhYZUJ4weO2RTYeWTT8E+QEN7HSLjlY0Qq5lFqvJOkuyFnNNWezXdsb3APDq8hyROrIKng5WZpJAX3E63HKDtJhLQV5Qd6rJMwUfgsUgwGcJP1g51cdkxStCFZY5cvPWSJmwDGDPCeRGY0+yEzrIsRrbKadiyO0cBIYLqJwk9KfO2MaGdXIqHlYAm3faNC4/VnKv23VZR5KFRb7CQkRXg0kuFzo/WDLa0f5IpBKuWjtUauWc3j9if0d6wkSkF1LiYK51g/+DmySPhXZO1jGwDrB5+S0AL57I73RnzHAAbS/rMjJMTTVzLNouZ28V4rkrb8LFJ786iLtSuKoijdUHCFvsuE+bf1g7uRlMs1kLWABele16qsDG5oZzBzQOL4uY2/SslKwI7u+xetH+xqovDF3lzA+sHKSHgrI2GzmvWD0cBTJgqL1ZhSFEWpKnot/2Ki8ANEHDKz2LwEUhBXcf7X6m/yWceQswbRdt/OAz8+pOczuiUjaDm4i/eGISnNqyPSNKsAz1g/OA44uRfpp1vQWcENcDkiE5LbAE1RFKXmKUpbzBXAvVsiW3pNypuwrPv2WxOFr5ZxqKeRWdtwpAfNfkizsxiR2yiEc4HDmFcg8fhSGqkoilItJNksrOYwUfidicL9gV3crr9YP5hQ6LnAmVm7njNReGupbVT6N9YPBlg/+DUi8wMwn8vwnJKkXUr/Q51LHzBR+B/gGiRkdmEPh2dzLvCV+15nLUrJMVHYijz8/M3tGotkeK6UmFFKv0SdS985EFEA2MD6QUEJDVmzl0RnLdYPJrlmVku5XRtaP9iz0J9DqXqOy3kdIX1zFKViqHPpI07A8Bn3sjeL8pm1lyTpQGZcmSZTeyE3pK+6O0GpHVwbhXTWrtMrIe+jKNmoc+kjrnFXRqngSOsHU/IpF1g/aLJ+sCPSKfNg6wfHWT9Yrbvj3TmLIMKdAEOtH+xn/aDoFsAmCp8C/pez+5R+mBLd4b7qseDwOLfVWYuSCOpceolzEiciitHru93rIQrDd3QlcW79YHFE5+xqJJyWUSJ+xvrBaa7HSe45vwFeA05wu4YgN4lXrB9sUIIf5bis7z+id2tHNY/1g8GIGOp9gHUPBwN7OK2Y8eazfrA1sk73PTC8q797CfkCEdV8DdjF+sFPyjiWovyIJDXCiiblme2QjoY3pWO7bU/HlwLrB39EZh8diLT554iT3gPwgAeBjTJ9SqwfDEKEP3+KiGqej7TWXRcJRzUCR5ooPD1rjA2QxmYgYp03A0OBXZEQ3LfAiiYKwxzbVkDa565Q4I+zJjAeeAUR+sxmBqImfbOJwoI02qwfzId0ZNzK2ZvLWGAt5Gm6kA6YLwCXmSjsUvK6r1g/WAOpM1o2560Xgd+YKHy5xONtiLR0XiznrceA35ooLFk6v3NYRwPNzFtq0IGs9x3dD2eoSoVIeaYBUVtX59Ib3IL3VGAQ8AsThbdkvRcgEjHjgV1cRhnWD/ZHHMpUYPXs1rfuSfZmpIgzyLS9tX7wMqJWfBpwVKZQ0/rBAOSGvyXwHxOFu2RdayckK6jUPAdMcllI3WL9YBjwPFDqJ+R24OcmCu8oxcXcLPIlRNXhHaRnUBPSM2cxZN1pBROFn5dovJWQtblBiIxQGpm9bAcsAHwIrGSi8NsSjXc8cKx7eSviMJd14zUC55soPLAUYylKLtnOpagiyn7IushN4r5sxwJgojC0fnAq8nS4EZ03euO2J+X2VDdReIv1g4eRsNpawG3WD8YhjmUm8OdsBQATha3WD/6AOJcNM/ud0znRvfwP8F+61knriqXouhB2CaRj5WpIV9CrerjO7ohjmYoUmn5U4PjdMRjYCQkhnmj9IF2iZlznII7ldmAHE4WzAKwfHIPcjA1wBvCbEowFcAHymbkS2COjS2f94FjgHuT3ezzSMbUoXOjraPdy6+yMRDcbvhc4wPrB5W7dTVHKhjqX3pEpmOxODSAjnrl01r6M5Pmb3ZzzFuJcMnL0me1UE4Wzuzj+Hbdd2PrBYHfMMu68T5E2yG3d/wiF4xIU/obI3vTkXFJu+2cThZeXaPzbkRDaTxH9uqJaDrg1lU3dy70zjgUkTdz6wX5IO4DNrR80FOvMnHbc2sjMdP9swVMThV+7bqCPIG29i3YuwCbILOz63FR3E4UPWj/4N6IusRnSyVVRyoYu6PeOTOx/xW7ez+x/K2tfpnfJqrkHu5t3phVzxvlkzp1g/WBEF2Os7LbvZzmfzMLwV6VyLI4vcq6fj8wxX+Q9qhe4tZ5MuKgUi99LIDOi7pqVvYWsNY1FwpvFkhFTfbObFuHPue0ybvZZqvG6ayr3bM5xilI21Ln0jkeQp9CNrB/8MvsNF8v/o3t5b9Zbd7pts/WD3MZN+9G5QP8EgInCaUhXyEHAudk3HesHI5GwDsBdxf4w/ZCPkHjwAt047vmB+RAHU4qan6luu3g3ziNTxBr2tKbVy/GW6ub9CTnHKUrZUOfSC0wUfgYc415eb/3gWusH51o/OB9ZOB2LpLZel3Xaf5B+8eMQuf4LrB8cY/3gTjpFLw9xTiXDvsiaya7A09YPLrF+cDHwMhJm+YzO2LpSIK6Q8Enkc39Sdl2SU/g+1b18uBQzQNc59G2k1cKfst9zWV0ZlexStQ7PXOe31g/mmV27h5/93MuHSjSeonSLrrn0nr8i2T7NyEJ3NrcCe2bSkEGUo90s5wLgl8DeWcfPBI4ALsu+iInCl6wfbI6kr/6UztAZSCjlNznJAZlY/oLWDwaWsJnZwjnXz0fmmKBEY+NUqL1e2FAIhyAzw4OApawfXI+E3HZCEjFmU1oFhQORWebxLnPsVuTzszswCZm1/qn70wvHROHT1g8uQx5KHrd+8DckM25ZZE1nFJLIcGf3V1GU0qCpyH3E+sEyyCxmF+Qf+P8A290isHtKnoRknC2JLKjeY6Lw4zxjjECalP0LCdXs4M6Zm3NcI5JksCxSeX8Txd+Ml0Sawo0BtjFReHO+g51W2YVI3U+mlqcYBgO/QrK3HgfWKVG2GE4p4QJkRpHNV8DuJgpvK8U4WePtjSRG5Nb+fIKkrdsSjjUCuBh5kMnlLjfel6UaT1Gy0TqXEmH9YBfgCuAqE4U7F3jOKUiztdVNFL5QwPELIFlgkYnC+fMctzVwI6VZ+M5mnqLQPOMPRooC80ra9IHZwGYmCh8o5UWdtM5vkDTgVqQ25IpS1bd0Md6SyOxoIrLO9hBwoInCb8owVgMwBdgH8JGFfIsUxJbEQStKV2idS7IMRWL+WyMV6CXB1cw8iqQ134iE3PpKIzLLuhY4rifH4safbf1gEpLqewLi5F4qwoZNkQX2iSYKXyniOl1iovAj6wdnIeseHSYKzyj1GDnjvYfU60xCkjeWKodjcWN1WD94AlF3eNdE4cHlGEdR8qHOpfI8isT91y3DtT1kNnpSIbOi7nA3wF2AjU0UNhd6nivyvBOJ63eYKPxR+nUvbHgNqWCvtyfthpxtucg8xOSG/hSlIqhz6R0NwM+Qmx53zPpu8hZDhzO1de4SFFjRffA3n48+Z/T8tHZ0rLdY04B9P2hrnZHv+AO+/nzU+WPmZ3ZHx5CexpjW3jZ6VGMTp3/79RYU0Rzq/OnfTDhgxGi+bm/zexozl02isOEeCcs09PbcbKa3t48a0djISdO+2orSh9oA+MUXHw+8efzCtHd0NFK6ivy8nDv9mwkHye92XDnHPPCbz73zRhf2uVFKxsNomvcPqHPpHesBd2devDh3NlsMHc67rXPXRlKEe+TluXN4de5sVhg4ePA+w71/HD3ty7yP5p+1S0bsrI72kYjYYrd81d7OqMYm3mqdc2K+43ri9VbRNfy8rW2pnsbMJSd/t8+V+l+3tzGisZF32uae0tdr9MQs95tvl/+DkqgK9MQb7ncbtbUtWc4xP2uTv8TMjvZR5RxHmYfXKFw0tu5R59I7MlXbHwEPjmtsWgKYPLqxcSoS7iqIs6Z/M/y80f7maw8eOujQEaNf+uv0b17uzsE0SdbUL4c1NLY2wnXtecJEwxoatgC8kQ2NaaDP8XyvoXEcMGV4Q8OX9LJYs0FmLDu5l30W0hzW0LAlMGpEQ8PtwLSeju8LTbIutCOyAHl1OcbIJfO7na+h4SvKmBI8pKFhKLDtQBq+R9bglPIxFNiW0qg61A3qXPrG08Auew/3dgEmrzZoyGPIGkVBvNs6lyENjVsAt285dPjKWw4d/gnwexOFP9If+0JmLh8MamhY9D4/ODWfHPwCTQNeBLwzR/tHF7PmcqI3fm1gSjBg4Lv04ucCuE/SojPOpVfnZjO+acBrwKhzRs//RxOF3Wm5FUV6/CJDgB0HNDRk+s6XnZO88WvRx99tb7hy7IILAtsOb2ycVs5xFEASTyqerVrtaIV+QjgJ+T2Rp/LNkCZgF1s/2Nf6wTo5HSczs6JyJAEoiqKUHK1z6R0/jAds25c6l1xc58qTkWZjNf33UJQ6pg2JWFwPnJOjBTc/Isn0BVJX1G/JrnPRmUvCmCiMTBTuhagmH4Esvj6PFA8qilIdNCE9l84EHnIiskoedM2lSjBR+CIiftkl1g/WRFIdByFaVGd0IQPzIiLJv2qRdS5rI9X2T5ooXKuX5zbiksZMFPZ5JubqXJZD2jmXZc3F+sEQYBYwx0Th4HKM0cWYayFyNk+ZKJxUxnEy/W8+N1G4QLnG6S9YPxgDbAychWSGngn8LlGjqhydudQIrnNgptL6ZOAF6wcbJ2iSovQbTBR+baLwemR9dA6wl/WDhRI2q6rRmUsNYaLwAusHnyJPT8sD91o/CBEp/pcRkUmArawfrFLEUJm+H+OsH+zay3OzZex7e242mYSGra0fTCziOvkY6LZN1g9OBt5HbhzlJNNrpS+/296QUZMeWuZx6pEm4CMThXfnvmGi8BXrB48gCtprAnkFXfsz6lxqDBOFt1pDQEfYAAAgAElEQVQ/uBs4FGlOFrivVNZhJ5RouKUQ2f++Usy5GU4qwTV6ogk4qgLjZLMkpfn99MTICo1Td1g/6C4km6m7Gl5Je2oNdS41iGv/e7L1g78gs4yV3NeBwGhEsPDr7q/QI+OR6f+XiIR/b2igs67iiiJs+Dkye7kNiIu4Tj4yfVw63Bijs977hM7Oo6VkHLA5ffvd9oahiOz+90iGk1I46wGLI7+/eZyLW8jPlASUTHi2HlHnUsO4dMg33Nf1TnZ/NHBMCRb0N0MUdX/by3Mbcc6lt+fmXOc1xLkcVeYF/Z2AuSYKx1g/8BCp+vOBhZDsoFQpx3cL+psD7xXz+ylgnAWRm+O0co5Tj1g/mIKoJ/zJ+sHLwE1OaXoM0thvPPAMIveidIMu6CuKw0RhbKLwWkQo82lgUeAK15JY6SeYKLwLOA/JzLwReNv6wWNIA7wtkcZ9uxXSiqI/ozMXRcnBROGH1g8M8DpSf7Qn0g204rgmbJOcHdORDqavatOvsvN74B2kmdxSdCZiPAj8zkTh20kZVivozEVRusBE4QzgcPfyZOsHo/MdXw6sH2yIhDwfRNokX4RkBd6uabDlxURhm4nCs5Hq+1WBTYD5TRRuqI6lMHTmoijdcz1SW7QO0jn00koNbP1gI+Ae5AHwHeABZA1qUyQz8DHrByubKPy2Ujb1R0wUzkYX7vuEzlwUpRtc6Ckji9/n5mu9xfrBUOBi5P/zPGB5E4W/M1G4A9Iv5AVgMeC0StmkKL1FnYui5CfT4qBizgWYjDiPt4BDs2V+TBR+DGSKIn9tpeunolQd6lwUJT9JOJdV3fa+XP04x8uICu8opBhTUaoOdS6Kkp+P3XZcBcfMSN981tWbLlz3qXvpdXWMoiSNOhdFyY+m/CpKH1DnoiiKopQcdS6KoihKyVHnoiiKopQcdS6KoihKyVHnoiiKopQcdS6KoihKyVHnoii1ycCeD1GU5FDnoii1yWJuq+rISlWizkVRapOMovmovEcpSkKoc1EURVFKjjoXRVEUpeSoc1GU6mNZt10mUSsUpQjUuShK9bGA2y6YqBWKUgQ12eY45ZmFgX/QmSmzdsoztwFXp2N7VXKWKYqiKFCjM5d0bD8GhgKru10LAJsADyVmlKIoivIDNelcHMflvL4oHduPkjBEURRFmZeadS7p2D4KvORetgOnJGiOoiiKkkXNOhfHdW47VWctiqIo1UNNLuhn8YbbvpWoFYqi9JWlgL2BNYFFgdnI//WlwG1om+mapdadS4ZZSRugKEqvGQy8477/DvgEWM59bQNcCfwWdTA1Sa2HxRRFqW0sMmsZiRSNLgLsB8wEdgF2Ts40pRjUuSiKkhRzgI2Bp+mcnXwM/BM43b1OJWCXUgLqJSymKErtkS/c9azbLloJQ5TSozMXRVGqkfnd9v1ErVD6jDoXRVGqjYHAbu77ixK0QykCdS6KolQDA5EQ2M+B+xBl6D2ABxK0SSkCXXNRFCVpvgPmy3r9COJcvkzGHKUUqHNRCmUQsCeSNroi0IYUu10EPJygXUrt8z/EufjAYsC6wGvAycC5yGdNqTHUuSiFsDxwFbAK8o/+MTAOmATsitwADk7MOqXW2T7r+0bgZ8DZwFlIqOzQJIxSikPXXJRC2BaR6TgMGIs8XY4AfgXMAA5y3yulYZrbxnmOaXfb2WW2pdK0A3cDmyOfrd8DExK1SOkT6lyUQvgAWA34K503vnZEOPQY93q3yptVtzzvti/mOeZjt63XVN2pwFNAA7BWsqYofUHDYkohXJHnvbvd9qeVMKSfka/IcEYBx9Q609223mZn/QKduSjFMtNtddFVKSXz0TljeTpJQ5S+oc5FKZaV3fbdRK1QapFjgMld7B8FXIJkj92OhGWVGkPDYkoxNCALrpA/dKYoXTEJaEF0xF4BPkWSRaYAY4C3kWzEeg791S3qXJRiOAYwwMtI7w1F6Q3/BEYD6wCrZ+0PgVORFPfvE7BLKQHqXJS+0AScAhyBNHjaEr0JKL3nDvc1DFjYbd9FKvaVGkedi9JbxgD/ATYDnkRqYD5J1CKl1pmJhMCUOkIX9JXesBoSH98MOB/YEHUsiqJ0gc5clEJZG7jHff9L4MYEbVEUpcpR56IUwlKIuOAcJJNH6w4URcmLOhelEI5Bag92RR2LoigFoGsuSk80Ar9Gag2uS9gWRVFqBJ25KD0xPzAYEap8podj7wCOKrtFiqJUPepclJ4YQ6dwYE/S5/OX2RZFqXXmA4ZmvY6B1gLPHYiEp6cBc3vx/hg6o1RtwDcFjDUWUeDI5SsKVEzQsJjSE68CQwr82i0ZExWlZjgK+CLn60qkf01PTHbHr9nN+2u593NbFDybNdbXwOuIAsKS3VxnONJiOtfOLwqw8QfUuSiKolSWuUi3zc2A05EOr3cgdWPl4n9uzF8ibTIOcNvBXRy7nNse7s75GXBxbwfUsJiiKEplaQPuc9/fBaSRBnFbAw+UacyPs8a8EQl1HwGsxI/XUld02yuBz9333c2WukVnLoqiKMnyBZIwU0kJnM/dmF11Ml0BUaj+vIv3Ckadi6IoSnIMBv6AdBa9tUJjLgDsh/TK+aqL91egs9V2n1HnoijJ0FUmTiHvFXpsb66hVJZBwLXIzf1LYAOk6d5HZRxzYzfmE8is5DZk/SWXBiRUps5FUWqMzJPiInmOCdz2yyKuU8g1lGRoQNpWtCLZWysBf6FzIb2cY05HWhr8BslcG5Zz3JpI+4PHih1QnYuiVJZ3gW+BBa0frJH7pvWD4Uh2DkgKaXdk3tu6m/e3zjlOqR5mI7OGXyCdN5cE1gfOK+OY97oxN0EatB0GHA/smHPc3shay93FDqjORVEqiInCduAi9/JK6wc/PK1aP/CAy4GFgBfJr4hwBZLSupv1gwOsHzS4azRYP9gRyQQiayylepmKOBZD/hltqWhFPj+vIzOYDCMRZ3MFhRd2dos6F0WpPMcg/9g/AV60fvCI9YP/IZk72wCzgF1NFLZ1dwETha8CR7uX5wFvWz+4GSl6vRopMzjLROFD5fsxlBLiIaGrIRUarxFxJtlhsZ3c60tKNYCiKBXEROFMpNr6EkSyYx2koM5DunuubqLwxQKuczrwK2RdZSkkFLYcElffFwl9KNXNQGTGsifywPFeBcYci6y3LIws7IM4tn2Ap4DXSjGIFlEqSgKYKIyBPawfHAlMRDSnngfeN1FYkHaTu851bsayIrAMcnN6yUThrDKYrZSGIchDRAOwNPJQ8R6wPVJ70hP/Rh4gchnptv9CMs82yXrvF0hG2iC3bURUzk8FRgAW+Cmy3vJkF9deyG2fBB4BDu3JSHUuipIgJgq/BO4s8hpzgOfcl1LdPAaclfU6jcwUbqFTILY7Pso5tyv+h7QjXz1r30WIeGWGK4DH3RdIFtnqSJ3Nuz1cf0sknNsj6lwURVEqR9p99YV3KWDGAPwemZ1kOLHA619IZ5isOxZGZtk9omsuiqIoSsnRmYuiKEqZsX6wGLKIvjYwHngJqZi/tDdrbAUyh67XZPIxncLSj2dR4KREnYui1CerI5LplaibAHiIztRoJQvrB1sB/0EWzjMsCEwBdrB+sG2JEzD+7r4KJaYzGaAndiv0oupcFKW++ClwHN1X7peLdYGTEQFGxWH9YBFkAX0EcDNwBpKRZZBMrc2AFuRBoK5Q56Io9cFKiFPZ1r2ehTy93kaBbWmL4C4kvVbXcH/M4Ujr4duBbbNCYO9YP3gRydj6P+sHp7rMwaKwfjAOOA040URhV3L6FUOdi6LUNisAf0ZqJAC+B/6J3GA+q5AN3SoJKD+0HD47d23FROFT1g8eQ2Z9ayBpxMXSBOwB/Nb6weUk6GTUuSj5aKrQOUrvWRZxKr9CivHmABcgoZZPErTrR1g/WBXpH7IG0kukrmjv6GiMO9ppgLGjG5s+zXl7nNt+083pGXXr86wf5CoU94XM7HEACTsZdS5KV3zothOsHzT0MpslU2D1QYltUoSfAMcCv0ZuJHORiu1TKG8/kD7hFAhOoo7vNY0NDYxpaAL5e3TnPKeQo1DtFLDXdi8X4Mfy96VgALAqIgukzkVJnE+QkMoCSAz/xl6cu6fb5lP0VXrPBKAZ2AW5ibUiTuVkOh8GqgrrB1si4TmQ9Z9rEJmTcq8BVZTrZk4ff93M6S80wlfXjVto5Zy3pwAXA0dbP3jaROE9ANYPRiDacj7wArAehWds5WO8ux6InNDxJgpvKcF1e406F+VHmCjssH5wIqK2e4n1g9FIPPjbPKctCOyKVAe3I0/S9UAmfbQnaY5ysSSiovxbJOTYhlRSn4RItVclrgXAOe7lESYKz0jSnjKTWXNqN1GYG5K8xPrBxsDOwN1uEf9zRE9uDLJGtpuJwu+QJl5FYf2gjYSdSgZ1Lkp3/BNpYLQD8oRcKB3AkSYK66VJ1YpuWxKl2F6wGOJUdkP+T9uQJ90TqYxybrEsDCyB1FD0pIdV7+yGfH6OBVbJ2v8MsLuJwldKOFZkonC1El6vz6hzqS8yiqpF/11NFLa5plN3I/H91RBF1e74FlFMPcdEoS12fDp/hkJUYsvJSm5byhtAPgKkGHEPRI69HWkg1gK8UyEbSsFSbvtOvr40/QETha3AydYPzkHqkMYjzeB6pYBd4FhVE3JU51JfZPLkx5fiYu6DehHJdDP03faLBMbOZqLbvlzmcRZG5EF+hzjxDuAq4ATgzTKPXQ7ecttlrR8McsrN/RoX+nokaTsqhRY91ReZuob5E7WiSKwfDEEKz1qBrxO0YxmkO18HcF+ZhlkQOBtRvD0Ama1ci4TjdqY2HQsmCj9FQkHDkZRppZ+hM5f6IpM1tHyiVhRPpq/8R67nfMVxC9J/Q272F5kofKnEQ8wP/AGp/8i0tr0BOJ7KheDKzf7AA8CfnKO+BnGi3YVuBiHrNN0xB0liKFfoZy7wdolmWZsBpwMpIOzi/U2BM5Hfxy+KHOtOJCTdnRP/H7K+05y1bz/k75NhKtLP5Ta6L749Cfh5F/uPBW7K3anOpb6wwJ+Q9McjE7alGKa47f1JDO4cy5HIDeJb5HdaKsa7ax8ADHX7bkKkW0rtwBLFROGD1g/2RLLGtnNf1c4c6wcPA4eYKHy1iOuMQmafXa1TDke6RS5GaaJHy5C/xuknQG5xp+/sy9Qg/RR5mPorEgruasb8M8TejCMZARwMjO5qUHUu9cXDwExgZesHi5korNVCxi3dtqgOjX3B+sFIpC4hcyM83ERhVIJLj0N0pg6ks9nSrYhTeb4E169KTBRebP3AIvVPE5EwYHeMp5sblaMduUmWSxxzPiQRYWPgOesH25sovLUM45yAtA2+C0ngSIo2JCMxw6aITXsgs+psGhGpobPonAEtiDiXLlHnUkeYKJxt/eA2RBLkUOCQhE3qNdYP1gbWQXL+767QsA3WD45ANJ7WQ25w3wK7mii8uchrjwEOQ/4Jh7t9dyBOpV8UmjrZkWN6PLAKsH4wFlEu3g242PrBCiYKPy/hEGsi/5fHA0szr3NpQFokrI6ESh+islI+jyChwbldvLco4nwLfhDSBf36I1O8uLf1g3xPidXKsW57ronCaRUacyDwFySePBr5B5pYpGMZjTyhTkXCasORmdgkZGbWLxxLrWGi8CtklnU/MJZOxYlSMBApgH0N0YDLvf+ej6ybXgScC3yMzG4rxY7Oxq4+95l6r37jXDIiiaWQTagLTBS+iHw4hiBPXjXzN7Z+sCuyzjGDMhbeWT8Yaf1gDyRLqxV5UrsCqYJfEljdROHbfbz8KGRh9X0kfDACuAeYDGwOPFWc9Uq5cUkkl7iXa5bw0ocjN+m9kOSEXK5GiizHIwkf+wBb0ZkOX2oagX2RmfWdyPrLDnT94LMiMI1eqELUelhsE7fdMOWZVdOxrdvYdS85GKmu3wyJnVa9FIv1gxXp7J53iInCstS3WD/YAHEkubHuKcA1RSjHjkR+74cBntt3P+Jo+k1tQx0Ru22pHlx/gnwWzkYyu7ri4ZzXmdqqIbkHlogGRPFhAPJQ9BHi1IYha7fZbIIIbxacqVczT7XdkOkT3QQ8lPLMlHwH9xdMFIaIzhdIZfAfXAZUVWL9YCKS6TYMaQd7cZnGWQJZ7wiQ6f2RyNrU40j2zM3WD1bq/gpdMhwpfnwfqaL3kFj5hsjCsDqW2mRjty3FA2sjkh32KT2vPY0BjkD+B65C9P0eK4ENXdGGJJp4wOKIMsRpiCJENksDGyEzq4KpdeeSkZWYhfyT357yzG7JmVM9mCi8HclM6kDiu/92ApRVg/WDRhcKs8iH/C5gnzJKWJyJLEreBEwyUXi6icKzkIX8S5B487kFXms+xDm9jygTj0EcycaIY3mwpJYrFcP6QQo4yL28oQSX3BPYAAlz9ZTpNhJp/PYL5GHrY8ojxZ/LB4hTuRgJxXlZ7+2F3GOv680Faz0sllGq/RIp0DoCuCTlmUWAk9KxrRqdnSQwUXi+9YOvkA/NnsDPrR+0IOGfxGRVrB8MRHLmj0Yyw0CeinYrl0yIW3vayL081EThDxkxJgrbrR8cisz21rF+MNRE4axuLjUMKUA7kk6JmseRkMe91JmcfClws+YVyN8srAFYmfypyCBFh10VJZaC4YiNmXD72SYKHy/ymuORYsrLKCz7cSqyztOA1J48gawJnlmkHYXyNlKbMwFZexmEZM7dQH5V9B9R684lE5N8PR3bI1OeCZGYZgsQpDxzQDq2rcmZlzwmCq+xfvAqMr1eHyloO8v6wYOI/lOILNSVm8GIftaiyE1+jNsfIQ8FV5RZdG8sEleeSReNzEwUxtYPPkFSQRcD3sg5ZCjy5PlHOuV1nkKcyl2oU+kS6weLI0/DJmFTesNc5O96egmudSLyEHxoL8/rQPqyvI7MhivhXDIPTt/RqRLxc+Qh6pLuTuqOWncuGccxAyAd23NTnvkEidvvDSyU8syO6diWq+iqJjBR+LL1gw2BXyIFUpsgN/iN8p1XZt5AYsrnmiiMezq4BHyJLNJ6iMTIPLL11g/GIM5vLvN27BuCiEkeRWcB4LPIzSeNOpVusX4wP7J47SNtfu8jf7OwVel5AX0q5etyOhd5YH2ki74sfWVjJAOrEI28i5EHvYeRmcvPkOyxQlperElnY7ZcxiIzstOQGVSmfUST29eAVPlvgsxUdkL6zOyKZLi1ITI2m+VcN1O3tb07/wSyEgFq3bn8iHRsb0x55jNEI2dL4P6UZ7ZKx7YUVdY1i5sVXA9cb/1gHFIsGLiv+fKdWyJakYKwjxC58VcqKQ/uGqDdg/wjnGP9YDsThbMBrB8MQGZ0DcBDbv9gxBEfjTgdkCfJPyOfLXUqPXMu4lgeBbYtkdJBrRAjyQDP0v26zVTkc5b9elMkDPU9EmbdmZ4X0l9FKv436eb99xBHciTyt3gN0Q97Puuc6Uj4/Fx3PYBtkPvDS3QmOOTyPJIJl9FSq1/nApCO7aMpz0xGcrfXBB5LeWazdGxrqR9G2TBR+CVdCM31Aw5DUo63AJ61fpDRLpuMVEXPRhZyf4OEMxZ177+EVNTfjDqVgrB+MAyR0GkHdu5njgUkVHpXD8ccnfP6BPeVyews9LO2Zc+HMIrO9GqAC9xXT9yPtDrPx+bILH4eaj1brFvSsX0DWBvxrEshDqaUBVFKjeFStKcgi8IrII7kIMSxfARsYaLwa+QJblHkCW57JFxzE+pYesNKyP3ltRrWuCspLjvyJ9YP1nEadt3RQR181urWuQCkY/spkgJ4N5K18UDKM4V4eaVOMVH4BJKV9Gs61+z2AlYwUXgfnUrFH7vjbiD5bpi1SCbbrhIh16rG+kGD9YO9gM8RteFHgGnWD+6wfrBo/rNrl7p2LgDp2E5Hpo2XITeOW1Ke2TtZq5QkMVE400ThNXQ6l6tNFOamWbaiTqUYXkPi70tYP1inp4PrnL8hi/LjkELKF5DkgRTwovWDCdkHWz9YzvrBgSW24Ttkhv5QL845DFnQ74nH3LXnScype+cCkI7tXGB3JI7eCFyQ8swJKc9UbdW6otQyrm/82e7lNdYP1k/SnqSwfrAxIgs0F9gFWNhE4apI2PU+JHvxEje7Wc76wdVIGnBXTbmKoQ14jhwH0APvkpNV2Q3T3LXnKfuoywX9rnAFlc0pz3yEaFg1I7UwezvnoyhKaTkeSXefBDxo/eBT8neirEnmdHQMeqN1Dk3grTBwcO7MYBm3PcVE4X8yO00Ufmb94FdI0eK6SAbi5nQ+8E+0ftCbWUY+/mOisJDF+5LSb5xLhnRsL3C1MNciKX8LpjyzvQufKYpSIlx/ofWRB7mDkTqhWmwDkZdBDQ2sPHAwiHzQet0cdnvuDhOFX1k/eAJxKtmOBUSpoLtr9ZZGCssMKyn9zrkApGN7W8ozGyIihlOQhf4t0rHtrne0oih9wMn5NFs/+DMiKVJ3zuX1ubNHX/DdtJuaID5ztP+LnLcvQGYv3SU2ZBSPD0BS4ndCalKeQdY8SkEiavH90rkApGP7VMozayO1MKsBj7tamK56RyuKUgSuR8pb7qveyMgBzTVROI9gqaulWgbJSHwg570V6NTWu9lE4T+d9l8zMM5EYanCYonQLxb0u8MVVU4GnkYkpx9Leaa/Z7YoilI6zkLSsne2fnCB9YOlXbO6rYH/IXIrF5so/AzAROHbJgp/i6TK1zT92rkAOFkYg8RExwD3pjyzTbJWKYpSD7iOpvsi2WJ7IzO3aYjaQ4A82P5I1LKCLb7LRr93LgBO2HIbpKHPEODGlGdKnWeuKEo/xETh5UgdyM1IIWUrsg5yFLBOPTiSrui3ay65pGPbmvLMvogEfQtwbsozAXBUOrZaTKcoSp8xUfgysI3rbdPg1qDqGp25ZJGObUc6ticiBZetiIroFSnPDM5/pqIoSs+YKOzoD44F1Ll0STq2lyKSMd8hqYH/S3lmVKJGKYqi1BDqXLohHdu7ENHLz5AF/4dHNA4fm6xViqIotYE6lzykY/scItv/JrDSkkMWPTlhkxRFUWoCdS49kI7tVKTQ6bGmhsaxAIMbBo1L1ChFUZQqR51LAaRj+xXws9ntc54E8JpGrpPyzI4Jm6UoilK1qHMpkHRsZ7026+0zARoaGhqBq59u81IJm6UoilJNZLTjvtU6l17QQUc7wHdtM18BVow6Bv8aoKMD7QujKEq3pDzTiDQHWxvpivsScFs6tvXWAnp1t31WZy594Lv2GW8DO0NHB8AHHUPXS3lmSA+nKYrSD0l5ZjFEtPI24E/A74BzgddTnjmwzpoWbuS2z6hz6SPp2F61cMP3FwLMYsAiwD0pz4xJ2CxFUaoIV4B9O9Kb5XPgVOD/gFuRtuvnUgcilQApz6wKZGSzblbnUgQ/bfr2IYBG2mci3eQecU8piqIoAAcBKwLvACukY3tUOrZ/S8d2a+AQd8y5Kc8MTczCEpDyzBLAlYik2Hnp2D6mzqUELN4w627gVWA54ImUZ36asEmKolQHP3PbY13WaTbnAm8gauyrVtSqEpHyzLiUZ/YHXgaWR1Sf/wgqXFkSBjf8MHO5Ganqfzjlme3Ssb07WcsUJXnceuSmwBrAAgmbU3JmtM0c+uD0J2miacQUb/1/57w92W1fyT0vHduOlGdeBZYFLkh55uNy21pCGoGlkT5YGW4A9ncq8+pcSkU6tnHKM1OAy4BfAXekPLNXOraXJWyaoiRGyjNrApcj3RjrkgGNchttamgcgnSc7IrVkKf7H3AL+Su7lyu6r1pjJtI+4Jx0bK/LfkOdSwlJx3Z2yjM7AR8h/a8vTXlmVu4vXVH6AynPTAAsMAwJl9wMvAd0JGlXqfm+bfZI4PTWjrbpwOE5b28KbAccnfLMbenYfp313v7I0/+3wG+BOZWwt4SEwOvp2LZ19aY6lxLjer8cnvJMCJwCeAmbpChJcQHiWG4CdkrH9vuE7SkX8wOnt9P+fTq2/8p+I+WZy5Cw1wrAqynPXIRkjW0E/MIddkA6trdU0uBKoAv6ZSId27OBkbkfNkXpD7gWFRsh7X1/V8eOJS/p2M5G2nc8iqw3HQ2cgziW74HfA/9JzMAyojOXMpKObWvSNihKQqzktq92kSXVr0jHdmrKMxsgTiZTof8iUqH/fqLGlRF1LoqilIMv3NZP1Ioqwa1L3OK++gUaFqswKc+MSnnmeK2FUeqct4FvgIVSntk6aWOUyqPOpfKsDRwLPJryzBZJG6Mo5cAltpzgXl6W8sxuKc/Ml6RNSmXRsFjluRfJ+/8tcEvKM/umY3thwjYpSjk4B2m090vgEuCilGc+o/tU5JFIdll3dADTkIXwcjAXKXa8D/h7Ora1lhpcVahzqTDp2LamPLMbkiN+NPDvlGcC4Lh0bOsq/1/p36Rj257yzA7AboiO1orAQkVedmyxdvXA4sjC++4pz2ybju27ZR6vblHnkgDOiRzjamH+joTJgpRn9knHdm6y1ilK6XCf9UuAS5w4Y74W4Y3kl4eZDZQz82w+RKLmOKRy/pqUZ9bWrM++oc4lQdKxvSDlmU+Aa4HdgQVTntk+HdvvEjZNUUpOOrazkBl7PpJunvVGyjO3Ic28JiLh64uTNak20QX9hEnH9jbAAF8CmwEPpjxTd+J+ilIrpGMbA2e4l+snaUsto86lCkjH9klEPfVdRODOpjwzMFmrFKVf86bbTkjUihpGnUuVkI7t24iDeQDJitHFfUVJjhXc9o1ErahhdM2likjHNgJMyjMNmjmmKMmQ8sz8wJHu5QMJmlLTqHOpQtSxKPVIyjPjyZ8NNpr82WQAHyJZY+VgOJItdhSidPwwcFWZxqp71LkoilI2Up5pQmpcDgYWS9ic3vAo8GunNKD0AXUuNULKM9sBywF/0cphpRZIeWYAkAY2cbtmAlPpej2xEQiAnhJZvgWiEpmYyxykQv9+4IrumuqgcQ8AACAASURBVGAphaHOpXY4ApiErMlsm47ttKQNUpQe+APiWL4Afgfcrjfs/oNmi9UO+9PZwe6hlGcWTtgeRekWFw77g3u5czq2t6hj6V+oc6kR0rF9DlFUfhORpngi5ZkV8p+lKImxDDAC+DAd23uSNkapPBoWqyHSsX0/5Zl1gFuRmphHU57ZOh3bBxM2TVFy8dz2m0StqBJSnpkANDNvJ8rrgH/Wa9KAzlxqDNcy9mfATcAo4O6UZ36VrFWK8iNeQhbuV+jvckYuGedFRKdsacTxbgCcD9xbr31u1LnUIE4AcHvgPGAQot56aMozDclapiiCE19NI9GRy1KeGZmwSYmQ8sxiwKVIn5prgNWBRRBHEyG6gqe6YzdJeebkZCwtPRoWq1HSsW1LeeZgRGX2NOBMIEYVXJXqYT/gZWBT4LWUZ9KIfl5dFQl/2/bd8EemP00TjcOmeBscmfP2z5HizP8CO2UVSF+R8syrwJPAASnPrAmsSR0pAqhzqWHcB/UvKc98hDz9zEjYJEX5gXRsw5RnJiOdV1dH0pHrjsGNgwBoamiaD3nQ64q/d6G8MQb5nx2FOBaAtV2fp654D3jGfd2bju0XxdhdbtS51AHp2F6FylQoVUg6tq+lPLMWspA9keI7UVYdc9vnDgP2b+tom4k0/8tmd6R7Zpy9M+WZIUgL6Ny2zoORsFlXLEJnC4BvU575PXBptcpFqXNRFKWsuE6OD7uvemR+YP822mekY3tE9huuhfmvgCnAs5n96dh+n/LM34CDEOczHUndfsIdn8sARKFjdWBjxMlcDGyb8sxuLtGnqlDnoiiKUj6uQJxFc8ozL7vmgKQ8Mxq4DHEszyBKBocAq6Rj+2E313oPuCPlmRYkIeBsYEskYWKrapvBaLZYHZPyzPiUZ/6Z8syGSduiKP2RdGzvQGYYQ4BbU555M+WZhxB1562QNZfd0rGN07E9HskC7emaHenYXgasCkwDtgB2LdfP0FfUudQ3qwH7APekPPObpI1RlH7K3sBhiCP5CbAekkH2KLB6OravZg7sjUROOrbvI7MdgLNTnvFLZnEJUOdS39yDpCgPAC5PeeYorYVRlMqSjm1bOrZ/RUJgE4HNgYXTsV03Hds385/dI5cDDwEjkbWYqkHXXOoYJytxuEttPAs4GQhSnjlIRQQVpbKkYzubrEX9El2zI+WZ+5AF/onA1aW8fjHozKUfkI7t2cAOSAe//YD/pjyTmwKpKEpt8ozbTkzUihzUufQT0rG9AclI+QapGr4v5ZmeWsoqilL9vOa2SyVqRQ7qXPoR6dg+jBRufQisBTyW8kxVfSAVRek1rW5bVeup6lz6GenYvo5US7+IKLTalGcGJWuVoij1hjqXfkg6tp8gC4DXI0KCrfnPUBRF6R2aLdZPScf2W2SRX1FKw8gj/0DjiPeSNqPitH22GNPPT9qKqkOdi6IopaFh0NFJm5AIjcPdN02DQTP8M6hzURSlVLQjofa5SCfK16jfu+0SSOpvVhfJtjlJGVONqHNRfkTKM78DVgL+5DoKKkrPtH64GgOXPgFJdV8daed7KHAbcXNViSr2Ga9lVeAcYF2353laPz4OuIU6a4JWLLqgr3TFrogU+IP9vf+50gtmXP4ecfPWiLz860jdxS3AnXgtyyVqW7F4LePxWv6FVNivC3yBND9bgxlXPpmobVWKOhelK3ZH5L1XAx5PeWaZhO1Raom4+W5gFeD3iGrvpsDLeC1/w2vxErWtt3gtA/Fa/g94G3EmbYiU0k+Imy8kbq7XsF/RqHNRfkQ6tm8DkxFZicWRYsvJiRql1BZx81zi5rORWqp/IfeaQ4C38Vr2xmtpStS+QvBapiBrR39FWhHfBaxM3HwocXOc91xFnYvSNenYfg5sCKSRXt/3pTyzTaJGKbVH3PwFcfM+yBrMw8A44ALgabyW9RK1rTu8lgl4LbcCdwLLAu8gvVc2J25+PVHbagh1Lkq3pGM7A9gauBBpdnRjyjMHJGuVUpPEzc8DGwA7AiHS6OohvJar8VqCRG3L4LWMwGs5Dcly2wr4DvgDsCJx8+11k5RQIdS5KHlx/c/3Bv6MaBedl/LMqSnP6GdH6R1xcwdx87XIbOAE4HvE2byJ13IsXsvQROzyWhrxWnYF3gKOBAYClyLrKn8hbp6diF01jt4glB5xbVVPAPZAFjT/AOyfrFVKzRI3zyRu/jPiZK4HhgLHA6/jtfwSr6VyAoxeyyTgccSZLAA8CUwibt6duPnTitlRh6hzUQomHdtLgC2RdMx3EjZHqU0GIiHWgcTNHxA37wAYZOF8McTZ3I/XsnJZrfBaFsRruQx4AlgT+AxJwZ9M3PxUWcfuJ9R0EWU7DQ2zGMqXjF4Ir6X8Olkzb53EnKfle6+l8ZH2u5Zft/EDPuoYuQhey3zEzTPcU9cGgA/MAe4lbv7O7V8fmB+pYL6nm/33EjdPd/vXQ56mcvevCyyICE7eS9z8rdu/DrBQD/vvI26e5vZPBhZGZiP3EjdPcz/bZGARt/++HzJjvJa109JO9RTgSbCZ38VawKLu+PuJm79x+ychN4x2t//rLvZb4uav3P41key03P1rIBXR7cADxM1fuv0TgSWR4jWbtX91pMaiwx3/hdu/GjDB7X9Qkphg+zk7b4c3n4Q+5r4xnhn/AQYOwztWtdcKIT62qcD6wUbkZr4aMlPYXc5vfsD9zX4HnIgkkjyP13IB0PzD56AUeC2DkRTpY5A+9nOQ1OKTiJunl2wcpUadi9eyHXDgXbRP6pDJ1yTg2rKPO3ApfnAusN5D7UsetW7jB7zZ4a8PHIuEi9bhh7suAGcARyAy9w9k7T8LqV5eM2f/2ciHfyLwYNb+85DCRlkI7eTvwAFIXcHDWfsvgP9v77zD3KiuPvzuumJsc02RaaIXU0wgQEILMJRAJpRQAyGBUELHEDAQimhD6AZjmumETiCUBCbko0zoBAhgejBdgEEUX8C47+73xxkhWZa02l2NRuW8z6NHuzN3Zs5qd+c399xTOBhYs2D7Ncg/8erAk3nbrwP2x3ijgKfytv8F+D3GWwV4Om/7TcDeGG8lxK2Q5VZgL4y3PHIjyXI7sCfGW7Zg+53A7hhvacQlkeVvwK4Ybykg/0nyXmAnjLc48Hze9n8AO2C8RLg961p5ANgO4y2KhFZntz/Y0dXWr19bF98x6MYfztIvzBltX3AxavE31Qy0DYCuiiqf7IIIy/zY1FzgCox3B3Aa4nY9BNgD450CTAzH9A55mNoOCSteKdz6d+AYbEpn4RHQWOIiN4hLgV8DdNHOYGYxmJmfWRZ6svzBVaBz2lKISAC8vDjfPQJsOYLpHyA3T5A+KZeTm7lke1q/ClyGzFBmA7eE219DfqbsDOXmcPsbBdtvCre/BVyCzFzmANkb4/+QshTZGcoN4fbJBduvD7e/gwjZUuH268Lt7wHjyc1crg23v48IYjLcfk24/QPkHzY7c7k63J4GxpGboVwVbv8YEdzlCrZPAc4nN0O5Om/7ecgMpTPPngxwDnKj6Myz/4tw+8rI43R2+1fIjGuVcPsN7XQ5AP3ovIdsDayumQsCv6BrznQkDFvpjq6OHRF3VzkGILOS8sjsdkyYDT8e2BL5ez8Y4x2JTT3SY/ukOsB4JJkTpHrAUWGypxIRddW5rCzyJPwUclOdDpzwU16cvgj2auAe3wY718CKXYC7gHuAnYNE8rfITf9WJ5PeqwbXr1tc4yyNiNhNvg3uidueSggSyRmI/39BJ5OeHm5eDhHSD8Ovle6ZhhRwHA6Uci2dAJwF3A3sTL5brBQy29gReXhZPtx6DzLbeL9bq6QawKnA4ciD9Dfh95djU3O6Pb5yRiJrNl8gD5U1JfzfSwOf+jZYqtbXL0VjLOgbrx154l4CcamshU1NWAQ7NV7DlDxWAXYC7naN88e4jVHqitUQV9c/EbdmZUjo8r2IC/ck5KFyJySq7EyMN7Toccbrh/EORGbtRwH9kBnyytjUxVUWFqUEjSEu8uSxGfJksAM29W7M9ijzEyBrTgAXusa5SHNhFOTGfi3iijyC3lQOtqmZ2NRZyAPMLcAgRGzewnh7zRO6LFn/zyNrjosi643rYlMH/RDYodSE+v/nN16+r1b/QOqUMBfmPGAvZC3oKOB21ziD47VMiZmTkHXKE5GW2r3Hpj7Bpn6LBM38F1kvvBl4EuO5GO82JNhlHcRNtAewWVgdQKkx9S8uEu00DHgHm2oIX34r49vgVuAXwLfAbsC/XOOMiNcqJSa2QNxhTyDBI9XBpp5Goiz3R7wZGyFRgXsAs5Ds/1HY1B1asiU+GkFc1gvfX4jVCqVifBs8guTofIrk8DzlGmeZeK1SasxIxIVlgb2pfkfKLuQBZmbB9jnh9t6HLStVoRHEZZ3w/b+xWqH0CN8GryDukDeQBd1nXeP8KF6rlBoxGIkKWxwRlg+qenbJ3n8UyZFKItn9eyMBA0ORUPdXMN4vqnpdpUc0grgMD98/j9UKpcf4NvgIqSbwGBLp95BrnIHxWqVETBuSo7QR4AH3V+3MxlsE410OvIRk8X+NJFuui03dhE25wC+RApSrAj7GeyBMAFZqTGMlUSoNh2+Dqa5xtkESKhdB3BZK83IY8FtgKpLzckzB/nXD9zXDfd+SS5gtjvH6I9UmzgBGIC62S4FTfygplMWmfIz3MDAGqZrhAltjvIsBD5v6trc/mNIzVFyUyPFtMAsJJ1ean9Hh+wikskIp1gtfH1BOXIy3JRIMsEa45REku/61ksfY1GzgAox3M/BnJFlzLFKu6ATgBmyqs4KfRekDKi6KolSTm5i3FlwhGyJRXk8jpXmmFR0lFTnGIUmTIFUTjgHurTgCzKY+Q+rlXYFUj9gQybk5BOONwaaeKXu80idUXBRFqSZPMm9B1EJmIeLyNrk6cTmMtyBSKmYskiw5HZl9XIhNFUaGVYZNvYDxNkZysM5FZkxPhzOb47GpT3t1XqUsjbCgrzQxrnFOcI1zu2ucReO2RekGKVcf1bnbMN5eSAHWkxBhuQXpBnlWr4Uli5SSuRlZ6D8LKR77W+BtjHcCxtNk3yqj4qLEzTZIleunXeOsGLcxSlmuxHhXYrzq5ixJL5cnkWz7pZC0g42xqd9iU59U9Vo2NQ2bOgkJj78XKbh5FvA6xvtVTbtgNjnqFlPi5jdIafsfIQKznW+D57s5RokK6WO/HMUfPBdDoq/2xXjXIw22PurhFV5FQpRfCnvvnIW0z25D2ijUZsHdpt5D+gJthZTjXwOpuPxwWNr/jUiv3wLozEWJFd8G2Sz+h5Fy5f92jePGa1WLYTwH412L8V5GwoffQPoMFb6yv5cBwIHAO2HflZ487U8KKxqvgFQt3h8JLR6HuMCuq2kkl009DKyNhC5bYCskAfNijKdli/qAiosSO74NvkWS324ChgB/d42zf7xWtQDGGxpGUj2KzB5+hAjFu0hDrcJXYY7If5BunZXX75Ks+VeQLPrhSFb9mtjU2B/abNcam5qLTV2CNJibiHwGY4DJGO9gjNcvFrsaHHWLKXWBb4PZrnH2QTpVngBc4xonCZzu20CLD1Yb460M/AtpwjUH6QLqAy9jU9+XOOZWYE9kfeS0HnWFlCz5C5GHCJBosT9iU/XT7dOmvkTClCciuTWbAVeQ64L5WNnjlXlQcVHqhlBETnSNkyabgQ1J1zgH+zbQzP5qIRnvNyPC8jKwDzb1SgVHPgdc20NRGQ6kgCMRd9p3SKb9hDDZsf6wqUkYzwF2RWZYPwL+jfHuBI7Fpj6M1b4GIQpxWQUwFY5NIz3SFeUHfBtc4RrnU+A2xF3zOvLUq1SHsUjJ+k8AB5uyFR1lU+MrvoJ0j90HOBupkAzSTfbEMLmxvpFEzTsx3gPAsUgjvN2A7THeucB52NT0cqdodaIQl3HAdhWOPYZ4bhoLIL0melpE8afhu/pgI8a3wX2ucbZAnnr/E7c9TYNEaJ0efndAxcLSs2tsiGTEZ9tlPAMciU01XhSgCMjpYXTceUjY/KnAfhhvLHAnNhWnhXVLFOLyINLHoxQDkFo/HYiPNw7OQJ7eesua1TJEKY1vg2fJ+eiV6rAR8lD1GDb1YFXPPGT3JRg4+nIkORHkPnA8cEvDN+2SkOs9wqrMExBX2R3AYQzZ/Qym/zVW8+qRKMTlsm72H4aIy1XAWxFcvxIWD99fAnoSp78GsBLSr0JRGpFsVeJnq37mAau8hjw8dgAvIr3spUCl8ap+uRh5DPgKEepN6b/8Q+F2TcDMo9YL+kORKeUMJJGqEr4L3xMR2DMeuLEH48+nbzMeRYmbrLhE0XxvQPjeD1g/fDU/bVlR6Tew+g03KyK7plVX7QRqLS5jkCzf86l8If/F8H3dsqOUlsE1zsrADcANvg3K9wJRClksfO9pZn33dM2ZSNugt6t+3nqnc8bywBHQMSsmC7L3xhfLjqoxtRSXYchT/0wkvK9SXgjfW+MpSKmExRGXxEaucVYATtRcmB5T/c/r23OPI+dpaCVGAkeUG+AaZwAS2rwRIvCTgHt8G1RjaSAbOPFC2VE1ppYZ+gciDYSuR2oIVcprSM+HlTDejlEYpjQWvg2eIFc25E/Ajdo+WalXwpn2s8CtSNO8XyM11V4Jq4L3eq3GNc4ywB7ht3XVn6ZW4jIIOBroREKVK8em5iDhqABXYTwtza7g2+A6YHvgeyQ66QHXOMPjtUpR5sU1zhDgfuDHiCvyJOAARGgGkCvc2ZtztyE9cYYB91FnIfu1EpedgSWR0ON3e3H8BOAJZFH/vrBLXfcYb0uMt0b3A5VGxLfBP4HNkZnwVsATrnGWjNUoRZmXI5HE8jeB0b4NzvJtcK1vg72Q2TfAhaEIVYxrnKHAlcjf/VfAQfXmGq6VuBwcvl/Vq6OlSurvgc8Rn+WrGO/wr1mou0oAG4dj/6oi05z4NngBaV87GVgLeNY1zurxWqUoP7BF+H5qWKA1n+sRt/9wZGbTLa5xhrrG2Q5Zs/kDUhfuAN8Gn1fJ3qpRiwX91ZGS6p8gFVB7h029h/FGI3k0uwGXPMu6DGYWg5m5IWaL24sctQYSe74bsCvGuws4XTNqmwvfBu+5xtkI+DsiNE+5xtnRt8HjMZumAK5xhgE7IEE5i3czvOGY3jFj8L+/e5b+9Bv+c7Np4X1og/B9voV73wZdrnHeQpKyx7nGeb/MZfoj99JR5PJpJgH7+DaY1LefIBpqIS57he93AHP7dCab+gLYHePtBhzeRudPZjJo8EwGLY4skpUjKzJr0Db4bbr61jVVqS98G3zpGmcrxJe9I1K2P+HboD6LI7YIrnE2Q3LJqtu9so7o1y7VoNrb2gdR+j60PtIo7Qdc47QjvWRAar39pILLzQ3P8zfg/Hr++45aXNqAXcKv763aWW3qTuDOn5std5vBAn/9EvPcG6xarKjezkj4H8iTgwfcTtfMv1TNFqVu8G0w3TXOLsiiqannf7xWIHRP/gsJ6JkE3AW8RxRh0DEyvWPGQsAVc7vmfktuCSDLtsDewCmucXzfBp/BD4vxxyIVP6YCRyEurlJ0IZ/dK74NGuLJOGpxWR1YFfgSeLraJ+9HZ+dQvmco33/yhr35tvkGSM+KNcmKSi073Cmx4NugA6kdp8TPlYiw3Ar8vonbJowEruika5Zvg3nuQ65x7kLuQT8GXneNczOydrwFsGU47A++Df5WS4NrQdTism34/ijx1EW4DjhTRUVRaotrnBHAJsAs4NAmFpay+DaY4xpne2Tx/udIlZIs3wFHNaOwQPTikvUhRlHHqHts6uNYrqsoSrZy+Ou+DeJpX1wn+Db41DXOtoCDBJxkM/Qf9G3QtP2sohaXbP+Tuqp5o7QmrnEuBNZBImyqX1tLySd701zSNU5bveVg1Jrw5380fLUEUea5tCO1xHYjivLeitJzVkeSLp91jfOjmG1pdt5F1lorieRUmpAoxaUTiQ65C6kNpihxsyfwOLAE8ERXV01r67UU4ZP6yeG317rGOcI1zmLljlGai1qX3FeU2PBtMNU1zjbAX4DdO2ijf3NFxdYbVyFJhL9HSjhNcI3zHaVDkQeT6wlTihn0NV+uNHOQjPlHgQt8G0yP6DotgT65KS1FmCOwJ3BRNs/50tnLH9OXyrRKcXwbdPk22BdxjT+BFBkdhpQ7KfYaiOTGlXsNKXN8X1+LAJsBpwOTXOOsFsXn0io088xlQaR3TCyt4ZT6xbdBJ3D0MYslj6CN/nNpPwNY3DXOGN8GcZvXdPg2uAu4yzVOP0RcStGG3ORLMQeIcjaxIJJJfyZSOuoO1zjr+zaIqwlYQ9PM4rIucA3yh3ILKjJKAe1tzAX6d9E1G9oOBZYy/YafYDvqqlts0xAmuNpuhk2thS0lsMAnrnEeBl4GRiMuvStjtKlhqUdxWR1YuJKBk2d+MGrR/iOY1TV7ESRhK5/RwMqIf/1kVGSUEgxl7vaWgXcAO45aYMU3n532UtwmKTHi22BaGLZ+GVJZXcWlF9SbuGxLDyonT575PpN5H6Tq8hNlhuaLzOF9MVBpPv4w8KMnz5+90sbAsd/M/e5xpLul0tpk+05V1jtKmY96E5fXkK5tFc1cBrYNWGTBfkNWndM55+tpndMLS1oPJ5clDPAhcAEQAL+rhrFK8+Db4A1g35UGLbsZwMC2gSO3WmjjhX0bfB2zaUo8ZPOg3ozVigam3sTlY6R1bUVstdAmuyB5NI/5Nti5YPemwGOIqJyF1PZpyfpGSuV82zFtKkC/tvbBwJOucX7h2+DDmM1SaohrnCRwfPjtw3Ha0sjUm7hUk6+Ag1BRUXpAZu5X3wJ0dnXOAVYDnnGN4/o2eDleyxqbMNR7eco3CxuJtDIvx3tISHMUDEWixY4BRiDCcmdE12p6mllcXg9fitJjZnXN/gy5kW0GPO4aZxffBg/FbFbD4RpnIHACUg24Ind3nfAvYO9Wr4nWF5pZXCrhXOQPv1K6e6pSmodOYBuki+LugO8aZz/fBjfFa1bjEApLAGwUbvqC0s3C2oEVkf4v5fga+LRaNhYwm1yG/t0qLH2j0cUlG1ac7GHl1ewi3eL0rqf3d704RmkwfBvMco2zJ7IWeDRwo2ucpYFz9MZTESlEWD5FgmgC/dxah0YXl8eQyqvrIa1EK21ffDZwB90/JRWyNTAeeKOHxykNSpjNf4xrnDRwIRIcknSNc0SYFKgUwTVOf+CP4bd7+DYolyqgNCENXVvMt8FUZPEN4ALXOItUeGgXEsf+Rg9f2nysRfFtMB4pHT8LOAS42zXOkHitqmtWQ8qpfKDCksM1TptrnIa+71ZKM/yQNyF+3UWB82K2RWlifBvcicxeLbAD8Jz2hSnJguG7upAB1zijXePcjbgIZ7rG+a9rnONd43RXBbphaXhxCX24hyCLcfu5xtk0ZpOUJiZ8Ct8YmcWuAdwbr0V1y6tIUMTqYd5Iy+Ia53dIq/edkDXeAcCPgXOAp1zjDC8YP7AZ7mMNLy4Avg3+h6yjAEwMo1QUJRLCbP6dwm/7xWlLveLb4HvgHuTzudk1zqIxmxQLrnFWRmqTDQCuBlYBFkL+ftJIXs2F4diBrnEOBiaTa7TWsDT6gn4+5wC/QXy9xwJ/jtccpcn5MnzX6KfSHI7kCW0KvOUa5yFkrbOpPrNpHd8v+Ph3z9GP9gW3MZt5Bbu3BRYAbvVtcGDe9ntd40wGXgT2d43zNnAYsEy4v8M1zplVMvEB3wbPVOlcFdM04uLbYGao+o8AJ7vGucO3wTtx26UorYpvg89c4/wUqZKxKbBHzCZFwoB2WTbp19ZvCKVnHFcXbvBt8LprnGeRz+bcgt3LAydVycRtkYjamtI04gLg2+BR1zg3A78FLneNs43G1StKfPg2eM81zuZIIcj1gCXitaj6zO6cMxQ4rqOr43vmF4kjgMUoXbIm2zzoSmArJJEUZIZXaWpFd1Rcab6aNJW4hBwD/BKJ6tkDuC1ecxSltQkf8F4OX83ISOC4Djqn+zaYxy3mGmcU4q7fDni+YN/CSHAIyLrL4Uiy6UnAe4XnajSaYkE/H98GGeC48NuLXOOMiNMeRVFamuvC9xNc4/wmLOCJa5yRwF+RAplPAZN9G8z1bXA9MAo4NRZrq0jTiUvIdcgvbCS5KDJFUZSa4tvgEeASJFrsFqSN8kvAR8CWSM7Uvvnu+1Bkar4AX22aUlzCkh0HAXOBg1zjbBizSYqitC5HAgcibUCWANYGBgIPAmv7Npgco22R0ZTiAhKJAZwffntlM2fCKopSv/g26PJtcDVSVX1VYBPA+DZo6kZ0zbign8+ZyKL+aOAocmKjKIpSU0KPytvhq+lpanHxbTDdNc6hSCje6a5x7vRt8EHMZilKc7LQSZ/QNvhLWqvzazud3y3Gt+cBbf2aLD+0TzS1uAD4NnjQNc4dSEXbS13jbK+5Lz2iHcka/iBmO5S6p20YMCxuK2pOW1v2i3YVlxxNLy4hfwR+geS/7Az8LV5zGoYlkezqpZEijYpSmq6OB2lj2/C7z4FxwP003x13XSQXZTUAujpeBUZDZyvN2LqlJcTFt8EU1zgnAJcBE1zjPOTb4NvujmthhiN1jk4EhqLN0ZRK+Pbs3THeWsAEpOrvecCvgDHY1H9jta0aGC+J/EzZMjYfA8fx7cUBMCU2u+qUpo0WK8KVwH+Qp/FqFYRrNhLAFcCHSMfF6fGaozQcNvUU8BPgAOALpM3x8xjvGoyXiNW23mK8BTBeCvgfIiyzAA8YhU3dBnOabWZWFVpGXMKWtAcBHcDhrnHWj9mkemRl4GBgMBJZt2O85igNiU11YFPXIn9PFyL/c/sDkzHe0RivMVpiGK8N4+0KvAmcgVQ3/hsiKqdgU6XqhSm0kLgA+DaYBIwH2pDcl5ZwC/aAr4DjgeWQEjrTYrVGaWxs6hts6hgkFeBBF38AOwAAIABJREFUxN06DngF4/0iVtu6Q9x7jwB3AssCrwFbYFO7YlMfxGlao9BS4hJyGtKkZx2kUJyS4y3Ep/x53IYoTYRNvQW4SPHGyUgioY/x7sd4K8dqWyHGWwTjXQa8BDjA18j64zrYVBCrbQ1Gy4mLb4NpyB8LgOcaZ+k47VGUlsCmurCpB4A1kVnxd0j05usY7zyMN7zs8VFjvP4Y73BE/A4Nt14GrIxNXY5NzY3PuMak5cQFwLfBP5AWrEORyBZFUWqBTc3Gps5H2v1ejxR0PBZ4G+Pti/Fqf08y3hbITOUSpErxo8Da2NTh2NTXNbenSWhJcQkZg6wp7OQaZ4e4jVGUlsKmPsOm9kMiy55FKphfBzyL8TaoiQ3GWx7j/Q1ZW1kTSRTeBdgKm3q1JjY0MS0rLr4NPibXkvRS1zhD+3C6tu6HKPVEkEi2Ufz3tkCtbWlS9kEe3kq9pDuiTT2PNMzaG8kVWR94BuPdiPGWjMQy4y2I8TwkCmxnJOT+ZGB1bOpubEpDi6tAy4pLyKXAi0ASWejvjuwf3SLh+6fh+7ZBItmYMfyty27AIGAqkreQJdto7sWaW9RcJIAFkfa+U4q8cu4mm+rEpm5CXGVnA7ORjoxvY7wTMN7gqlgkocW/QfJVTkZ+/7cCq2JTf8amZlTlOgrQ4uKSl/vSCRzlGmftbg55Bvln2RTYFgiA/0P8tBdFaKpSRYJEcgS5tbYTnUy6I/x6Q+D3yM3t+G5OMyga65qGbAfYI5B8l8LXXvMdYVPTsKkTgdWB+xBxOgtZ9N8R4/XeQ2C8dYEnkIZdSyEPD5tgU3thUx/3+rxKSVpaXAB8G7yAzGD6Ibkv/coMn4IkUwFc6mTSg5DIkpnAb4JEcptIjVWqxTmIj/9p4KpwWz/k7wDgAiRqqBxZ8Xml6tY1BwuH71N7fKRNvYtN/Qr4OeK6WgG4F/gXxlu9R+cyXgLjXYP0r98YqRrwB+AnYTUBJSJaXlxCUoiL6yfITKYc45FaWysCxzmZ9LvA6eG+K4JEckhkVip9JkgkN0G6As4FDnIy6c5w1x+Qelhp5Gm5JK5xNgX2RWY4Y6OztqHJzlx6H21lUw8BP0J6MX0DbI0kYF6M8UaUPdZ4AzHe0chDwv5IlYALkdDia7CpjrLHK31GxQUIi1iOCb892zVOuYXE2eTyZE5ERGYc8CqwPHBKVHYqfSNIJAciNeYAznMy6dfCrxclJyhHI67PorjGGQhMDL89x7fB/6KwNUKyYhq1Wy87c+lbKK9NzcGmLkZcaVci96wxSCmZgzDe/J4Gyf5/Bfm/HI5UBxiNTR2DTX3TJ3uUilFxyXE38ADyx9jd+sm/Ed/tIGCCk0nPRZ6Gu4CxQSK5VoR2Kr3nOMSf/w7zFi89C3nSfpju2zEci5Ran4wsPjca2S6Ia0Z8nezMYhqydtK3iEqb+gKbOhiZXT6BBNVMBF7AeJsCYLyVMd79gI9UAXgH2B5wwyoBSg1RcQkJG4gdjoQl7u4ap7vaR2OBb5GyFjs6mfSzwOWI7/6qIJEst3aj1JggkVyFXOj5wU4mnY0MWh+p4DsXeSIuGYbqGmelvHMc4ttgZkTmRkm29P26EV8nKy4ZRGC+QqqSnwT03nVsUy8DmyHN/9LA2sBjGO8txF39SyT7/zhgTWzqfg0tjgcVlzzCFsinhd9e7hqn3D/BZ+RuNBcjT2cnIms3PwUOicbKmjIDuSE09KJ1mNMyEZlp3uhk0o+Eu9qRRfw2ZLb6ZqlzuMZpQx4eBgM3+zZ4pNTYOueF8H3LqoX4FucDJNPdR2Ya05A1zTORUODe1xSTUjJ/JRdV1oXMVPoDLwM/wqbOx6ZmlTmLEjEqLvMzHlk/WQ5Z6C/HFcgf8zLAyU4m/S0SeglwVpBILhWVkTXiXWADYM+4Dekj+yBFCL8Cjsnbns0Q/xTpz1GOPZAF5akF52g0nkNcY8tRWW5Xb9kyfP0SCd1fBonWehnpbHoTfWlWKFn8jyJtIdqQ3y3ITObfGG/3PoUuK31GxaUA3wZzkIixLmCsa5xyvum55GYoxyC++HuAvyO9xC+J0FSlAoJEcjFkYRfgGCeT/jL8emEkJBnExfldqXO4xjHk1uGO922QicLWmmBTs5Fcnk7gWIy3ZQ2v/jSyBjIVmd1v3OMzGG9JjHcjknO2PpIesDeStLk5MAkRsjuAAOP9qBqGKz1HxaUIvg2eQSJT+gMTXeOU+5yeBa5BCvBd5mTSIGs304CdgkRSG27FyzhESB4Fbszb7iGLwo8Bt3dzjrORvJingGsjsLG22NQzyOfSDvwfxjs3YhdZPh8DD4Vfj674KOMNwnh/QmZdv0OiNs9GsutvCrP8H0PWkg5BZjKbAS9ivCsw3qJV/BmUCtBpYwnCp9W3kJvKgb4Nri4zfFHEj7ww8BvgtiCRHIOsxXwMrO5k0iWfjJVoCBLJrZAb2SxgtJNJZxMj10HWHroQN8prxc8ArnE2QJ64O4B1fBuUHNtQGG8Asv4xFhGZDxEBfgFxC8+u8EwfYFPvImuOwykzA8xjHBLyfRq5HLFSdrYBO4THrBhuvQ84JrxuqeNGhOc/DAmysUiawERsak4FNvaEkcga7BfIDCrfjmWQtdg7Wq0fjIpLGVzj7InUHpoKjOrGHXIAcDXyRzYqSCSnkZu6T3Ay6SOjtlfJESSSCyA3yRWR9bA/h7vakQXmjZD1tT+WOodrnAHIzXYt4FzfBn+K1Og4MN6GwA1IXa/eMCOMxhpC5eLyT6R80k5I5n0p21ZHfkdbh1veBI4Mkysrw3hrhOfYKtzyRniOhys+R/fMLy45UdkXGAj8Apt6sIrXrHtUXMoQRgg9iJShuNm3we/KDG9H3CYbIDOWo4JEcm3k5tQObOBk0s9FbLISEiSSZwEnAK8DP3Yy6eyT+D7IzfRzJMKoZFKda5yxwPlI5NMavg2mR2hyfMgsZn3EpbQe8rlU6jJ/A5valcpnLj8hNxNcAfikiD0jgFMR93I/5Hd0KnB5r2YdMvvZEcnQXz7cei8y+3mvx+ebn5y4GG895hWVLB2UCXPvAXOBo7GpK6pwrkhRcekG1zgrIm6TwcDWvg3KPfFk3S0gyV6TgkTyfMT1MAlY38mkqz0lVwoIEsnRSGHC/sAmTiadrSG1EOKzTyAic2PxM4BrnGWRp9whgOvb4J+RGt3YZBMls+LiINF14xHXchcSBr4LcoMfiSSjXjDPWSTb/gDEXbdoeNxVQAqb+qLPVsq60tHIzX9BxPU3DjgLm5rWhzPni8smSJTpnogwVptORBTHR3DuqqLiUgGucU5C/uAnA2t1kzw3AQlHfhr4WeieeR1YFqlFdn7U9rYyQSLZDjyJVDi+0smkD87bPR44Eplh/owST5LhjPXvSM/3O30b7B6p0Y1PobhsS7Zfi5TSySARXP2QJ++LkSTHzh/OIFn2FyNrYCCuyzFh0mR1Md5SSKTgb8MtnyKFSG/pZcJlMbfYKswrMtsjFdT7SlcEa0aRoOJSAWE9qZeRUOMzfBucWmb4Qsji/kikYN51QSL5CySZbAawhpNJvx+xyS1LkEgegiQ7fgas5mTSNtw1Gmll24a4f0retFzj7IyUgfkWWM23waelxirA/OIyHMlxWQ/5rJdHSrG8hURW5pJVZW3ifCAr4GlkVvPXyDPrZb1pQmgnyBrpGGzqhdIHFaXcgn5WZP5S5XWeukfFpUJc4/wMeByYg8xeytUq+i2SJPYl4r/+Okgkb0NcBQ8CrpNJa0mKKhMkkksiN67hwO5OJn1nuKsNqQe3KXAZ4ssvimucYeE5lgKO8G1waamxyg8Uikv3GG8BZPZyPNL9cyZwLnAeNlW7tS3jtSMu0my4eRdwPXAiNvV5hWcpLS4tjOa5VIhvgyeQHt8DkNyXcsJ8C5I/kV9t9ygkHHJbpC6SUn0uRm5wDwB35W3fExGWL+m+6oKHCMsLSAUGpZpIN8jdkFnMaYiw3AmMwqZOq6mwQLYL5vVItNwFiNtuP6Tq8liMN7Ds8UpJdObSA1zjLIL8UywK/N63wV/KDF8dWcTvh0SQPRckkn9AFigziMumb+XIlR8IEsntkXWS6Uhe0YfhrmGIm3IJZLG4ZBKka5wfI02lANb3baCtjiujspmL8dZC3FCbhVsmIWHBj0VtYMWIG+tCpGwNSADIH7Epv8xROnMpgs5ceoBvg/zaVONc45TL+n0DKRnShjwB90NubE8if4DnRmhqSxEkkkMRdxdAKk9YQBLnlkBqal1f6hxhB9Jsv5AJKixVxHiLYrwrkDWvzZDs+UOAdetKWABs6m1sajuk2vnbyIzmAYz3AMZbNV7jGgsVl55zExAgpUPO62bsGUiG/o/JdT08EFm3OSBIJH8WpaEthAckkfDjCXnbV0fckV1Ipnbn/If+wKHIwu7HaMO36mC8/hjvCCTK8mDk93AJsAo2NbGuu0Ha1D+RIJD81hqvYbwLMN5CsdrWIKhbrBe4xlkVKUM/ENjMt8HjZYbvgvj/v0EW9z8PEskzEN//W8DaTiatpcF7SZBIrovMSkDyiLIzjjak9MuWiCuyZPtq1zhLIYv4w4CdfBuUzhpXijG/W0wKYl4MrBGOeRg4Cpt6PQ4D+4TxRgJ/RtZi2hC39gnADdhUJ+oWK4rOXHpB2No224XwStc45VrG3g38CwlRzs50zkKm3KOQaBmlFwSJZH+k5E47cHGesADsigjL10iDqnJcjAjL31VY+ojxVsB4dyNisgbwPlLm5ecNKSwANvU5NnUAueoCCcTF/RzG2yhW2+oYnbn0Etc4g5HZy8pAyrfBmWWGr4Rk+Q9CfM6PB4nk5oh7bTawlpNJN1ov9tgJEsmjkQzrj5D8oWyW9YLIrHBpxLc/sfgZwDXOL4H7kWS/1X0bfBSp0c2JzFyGH38R7UMPRf7Ov0cepi5GwoybhTYkpeAsZC0POr6+h+8u2gmducyDiksfcI2zBfAIUnV3Td8G75QZfjriy38dKRMzJ0gkr0NqED0GOJr7UjlBIrkc8lkOAbZ3Mun783Zn64q9iDxtFvXtu8ZZkFz1hLG+DcYVG6d0i4jLQidDW7lJfJPSNQ2+ORdonwqdC8dtTr2gbrE+4NvgUeBm5Ent8m5yX85BXARrIL3aQTKRv0RmM/tGaGpTEbYtvgwRlrsKhGUVZBEWJFmy3KLxKYiwTEKesJW+0YXkicxpoddcusoGirQsOnPpI65xEogLZgSwl2+DW8sNRxL8piGlZD4OEslsNv9UYJSTSTdul8MaESSSuyOdBr9B8oWmhLvakJpW2yBhx/uVOodrnGxxy37Ahr4N/hOp0c1NzzP0mwtd0C+Czlz6SNjj5bjw24tc44woNxwp9T0USdQCyeZ/CBGnC0scp4QEiaQhN8v4U56wgJRV3wYRnZK9V8LOoj90GlVhUZTqo+JSHa5DKu0myEWRleIopIDlbsDPw3WWQ5BFz72CRHLrcgcrnAMsjkTtXJW3fQhS9RgkzLu7xm4bIk+bJ0Zgo6K0PCouVcC3QSeSRzEXOMg1zoZlhn+IJFcCXAoMcjLpd8m1e50YJJJDIjO2gQkSyU3I+5zDpNQsxyPrJ69QpiaYa5yR5KojHOXbwJYaqyhK71FxqRK+DV5HSocDXBW2yC3Fhcg6zcrIoj5ISO2rSHc+zRAvIEgkByKuLIDznEw6v5f9iuTyhQ5HxKcUFwIGyT36a7XtVBRFUHGpLmciEWFrUqY3O5Lbclj49UnA8mGHygORiJuxQSK5VpSGNiDHIeVc3kE+53wuQiL2bkaaTBXFNc7WwG8QF+Shvg009FtRIkLFpYqEPdYPDb89zTXOcmWGPwrchrRPngDgZNLPkityeVWQSEbRJrXhCBLJVYCTw28PdjLpGXm7f4l0+fuOXGDFfIRJr5eH33q+DarRO11RlBKouFQZ3wYPImGyCwCXdZP7cgxyU9wO2CHcdiIwBfgpUuyvpQlzWiYiM5MbnUz6kbzdPwgz0htkCqU5EamU8AaFvdsVRak6Ki7R8EdylVR3KTNuCrnmVROAIU4m/Q25TolnB4nkUpFZ2RjsDThImfZjCvaNRdao3kCq7RbFNc4ocqHJB/s2mB2BnYqi5KHiEgG+DaYg5UcAJrjGKVei+zIkQ3xZcgUW70EaXw1j3hLyLUWQSC6GBDoAHONk0l/m7V6WXBjx4Ui29HyEM8eJSAfR68KOooqiRIyKS3RcCfwHKW5XrqjlXHLrNMcCq4a5L4cjmc87B4nkjlEaWseMQ/rmPArcWLDvIsT1eAdSALQUeyPldb6kzJqMoijVRcUlInwbdCA5GR3AYa5x1i8z/GkkEXMAkvvS5mTSaXKL2JcGieSwKO2tN4JEcivgd0hR0IMLinpug5Rx/55cHbH5CDuF/jDzCTuJKopSA1RcIsS3wSQka7wN6fvSv8zwPyH1xbYCdg+3XQq8gJSOLzf7aSqCRHIBcmXyPSeTnpy3exA5V6GHdI4sxXnIzCdA6rcpilIjVFyi5zQgjZTZP7zMuC/IrdNcCAxzMukOJPelAzgiSCTLzX6aiZORxMj8xNQsRyGVj99GXGNFcY2zKVJpejZwiOa0KEptUXGJGN8G08glTJ7pGidZZvg1SMveJRFRwsmkX0Juom1I7ku52U/DEySSa5JbGznIyaTzI7uWJhdddwQiHPPhGmcguZnPOWHnUEVRaoiKSw3wbfAPJAJsQcpHf3Ugi/tdwJHA6HD7aUhNsrWRJ/emJEgk25FilP2BK51M+qmCIeOQz/Bu4P/KnOpYpKXBZLovJKooSgSouNSOMUj0169c45SL/vovuSz9y5HF/e+RyskAZwSJ5PKRWhofB5GrVlxYMn8LZC1qBnB0qRO4xlmRXCDEob4NmqnFrqI0DCouNcK3wcfkbnqXuMYZWmb4yUjJ+E2QUFqcTPqf5DL/Lw8z15uGIJFcEimnDzDGyaTzqxUPIJckeRYyi5uPMKflciRz/xbfBg9HZK6iKN2g4lJbLkW6HybJldgvxlRy1ZLPRxqJgbjELLAt8OuIbIyLi5FOhg8AdxXsOwIpWvku5Uu3/Br4OfL5lZzdKIoSPU319NsIuMZZD0mu7ALW923wUomhbcBjwM8QN9mhAEEieSCSoJlB2iJPjdzoiAkSye2AfwDTgdWdTDp/ZrIE8D+kWsF2iPjMh2scg7QxGAkc6Nvg6kiNVvLRNsfiyp1B3ypqvAzcXhWL6gAVlxhwjTMBeRp/Hunf3lFi6JrIH1w78BPghXDR+zHEZXa1k0kfWAOTIyNIJIciIcfLICVeCls93wzshYjPDpTANc4VSKHPp4BNwwZuSm2od3FpA1ZFKjVsgDyYvQo8CXxQhfMPB75G1kn7QhfSzfbL7gY2AiouMeAaZzjwJhJyfLhvg8vKDL8AKdj4AvKP0REkkqsh9cgGAJs6mXTD1ssKEskLkUKfLwI/dTLp/EZfmyJCOgtxixUtk+8aZwOkykEHsI5vg9eKjVMio57FZSHgXmDzIvsuonru022RXLbecgIyO18GyYtreFRcYsI1zi7I2sK3wGq+DT4tMXQY4u5ZEokYmwgQJJJnIDkfbwFrO5n0rMiNrjJBIrkuktcDsL6TSb+Yt7s/IjijkbbQpxY7R9jx8wVgLeBc3waFUWZK9NSruCwB/BP4ERK+fgvwDFL0dFOkKnm9VG74GFiKJhIXXdCPj7uR9YPhlMk0R/5Zs7ktZyPTZpCoqbeBUeRa/DYMYTLo1cjf4MUFwgKyxjQacVucQ2mORITlA0SEFCXLzYiwnA/sivzPTQGeRUoD1YuwNCUqLjERliM5HFnE3t01zi/KDL8LeAjp/X4ugJNJzyTXTOykIJFcNUJzo2AM4kb4CDilYN9IpG4YiMtsBkVwjbMsuai7w8JOoIoC8GMkN+pJpOKDlv+pMSouMeLb4APCMi/A5a5xhpQYmhWi2cDvkcV8nEw6AG4ABgITGyX3JUgklyUnHoc5mfS0giHnIDO6B4H7ip0jzGm5BBgC3OXbwI/IXKUxyTaWG1d2lBIZKi7xMx6JXFmOXN2sYryNTOVBEgWzNcbGItElmyPCU9eEAngZoSg4mfT9BUM2RH6OOYjLq9QT56+A7RG34ZGRGKtUSnbGuE+sVuQYjOQ8TUWiDJUYUHGJGd8Gc5CyJ13AWNc4a5YZfjaytjAaCWXGyaS/QlxHAOOCRDJR/NC6YTfgl8A3iGssn35IoilIlNzbxU7gGmcYuYz9E8sEQyi1IftQdAm5Iq1xsgzyt/Qe0In0/hkPPAHchvy/DI7NuhZBxaUO8G3wDJIY2R/p+1Lq9zKd3A35DCS6BCQK5iEkk78wT6RuCBJJg2TiA/zJyaSnFAw5EPGVfwz8ucypPORnfwFJMFXi5Upyf5eXEr/ALBu+f4Q8kN2NuJXXAfZA/kdeAFaKxboWQcWlfjgB+BzYCNi/zLh/AH8HhhL6k8MujYcAM4G9gkRy62hN7TXnAIsjOSlXFexblJygHI10mZwP1zg/RmZtncBBZRJQldpyCfUjMFlx2QyJOtwPWcMbjlQW/y+wBtLioiHWKRWlT7jG2dM1TpdrnKmucUaWGbocMovpArbMbgwSyROCRLIrSCTfDRLJUsEBsRAkkhuHts0Je7YUchXy8zxMiX941zj9XOM8H35G5cK3lfg4Avk9dhGfwJyYZ8NORfYnkLW6ef5/YuZjxJ5y/Z4aCp251Be3I31KDOWjXD4g95R/GdL6F2Sd4jVgBcoHB9SUIJEcSG6mcp6TSRdm0K8PHADMJXdzKsahwHrIP2Jh+LJSHxTOYA6NwYbPw/cPkT5KhWTIFUftS1a9UgYVlzoizH05lNC95RpnqzLDswveqxKGXTqZ9Bxk3aILGBskkmtFa3HFHIuUb3kHOLNgXzsikG3IouubxU7gGmcpcoI6xrdBPWWCK/NyCbkIvsuovcBkM9zfLTNmcvi+QsS2tCwqLnWGb4N3yd2Ar3CNUyqqZRY5t8PJiKsMJ5N+Blnk7o+0Re5rMb0+ESSSq5CbRR3sZNKFCZH7ITOXKZTPsB+PlML5B1IrSqlvJhCfwHwUvi9bZsywgrFKlVFxqU/OR57gV0L8x6V4GPgr0kBsfN72E4EvgJ8iOTGxEFZwfgRx293kZNKPFAxZmFxpl7GUqEvlGsdFynd8jxT61GzrxiAugfkfkju2ArJwX4wNwvdXa2JRdTmCnCu8blFxqUN8G8xGcl8A/uQaZ1SZ4UcjhQN3RPqd4GTS3yD/zAB/CBLJuPzKlwFLE7rpiuz3gEWAx5H8g/lwjbMgOYE81beBPmk2FnEITBfysJV1tS5QsH9HJOn4beQBrZFoQz7Td5Hw6roVGQ3Dq2Nc41yLuI0eA5wyT+xHIwEA7yNPajPCWcMUJDLmAyeTXr4GJv9A2Lb4Y+Rv7Honk96vYMg6SK5BV/h10SdI1zjnIrWhJgHr+TaYW2ycUvccSW52fSjR5ycNRnK/NkGqa1+HNPTaFLkpg3QtLZxNR0Eb4uouV//PRUTQp0QtvTx2yfv6E2T2fzXiKleU7nGNs4hrnC/C0Nvflxk6ALk5d5G3bhEkkhsEiWRnGAL8q4jNnYcgkbwtvG4mFLp82pFcl+wTZlFc44x2jTPHNU6na5yfRmmvUhOy5XyyeVlRswBwZ941s6/J5NxitWARpNdQoR3Ves1E8uTqCp251DmucfYG/gJ8BYzybVCqS90mSHmL2UgHy8kAQSI5BsmKn4K0ELZR2xwkktsifTRmAms5mfTkgiH7IAU3M8jT3Hw2hVUKnkRqjV3h2yCOkFal+tR6BgNSZXtjpILFi0i4/pwaXDefdShfEWAisgZ5CPK/Xoo24I7w61nAtUgVgo+rYKPSSrjGaXON82g4e7mum+E3IE8y/yJ8cAgSyX5BIvlMOIuYGLG5BInkkCCR/CC83nElht0X2lmy0KFrnAPDn3mKaxwTibFKXNR6BtMIVJpE2YY8tGXXM+sWnbk0AK5xVgVeQUrrb+7b4LESQxNIpIxBanS9BBAkkmuEx3cASzuZdCYqW4NEcj/kaeoVYN2CtsVZVkWKb/6NIgmTYXWCt5CfY0/fBrdHZa8SG3HMYOqZnnSiXJoGmKlotFgD4Nvgf8jUF2Cia5yVXePcWWRoBinM9xdySWI4mfTriJtqAPC7iM09IHwfX0JYQATwLgqExTXOBNc4GyDBCQaZgd0x/+FKE3AxuWrel5NrfKd0T90LC6i4NBLnIBnuoxCf8a6ucUYUGfcvpB9KYQOua8L3A6JqKhYkkqsjayTfIQupPeXnyEL/Xog/+VDNaWlqxpMTmCtQgWkqVFwah7XJ/b4Ghu/lilsW8gBywx6FVFSOgvXD938V6S5ZCYuTc9XOobYRPUo8qMA0KSouDYBrnP6Iu6kwV2XxSs8R1h3LElWuSLb8fY8jccIyNwvlbRoKHOgap+KfUWlYVGCaEBWXBsC3wVzfBgcgCWD5FYV7euPNzniiCsOcHb4P6MWx+T/LF8A+vg02923wWd/NUhqA8UgyMKjANAUqLg2Eb4MnkXj545E6WxWLS1hAsg3pAxNVg61vwvfVerGuMxJZ4L8KWNW3wY1VtUxpBC5iXoE5qMxYpc7pH7cBSs8Iy5+c5xrndmC1HhyaLXlxW9i5Mgr+jfTSWAPpAvjvHhw7A9jIt8Gz1TdLaSCyTeAuRBILQdooKw2G5rk0EeFsYSngSyeTnpm3fTHgPWQdY20nk54UoQ2nAaciNZK2yxeyIJFcGMDJpL+O6vpK0/BHRGBAXGTNLjA9yXNpCFRcmoAgkVwEOA9p6ToCWbB/HmnS9Q5S+XVN4FEnk460rWuQSC6OFNAcjLg2xiBJckeSa8z0HuJjv8zJpDujtEdpaLIFWaH5BUbFRakvgkRyOeApYMlwk0WirtqQNYzPkbWZN4EtnUx6Sg1scoG7kXLgH5Jr2jR81lUEAAAINklEQVQjtCvbAO3vwE4qMEoZWkVgVFyU+iF0gz2K9KZ4DinP/wbSZe9EZOEfpG/Fz6Is+1LEtq2R3JoByEL//khNMYBfIQv3I4AxTiZ9Sa3sUhqSfIGZBDTjw8hoZA28acRFaWCCRHKtsEDkV+G6SuH+u8L9lxU7vgb2fRpef9ci+3YN95Xrc64oWY4mupL19fKaCgyp1gcWNxot1tisF74/5GTSXxTZfx3SWKhUq9fICNeBlkBCn4v1vL8Pqe66QpBIjnAy6am1tE9pOC5E6tHN9xDVRLyP/L80BSoujU3WrVkqtLirYFwtyb9mMfu6iNc+pfH4KHwpDYAmUTY2/w3ftw4SyUWL7N+jYFzNcDLpL5EbwRDgl0WGbI90CnxfQ5MVpfnQmUtjMwnpPvkz4L4gkdzXyaTfDhLJIUjb072RYpVXxWTfBOAC4NogkdwfWeAH2A7p+Z0doyhKk6HuiAYnSCRXQMrUZyskf4H07G5H3E6HOZl0LI2YgkSyH3A/sG24aRryN7dg+L0PbK+hyIrSfKhbrMFxMun3kDDGm4BvkQXPLiSJcvO4hCW0rQOZpYxFwiuHIsLyERL9s4MKi6I0JzpzaSKCRLIdiZPPOJl03UWdBIlkAqCW+TaKoiiKoihKk6Azl9ZgLWLIdSnDc4AmTyqKojQww5Bkxbizj/Nfn0T6EyuKEjsaitz8DEcKSM4kV9srLvoBuwKJmO1QFEVR+shS1M9sYSBiS1RtlhVFqRM0FFlRFEWpOiouiqIoStVRcVEURVGqjoqLoiiKUnVUXBRFUZSqo+KiKIqiVB0VF0VRFKXqqLgoiqIoVUfFRVEURak6Ki6KoihK1VFxURRFUaqOiouiKIpSdVRcFEVRlKqj4qIoiqJUHRUXRVEUpeqouCiKoihVR8VFURRFqToqLoqiKErVUXFpfmaE74sCyTgNAUaH79NjtUJRFEWpCncivetvjNmOB0M7xsVsh6IoilIFVgRmITf29WKyYfPw+t8isyhFURSlCbgAubk/BrTV+NptwDPh9U+p8bUVRVGUCDHAl8gN/lc1vvaO4XUzwLAaX1tRFEWJmCOQm/xkYGCNrtkPeC287pE1uqaiKIpSQwYA/6O2N/q9w+t9CAyq0TUVRVGUGrMDcrP/Glg44msNAj4Ir7dPxNdSFEVRYqQNeBS54V8Y8bWybrjXEfeYoiiK0sSsA3QCs4GVIrrGMGQBP44AAkVRYqZ/3AbUiHZkvaFVmVXw/UtIQuU+wHnAnhFc82hgMeA/wH1525vld9EJzInbCEVR4mMI8C7yBN2qr9uLfC5LIWVYor62k3fNZYApdfB5VOM1C9i5yOeqKAqtMXPpBL5n3qfM/kAHcpMopA1ZH5hb5pzZ9YOOEvsrOUd7+Co3ppydlV5nAPBrpOTK83nbPwFOAM4mur+D24Eg7/vzgcWR30n2s6vkZ+gfHtPZzZhyn1V3v7PsmK4y18n/nc0AZpY5l6IoLcQI4L/IjbZYlvr6wOfA9iWObweuQ7Lch5YY4wBfIOVOSvFb4FNg9RL7lwDeAk4qc451Q1t3LLF/EPAP4G3khnl3mXPVgk1DO2YgMxiATZB1ma1LHDMECT64kdIBAQkkj+Z0iv9O28J9r4djizEA+Xz+Qelw6R2Rz3vdEvsVRWlRWlFY7kZu5Nm6YquVOWeU9EPWebqA08JtKiyKojQ8rSos2YXziciN/YYy542SP4TXTyOiocKiKEpTcAbi7y8lLBmaV1hAqiJ3IOtOyxQ5LkoMuZDkPaiNsIAKi6IoMZIVlh1K7G8HrqVxhOXvzC8sWW5FbvCXlrlGFIwLr/sk8DPksyonLI9QmbCcQWlhOY3uheVv9F1Y+qMN9xRFKWA95ObRnbA8Tmlh2ZzqCMubwMllzvHj0NZSyYjdCQvAWshNvgPJP6kFqyKzpU5gP0TIf15ibKXC8irVEZb76V5YyvW+WQx4hdJCqShKC1JrYVmjxP5qC0u5Sse/QUJnu4Azy4yrJg+E1/sHlQnLTVRHWEaW2F9NYXkV+Rxr3RtHUZQ6pVbCshf1JSyfImLXBVhgeJnx1cANrzUN6SOjwqIoStOSFZZS6xbtwDU0hrAMpGfCkrXlMeSmf3yZY/rKQHKl/b+jvLA8TGXC4tE3YbkLFRZFUSKgmsLilNgPlQtLqsw5ssKyU4n9vRUWgG2Rm/5nwAJlju0LR4fXmIvMYIrRiMLyCiosiqIUcAXxC8vi1FZYpgBrFmxvA15Ebv6HlTm+tyQQV1gXpWdmlQhLdpYQtbDsQHWEZXCZ4xVFaUGqJSzFZgn5VFNY7qG8sOxJcWHJciBy859C9euK3Ree+3mK34irJSynUlth+XMZW05Bfi+KoiiACMvVwBM0hrDcR9+FZXHgDeArRAT2KnOunrIvOXdYsVIzQ4CHgJvpXljKzRJORX6GcsJyJxKtVgtheRP5XBVFUXokLFuUOU+lwnJKmXNkhaVUCfdqCctI5KZ8GnAAIgSvUp1EwE2Q5mNdwEVF9tebsGSQJNpSLIoKi6IoPaTVhQXkxvsJIgYXAGP68BpPrjfMF0gtt3xUWBRFaXpUWHL8keo30Tqo4BoqLIrSgrRiSOXmSBTTr5CopmI8g9T5erTE/kFICfndkEXlYowDplI+G/6fiNCV6rXyGyTC7XeIy6mcLbsjNbeKcT6Sb3JGwfaBwJ/oWzmYnYEXgI+QqsfjmLch10HABogbrlSjrrORMjGnUrzZ10rAHUhY8+clzrELsn60J/O3dQZ5qJiElKF5vsj+LH9GytWcUsKWFRERc5FwbkVRivD/Cl9aLSs5YlIAAAAASUVORK5CYII=`} />
                                                <img style={{display: tractTwoComplete ? "block" : "none"}} className={workplaceStyles["report-image-2"]} src={`data:image/png;base64,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`} />
                                            </div>
                                            <div className={workplaceStyles["report-tracts-container"]}>
                                                <div className={workplaceStyles["report-header-row"]}>
                                                    <div className={workplaceStyles["report-col-1"]}>№ зоны <br />тракта</div>
                                                    <div className={workplaceStyles["report-col-2"]}>Ваш ответ</div>
                                                    <div className={workplaceStyles["report-col-3"]}>Верный ответ</div>
                                                </div>


                                                <div style={{display: tractOneComplete ? "block" : "none"}}>
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
                                                </div>

                                                <div style={{display: tractTwoComplete ? "block" : "none"}}>
                                                    <div className={workplaceStyles["report-title-row"]}>Пароводяной тракт</div>
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
                                </div>
                            </Preview>
                        </div>
                    </div>
                </div>
            </div>
            <div className={basedStyles['footer']}>
                <div className={basedStyles['help']}><img className={basedStyles["help-icon"]} src="./img/menu/help.png" /></div>
                <div onClick={toReport} className={`${basedStyles['report']} ${(report) ? basedStyles['vis'] : ''} `}><div>ОТЧЕТ</div><img className={basedStyles["report-icon"]} src="./img/menu/report.png" /></div>
                <div className={`${basedStyles['print-save']} ${printNsave ? basedStyles['vis'] : ''} `}>
                    <div onClick={() => print("a", workplaceStyles["pdf-lab2"])} className={basedStyles['save']}><div>СОХРАНИТЬ</div><img className={basedStyles["save-icon"]} src="./img/menu/save.png" /></div>
                    <div onClick={() => { window.print() }} className={basedStyles['print']}><div>ПЕЧАТЬ</div><img className={basedStyles["print-icon"]} src="./img/menu/print.png" /></div>
                </div>
            </div>
        </div>
    );
}