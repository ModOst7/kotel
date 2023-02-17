
import React, { useState, useEffect } from "react";
import selectStyles from "../../css/labTwo/select.module.css";

export default function Gas({selectVis, states, setStates, id }: {selectVis: any, states: any, setStates: any, id: number }) {


    const toggleEnvironment = () => {
        setEnvironmentVis(!environmentVis);
        setTemperatureVis(false);

        console.log(states);
    }

    const toggleTemperature = () => {
        setTemperatureVis(!temperatureVis);
        setEnvironmentVis(false);

        console.log(states);
    }

    const [environment, setEnvironment] = useState(' ');
    const [temperature, setTemperature] = useState(' ');

    const [environmentVis, setEnvironmentVis] = useState(false);
    const [temperatureVis, setTemperatureVis] = useState(false);

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
                environment: e.target.innerText
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
                environment: environment
            }
        }));

        console.log(states);
    }

    useEffect(() => {
        if (!selectVis) {
            setEnvironmentVis(false);
            setTemperatureVis(false);
        }
    }, [selectVis])

    return (
        <div className={`${selectStyles['select-container']} ${selectVis ? selectStyles['vis'] : ''}`}>
            <div>
                <div className={selectStyles["select-title"]}>№ зоны</div>
                <div className={selectStyles["select-title-inactive"]}>{id}</div>
            </div>
            <div className={selectStyles["select-1"]}>
                <div className={selectStyles["select-title"]}>Среда</div>
                <div onClick={toggleEnvironment} className={selectStyles["select-current"]}>{environment}</div>
                <div className={selectStyles["options-container"]} style={{ maxHeight: environmentVis ? '330px' : '0px' }}>
                    <div onClick={chooseEnvironment} className={selectStyles["option"]}>Дымовые газы</div>
                    <div onClick={chooseEnvironment} className={selectStyles["option"]}>Воздух</div>
                </div>
            </div>
            <div className={selectStyles["select-2"]}>
                <div className={selectStyles["select-title"]}>Температура, °С</div>
                <div onClick={toggleTemperature} className={selectStyles["select-current"]}>{temperature}</div>
                <div className={selectStyles["options-container"]} style={{ maxHeight: temperatureVis ? '330px' : '0px' }}>
                    <div onClick={chooseTemperature} className={selectStyles["option"]}>1700–1800</div>
                    <div onClick={chooseTemperature} className={selectStyles["option"]}>1200–1300</div>
                    <div onClick={chooseTemperature} className={selectStyles["option"]}>980–1050</div>
                    <div onClick={chooseTemperature} className={selectStyles["option"]}>350–400</div>
                    <div onClick={chooseTemperature} className={selectStyles["option"]}>200–250</div>
                    <div onClick={chooseTemperature} className={selectStyles["option"]}>120–140</div>
                    <div onClick={chooseTemperature} className={selectStyles["option"]}>400</div>
                </div>
            </div>
        </div>
    )
}