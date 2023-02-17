import React, { useState, useEffect } from "react";
import selectStyles from "../../css/labTwo/select.module.css";

export default function Vapor({ selectVis, states, setStates, id }: { selectVis: any, states: any, setStates: any, id: number }) {


    const toggleEnvironment = () => {
        setEnvironmentVis(!environmentVis);
        setTemperatureVis(false);
        setPressureVis(false);

        console.log(states);
    }

    const toggleTemperature = () => {
        setTemperatureVis(!temperatureVis);
        setEnvironmentVis(false);
        setPressureVis(false);

        console.log(states);
    }

    const togglePressure = () => {
        setPressureVis(!pressureVis);
        setEnvironmentVis(false);
        setTemperatureVis(false);

        console.log(states);
    }

    const [environment, setEnvironment] = useState(' ');
    const [temperature, setTemperature] = useState(' ');
    const [pressure, setPressure] = useState(' ');

    const [environmentVis, setEnvironmentVis] = useState(false);
    const [temperatureVis, setTemperatureVis] = useState(false);
    const [pressureVis, setPressureVis] = useState(false);

    const chooseEnvironment = (e: any) => {
        console.log(e.target.innerText);
        setEnvironment(e.target.innerText);
        setEnvironmentVis(!environmentVis);

        setStates((prevState: any) => ({
            ...prevState,
            [id]: {
                id: id,
                visible: true,
                temperature: temperature,
                environment: e.target.innerText,
                pressure: pressure
            }
        }));
    }

    const chooseTemperature = (e: any) => {
        console.log(e.target.innerText);
        setTemperature(e.target.innerText);
        setTemperatureVis(!temperatureVis);
        setStates((prevState: any) => ({
            ...prevState,
            [id]: {
                id: id,
                visible: true,
                temperature: e.target.innerText,
                environment: environment,
                pressure: pressure
            }
        }));

        console.log(states);
    }

    const choosePressure = (e: any) => {
        console.log(e.target.innerText);
        setPressure(e.target.innerText);
        setPressureVis(!pressureVis);

        setStates((prevState: any) => ({
            ...prevState,
            [id]: {
                id: id,
                visible: true,
                temperature: temperature,
                environment: environment,
                pressure: e.target.innerText
            }
        }));
    }

    useEffect(() => {
        if (!selectVis) {
            setEnvironmentVis(false);
            setTemperatureVis(false);
            setPressureVis(false);
        }
    }, [selectVis])

    return (
        <div className={`${selectStyles['select-container']} ${selectVis ? selectStyles['vis'] : ''}`}>
            <div>
                <div className={selectStyles["select-title"]}>№ зоны</div>
                <div className={selectStyles["select-title-inactive"]}>{id}</div>
            </div>
            <div className={selectStyles["select-1"]} style={{width: '285px'}}>
                <div className={selectStyles["select-title"]}>Среда</div>
                <div onClick={toggleEnvironment} className={selectStyles["select-current"]}>{environment}</div>
                <div className={selectStyles["options-container"]} style={{ maxHeight: environmentVis ? '330px' : '0px' }}>
                    <div onClick={chooseEnvironment} className={selectStyles["option"]}>Пароводяная смесь</div>
                    <div onClick={chooseEnvironment} className={selectStyles["option"]}>Вода</div>
                    <div onClick={chooseEnvironment} className={selectStyles["option"]}>Пар</div>
                </div>
            </div>
            <div className={selectStyles["select-2"]}>
                <div className={selectStyles["select-title"]}>Температура, °С</div>
                <div onClick={toggleTemperature} className={selectStyles["select-current"]}>{temperature}</div>
                <div className={selectStyles["options-container"]} style={{ maxHeight: temperatureVis ? '330px' : '0px' }}>
                    <div onClick={chooseTemperature} className={selectStyles["option"]}>560</div>
                    <div onClick={chooseTemperature} className={selectStyles["option"]}>490</div>
                    <div onClick={chooseTemperature} className={selectStyles["option"]}>276</div>
                    <div onClick={chooseTemperature} className={selectStyles["option"]}>230</div>
                    <div onClick={chooseTemperature} className={selectStyles["option"]}>104</div>
                </div>
            </div>
            <div className={selectStyles["select-3"]}>
                <div className={selectStyles["select-title"]}>Давление, МПа</div>
                <div onClick={togglePressure} className={selectStyles["select-current"]}>{pressure}</div>
                <div className={selectStyles["options-container"]} style={{ maxHeight: pressureVis ? '330px' : '0px' }}>
                    <div onClick={choosePressure} className={selectStyles["option"]}>15,5</div>
                    <div onClick={choosePressure} className={selectStyles["option"]}>14,5</div>
                    <div onClick={choosePressure} className={selectStyles["option"]}>14,0</div>
                    <div onClick={choosePressure} className={selectStyles["option"]}>13,0</div>
                    <div onClick={choosePressure} className={selectStyles["option"]}>1,2</div>
                    <div onClick={choosePressure} className={selectStyles["option"]}>1,1</div>
                </div>
            </div>
        </div>
    )
}