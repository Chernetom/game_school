import React from "react";
import s from "./theGame.module.css"

const ChangeGameMode = (mode) => {
        return (
            <div>
                {mode ==="up" ? <div className={s.game_mode}>По возрастанию</div> : <div className={s.gm_right}>По убыванию</div>}
            </div>
        )

}

const Number = (props) => {
    return (
        <div className={s.img_number}>{props.num}</div>
    )
}

const Cycle = () => {
    return (
        <div className={s.case_cycle}></div>
    )
}

const TheGame = (props) => {

        let numbers = props.numbers.map(n => <Number num={n.number} />);
        let cycles = props.numbers.map(n => <Cycle num={n.number} />);
        return (
            <div className={s.main_wrapper}>
                <div className={s.imgs_wrapper}>
                    {numbers}
                </div>
                <ChangeGameMode mode={props.mode}/>
                <div className={s.number_case}>
                    {cycles}
                </div>
            </div>
        )
}


export default TheGame;