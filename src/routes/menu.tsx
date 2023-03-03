import { Link } from "react-router-dom";
import styles from "../css/Menu.module.css";

import React, { useState, useEffect } from "react";

export default function Menu() {

    const [scale, setScale] = useState(1)

    const [items, setItems] = useState([false, false, false, false, false, false, false, false]);
    const [moving, setMoving] = useState(false);
    useEffect(() => {
        scalable(setScale)
        window.onresize = () => {
            scalable(setScale)
        }
    })

    const handleClick = (e:any) => {
        const newItems = items.map((item, index) => {
            if (e.target.getAttribute("data-key") == index) {
                return true;
            } else return false;
        })
        setMoving(true);
        setItems(newItems);
    }

    return (
        <>

            <div style={{ "transform": `scale(${scale})`, width: 1920, height: 969, transformOrigin: "top left" }} className={styles['main']}>
                <div className={styles['wrapper']}>
                    <div className={styles['container']}>
                        <div className={`${styles['main']} ${moving ? styles['moved'] : ''} `}>
                            <div className={styles['header']}>
                                <img className={styles["header-icon"]} src="./img/menu/header-icon.png" />
                                <div className={styles['header-title']}>
                                    <div className={styles['title-one']}>Котельное оборудование ТЭС.<br /> Устройство, эксплуатация, техническое обслуживание. </div>
                                    <div className={styles['title-two']}>Электронный практикум</div>
                                </div>
                            </div>
                            <div className={styles['menu-container']}>
                                <div className={styles['menu']}>
                                    <div className={styles['labs']}>
                                        <div className={styles['labs-title']}>Лабораторные работы</div>
                                        <div className={styles['labs-items']}>
                                            <div className={`${styles['item']} ${items[0] ? styles['toggled'] : ''} `}>
                                                <div className={styles['toggle']}><div className={styles['toggle-ball']}></div></div>
                                                <div data-key={0} onClick={handleClick} className={styles['item-text']}>Устройство котельного агрегата ТП-87</div>
                                            </div>
                                            <div className={`${styles['item']} ${items[1] ? styles['toggled'] : ''} `}>
                                                <div className={styles['toggle']}><div className={styles['toggle-ball']}></div></div>
                                                <div data-key={1} onClick={handleClick} className={styles['item-text']}>Устройство парового котла с естественной циркуляцией</div>
                                            </div>
                                            <div className={`${styles['item']} ${items[2] ? styles['toggled'] : ''} `}>
                                                <div className={styles['toggle']}><div className={styles['toggle-ball']}></div></div>
                                                <div data-key={2} onClick={handleClick} className={styles['item-text']}>Изучение работы деаэратора</div>
                                            </div>
                                            <div className={`${styles['item']} ${items[3] ? styles['toggled'] : ''} `}>
                                                <div className={styles['toggle']}><div className={styles['toggle-ball']}></div></div>
                                                <div data-key={3} onClick={handleClick} className={styles['item-text']}>Определение тепловых нагрузок</div>
                                            </div>
                                            <div className={`${styles['item']} ${items[4] ? styles['toggled'] : ''} `}>
                                                <div className={styles['toggle']}><div className={styles['toggle-ball']}></div></div>
                                                <div data-key={4} onClick={handleClick} className={styles['item-text']}>Горелочные устройства</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles['works']}>
                                        <div className={styles['labs-title']}>Расчетные задачи</div>
                                        <div className={styles['labs-items']}>
                                            <div className={`${styles['item']} ${items[5] ? styles['toggled'] : ''} `}>
                                                <div className={styles['toggle']}><div className={styles['toggle-ball']}></div></div>
                                                <div data-key={5} onClick={handleClick} className={styles['item-text']}>Вычисление коэффициента тепловой эффективности <br />регенеративного воздухоподогревателя РВП-54</div>
                                            </div>
                                            <div className={`${styles['item']} ${items[6] ? styles['toggled'] : ''} `}>
                                                <div className={styles['toggle']}><div className={styles['toggle-ball']}></div></div>
                                                <div data-key={6} onClick={handleClick} className={styles['item-text']}>Определение полезного напора в трубах</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles['test']}>
                                        <div className={styles['labs-title']}>Итоговый тест</div>
                                        <div className={styles['labs-items']}>
                                            <div className={`${styles['item']} ${items[7] ? styles['toggled'] : ''} `}>
                                                <div className={styles['toggle']}><div className={styles['toggle-ball']}></div></div>
                                                <div data-key={7} onClick={handleClick} className={styles['item-text']}>Общий банк вопросов – 109</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['descriptions']}>
                            <div className={`${styles['descriptions-container']} ${items[0] ? styles['vis'] : ''} `}>
                                <b>Цель работы:</b>
                                 <div className={styles['descriptions-text']}>
                                    научиться правильно определять элементы устройства котельного агрегата ТП-87 и ознакомиться с их техническими параметрами. Приступая к выполнению лабораторной работы, изучите краткие <Link to={`/labOne`}>теоретические сведения</Link>.
                                 </div> 
                            </div>
                            <div className={`${styles['descriptions-container']} ${items[1] ? styles['vis'] : ''} `}>
                                <b>Цель работы:</b>
                                 <div className={styles['descriptions-text']}>
                                 изучить схему устройства парового котла с естественной циркуляцией, научиться правильно сопоставлять потоки и теплофизические параметры в каждой зоне газовоздушного и пароводяного трактов. Приступая к выполнению лабораторной работы, изучите краткие <Link to={`/labTwo`}>теоретические сведения</Link>.

                                 </div> 
                            </div>
                            <div className={`${styles['descriptions-container']} ${items[2] ? styles['vis'] : ''} `}>
                                <b>Цель работы:</b>
                                 <div className={styles['descriptions-text']}>
                                 научиться составлять схему деаэрации водоподготовительной установки котельного агрегата с учетом движения потоков (воды, пара и выпара) между ее элементами. Приступая к выполнению лабораторной работы, изучите краткие <Link to={`/labThree`}>теоретические сведения</Link>.
                                 </div> 
                            </div>
                            <div className={`${styles['descriptions-container']} ${items[3] ? styles['vis'] : ''} `}>
                                <b>Цель работы:</b>
                                 <div className={styles['descriptions-text']}>
                                 In some cases, TypeScript may unnecessarily tighten the type of the initial state. If that happens, you can work around it by casting the initial state using as, instead of declaring the type of the variable:
                                 </div> 
                            </div>
                            <div className={`${styles['descriptions-container']} ${items[4] ? styles['vis'] : ''} `}>
                                <b>Цель работы:</b>
                                 <div className={styles['descriptions-text']}>
                                 ESLint can help your team import the right hooks easily. The typescript-eslint/no-restricted-imports rule can show a warning when the wrong import is used accidentally.
                                 </div> 
                            </div>
                            <div className={`${styles['descriptions-container']} ${items[5] ? styles['vis'] : ''} `}>
                                <b>Цель работы:</b>
                                 <div className={styles['descriptions-text']}>
                                 If you are using Redux Toolkit's createSlice, you should rarely need to specifically type a reducer separately. If you do actually write a standalone reducer, it's typically sufficient to declare the type of the initialState value, and type the action as AnyAction
                                 </div> 
                            </div>
                            <div className={`${styles['descriptions-container']} ${items[6] ? styles['vis'] : ''} `}>
                                <b>Цель работы:</b>
                                 <div className={styles['descriptions-text']}>
                                 Middleware are an extension mechanism for the Redux store. Middleware are composed into a pipeline that wrap the store's dispatch method, and have access to the store's dispatch and getState methods.
                                 </div> 
                            </div>
                            <div className={`${styles['descriptions-container']} ${items[7] ? styles['vis'] : ''} `}>
                                <b>Цель работы:</b>
                                 <div className={styles['descriptions-text']}>
                                 Redux Thunk is the standard middleware for writing sync and async logic that interacts with the Redux store. A thunk function receives dispatch and getState as its parameters. Redux Thunk has a built in ThunkAction type which we can use to define types for those arguments:
                                 </div> 
                            </div>
                        </div>
                    </div>
                    <div className={styles['footer']}>
                        <div className={styles['help']}><img className={styles["help-icon"]} src="./img/menu/help.png" /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

const scalable = (setScale: React.Dispatch<React.SetStateAction<number>>) => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scaleWidth = width / 1920
    const scaleHeight = height / 969

    console.log(width, height)

    if (scaleWidth > scaleHeight) {
        setScale(scaleHeight)
    } else {
        setScale(scaleWidth)
    }


}