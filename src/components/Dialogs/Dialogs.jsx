import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'

function Dialogs (props) {
    return (
        <div className={s.dialogs}>
            <div className ={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to ='/dialog/1' className={({isActive})=>isActive ? 
                    s.active: undefined}>Dmitry</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialog/2'>Vasiliy</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialog/3'>Nikolay</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialog/4'>Fedor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialog/5'>Elena</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialog/6'>Marina</NavLink>
                </div>
            </div>
            <div className={s.messeges}>
                <div className={s.messege}> Privet! </div>
                <div className={s.messege}> Poka! </div>
                <div className={s.messege}> Ia obidelsia! </div>
            </div>
        </div>

    )
}

export default Dialogs;