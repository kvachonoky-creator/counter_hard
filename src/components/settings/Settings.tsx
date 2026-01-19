import { ChangeEvent, useEffect, useState } from "react";
import s from "./Settings.module.scss"
import { Button } from "../buttonBox/button/Button";
import React from "react";

type SettingsType = {
    maxValue: number
    startValue: number
    isSet: boolean
    updateMinValueSettings: (value: number) => void
    updateMaxValueSettings: (value: number) => void
    changeIsSet: (value: boolean) => void
    changeIsSettingsCorrectValue: (value: boolean) => void
}

export const Settings = ({
    startValue,
    maxValue,
    isSet,
    updateMinValueSettings,
    updateMaxValueSettings,
    changeIsSet,
    changeIsSettingsCorrectValue
}: SettingsType) => {

    const [currentMaxValue, setCurrentMaxValue] = useState<number>(maxValue)
    const [currentStartValue, setCurrentStartValue] = useState<number>(startValue)

    const isCorrect = currentStartValue >= 0 && currentMaxValue > currentStartValue && currentMaxValue >= 1
    const classCurrentStartValue = currentStartValue >= currentMaxValue || currentStartValue < 0 ? s.warningInput : ""
    const classCurrentMaxValue = currentStartValue >= currentMaxValue ? s.warningInput : ""
    const classSetButton = (isSet && !isCorrect) || !isSet ? s.disBtn : ""
    const disabledSetButton = (isSet && !isCorrect) || !isSet

    useEffect(() => {
        changeIsSettingsCorrectValue(!isCorrect)
    }, [currentMaxValue, currentStartValue])

    useEffect(() => {
        setCurrentMaxValue(maxValue)
        setCurrentStartValue(startValue)
    }, [maxValue, startValue])

    const onChangeMinValueSettingsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentStartValue(+e.currentTarget.value)
        changeIsSet(true)
    }

    const onChangeMaxValueSettingsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentMaxValue(+e.currentTarget.value)
        changeIsSet(true)
    }

    const onClickHandler = () => {
            updateMinValueSettings(currentStartValue)
            updateMaxValueSettings(currentMaxValue)
            changeIsSet(false)
        
    }

    return (
        <div className={s.settings}>
            <div>
                <label className={s.label}> max value:
                    <input
                        className={classCurrentMaxValue}
                        type="number"
                        value={currentMaxValue}
                        onChange={onChangeMaxValueSettingsHandler}
                    />
                </label>
                <label> start value:
                    <input
                        className={classCurrentStartValue}
                        type="number"
                        value={currentStartValue}
                        onChange={onChangeMinValueSettingsHandler}
                    />
                </label>
            </div>
            <div>
                <Button
                    onClick={onClickHandler}
                    className={classSetButton}
                    title={"set"}
                    disabled={disabledSetButton}
                />
            </div>

        </div>

    );
};
