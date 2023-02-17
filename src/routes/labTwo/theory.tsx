import { Link } from "react-router-dom";
import basedStyles from "../../css/Baza.module.css";
import theory from "../../css/labTwo/theory.module.css";

import React, { useState, useEffect } from "react";

export default function Theory({ theoryVis, setTheoryVis, workplace, setWorkplace }: { theoryVis: any, setTheoryVis: any, workplace: any, setWorkplace: any }) {
    return (
        <div className={`${theory['wrapper']} ${theoryVis ? theory['vis'] : ''} `}>
            <div className={basedStyles['container']}>
                <div className={`${theory['main']}`}>
                    <div className={basedStyles['header']}>
                        <img className={basedStyles["header-icon"]} src="./img/menu/header-icon.png" />
                        <div className={basedStyles['header-title']}>
                            <div className={basedStyles['title-one']}>Котельное оборудование ТЭС.<br /> Устройство, эксплуатация, техническое обслуживание. </div>
                            <div className={basedStyles['title-two']}>Электронный практикум</div>
                        </div>
                    </div>
                    <div className={theory['container']}>
                        <div className={theory['left-column']}>
                            <p><b>Теоретические сведения</b></p>

                            <p><b>Водопаровой тракт</b> представляет собой путь движения питательной воды, пароводяной смеси и перегретого пара.</p>
                            <img className={theory["scheme"]} src="./img/labTwo/scheme.png" />
                        </div>
                        <div className={theory['right-column']}>
                            <p>Способы преодоления гидравлического сопротивления, возникающего в водопаровом тракте, различны в зависимости от конструкции котельного агрегата и организованного метода циркуляции.</p>
                            <p>Паровой котел с естественной циркуляцией воды работает по следующему принципу.</p>
                            <ol className={theory['numeric-list']}>
                            <li>От экономайзера до барабана вода движется за счет давления, создаваемого питательным насосом.</li>
                            <li>В топочных экранах движение пароводяной смеси осуществляется за счет естественной циркуляции.</li>
                            <li>От барабана к турбине движение пароводяной смеси осуществляется за счет перепада давления либо при использовании прямоточных котлов. Сопротивление преодолевается за счет напора, создаваемого питательным насосом.</li>
                            </ol>

                        </div>
                    </div>
                </div>
            </div>
            <div className={theory['footer']}>
                <div className={basedStyles['help']}><img className={basedStyles["help-icon"]} src="./img/menu/help.png" /></div>
                <div onClick={() => { setTheoryVis(false); setWorkplace(true) }} className={theory['start-button']}>
                    <div className={theory["start-text"]}>ПРИСТУПИТЬ К ВЫПОЛЕНИЮ</div>
                    <div className={theory["start"]}><img className={theory["start-icon"]} src="./img/labOne/start.png" /></div>
                </div>
            </div>
        </div>
    );
}
