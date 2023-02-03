import { Link } from "react-router-dom";
import styles from "../../css/labOne/labOne.module.css";
import theory from "../../css/labOne/theory.module.css";

import React, { useState, useEffect } from "react";

export default function Theory({theoryVis, setTheoryVis, partOneVis, setPartOneVis} : {theoryVis:any, setTheoryVis:any, partOneVis:any, setPartOneVis:any}) {
    return (
        <div className={`${theory['wrapper']} ${theoryVis ? theory['vis'] : ''} `}>
            <div className={styles['container']}>
                <div className={`${theory['main']}`}>
                    <div className={styles['header']}>
                        <img className={styles["header-icon"]} src="./img/menu/header-icon.png" />
                        <div className={styles['header-title']}>
                            <div className={styles['title-one']}>Котельное оборудование ТЭС.<br /> Устройство, эксплуатация, техническое обслуживание. </div>
                            <div className={styles['title-two']}>Электронный практикум</div>
                        </div>
                    </div>
                    <div className={theory['container']}>
                        <div className={theory['left-column']}>
                        <p><b>Теоретические сведения</b></p>

                        <p>Котельный агрегат ТП-87 имеет П-образную компоновку и предназначен для получения пара высокого давления при раздельном сжигании в топке тощего угля и природного газа. </p>
                        <p>Топочная камера котельного агрегата выполнена в виде восходящего газохода, стены которого экранированы испарительными трубами нагрева. <b>В соединительном горизонтальном газоходе</b> находится пароперегреватель, <b>в опускном газоходе</b>, образующем две конвективные шахты, расположены змеевики водяного экономайзера и пакеты трубчатого воздухоподогревателя.</p>
                        <p>Топочная камера котла ТП-87 в нижней части оборудована <b>пережимом</b>, выполненным из гнутых вовнутрь топочной камеры экранных труб. </p>
                        <p>Большая часть пароводяной смеси поднимается по изогнутым по профилю <b>экранным трубам</b>, а небольшая часть – по прямым трубам, которые, кроме того, исполняют роль несущей конструкции. В начале участков прямых труб устанавливаются дроссели Ø 5 мм, которые необходимы для обеспечения охлаждения этих участков. Нижняя часть топки представляет собой <b>камеру сгорания</b> (предтопок). Выше пережима расположена <b>камера догорания</b>.</p> 
                        </div>
                        <div className={theory['right-column']}>
                        <p>Экранные трубы закрывают полностью фронтовую, заднюю и боковые стены топочной камеры и, сходясь внизу, образуют под топки с двумя выводами для удаления жидкого шлака.</p>
                        <p>Для эффективного заполнения камеры догорания и оптимального обтекания газами потолочного и ширмового пароперегревателей <b>трубы заднего экрана</b> в верхней части топки перед горизонтальным газоходом образуют выступ внутрь топки, глубина которого составляет 2000 мм.</p>
                        <p>Для обеспечения оптимального теплового напора в топочной камере расположены двенадцать пылегазовых горелок, которые располагаются попарно во встречном направлении по фронтовой и задней стенам топки на уровне 9,15 м.</p>
                        <p>Данные горелки предназначены для работы на газе или угольной пыли. </p>

                        </div>
                    </div>
                </div>
            </div>
            <div className={theory['footer']}>
                <div className={styles['help']}><img className={styles["help-icon"]} src="./img/menu/help.png" /></div>
                <div onClick={() => {setTheoryVis(false); setPartOneVis(true)}} className={theory['start-button']}>
                    <div className={theory["start-text"]}>ПРИСТУПИТЬ К ВЫПОЛЕНИЮ</div>
                    <div className={theory["start"]}><img className={theory["start-icon"]} src="./img/labOne/start.png" /></div>
                </div>
            </div>
        </div>
    );
}
