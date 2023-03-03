import { Link } from "react-router-dom";
import styles from "../../css/labOne/labOne.module.css";
import theory from "../../css/labOne/theory.module.css";
import theoryStyles from "../../css/labThree/theory.module.css";

import React, { useState, useEffect } from "react";

export default function Theory({ theoryVis, setTheoryVis, partOneVis, setPartOneVis }: { theoryVis: any, setTheoryVis: any, partOneVis: any, setPartOneVis: any }) {
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
                            <p>Деаэратор – это устройство для удаления коррозионно-агрессивных газов из котловой воды, таких как кислород и диоксид углерода.</p>
                            <p>Деаэраторы используются в тепловых схемах ТЭЦ, ТЭС, КЭС и АЭС, а также промышленно-отопительных котельных.</p>
                            <p>Деаэраторы повышенного (высокого) давления предназначены для очистки питательной воды, поступающей в энергетические паровые котлы высокого давления.</p>
                            <ol className={theoryStyles['ol-list']}>Существует три варианта растворения агрессивных газов в воде:
                                <ul>в виде растворенных молекул;</ul>
                                <ul>в виде микропузырьков;</ul>
                                <ul>в структуре химических соединений, разрушающихся при подводе тепла.</ul>
                            </ol>
                        </div>
                        <div className={theory['right-column']}>
                            <p>Принцип действия деаэратора: на первом этапе вода поступает в подогреватель, после первичного подогрева проходит через систему фильтров грубой и тонкой очистки. Далее подогретая и очищенная питательная вода поступает в верхнюю колонну деаэратора, где за счет впрыска пара из пароперегревателя начинает закипать. В процессе кипения происходит частичное парообразование с выделением коррозионно-опасных газов. Выделенные газы отводятся из верхней части деаэрационной колонны и называются выпаром, который может использоваться в теплообменниках обратной сетевой воды или быть сброшенным в атмосферу.</p>
                            <p>В некоторых случаях применение деаэрационного устройства не позволяет полностью избавиться от кислородной составляющей, поэтому на втором этапе возможно применение химических реагентов, позволяющих выделить связанный кислород из воды, например сульфит натрия. В ряде случаев используются катализаторы поверхностного типа. Например, для интенсификации процесса выделения кислорода применяется металлическая стружка, которая, вступая в реакцию, превращается в частицы ржавчины, выводящиеся со шламом.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={theory['footer']}>
                <div className={styles['help']}><img className={styles["help-icon"]} src="./img/menu/help.png" /></div>
                <div onClick={() => { setTheoryVis(false); setPartOneVis(true) }} className={theory['start-button']}>
                    <div className={theory["start-text"]}>ПРИСТУПИТЬ К ВЫПОЛЕНИЮ</div>
                    <div className={theory["start"]}><img className={theory["start-icon"]} src="./img/labOne/start.png" /></div>
                </div>
            </div>
        </div>
    );
}
