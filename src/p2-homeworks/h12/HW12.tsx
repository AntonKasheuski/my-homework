import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ThemesType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, ThemesType>(state => state.theme.theme); // useSelector
    const dispatch = useDispatch();

    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme as ThemesType))
    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperRadio
                options={themes}
                value={theme}
                onChange={(event) => onChangeCallback(event.target.value)}
            />

            <hr/>
        </div>
    );
}

export default HW12;
