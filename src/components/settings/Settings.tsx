import {ChangeEvent, useEffect, useState} from "react";
import s from "./Settings.module.scss"

type SettingsType = {
    maxValue: number
    startValue: number
    className?: string
    changeStartValue: (value: number) => void
    updateMinValueSettings: (value: number) => void
    updateMaxValueSettings: (value: number) => void
    changeIsSettingsCorrectValue: (value: boolean) => void
}

export const Settings = ({
                             className,
                             startValue,
                             maxValue,
                             changeStartValue,
                             updateMinValueSettings,
                             updateMaxValueSettings,
                             changeIsSettingsCorrectValue
                         }: SettingsType) => {


    const [currentMaxValue, setCurrentMaxValue] = useState<number>(maxValue)
    const [currentStartValue, setCurrentStartValue] = useState<number>(startValue)


    useEffect(() => {
        let localStorageStartValue = localStorage.getItem("StartValueSettings")
        localStorageStartValue && setCurrentStartValue(JSON.parse(localStorageStartValue))


        let localStorageMaxValue = localStorage.getItem("MaxValueSettings")
        localStorageMaxValue && setCurrentMaxValue(JSON.parse(localStorageMaxValue))
    }, [])


    useEffect(() => {
        localStorage.setItem("MaxValueSettings", JSON.stringify(currentMaxValue))
    }, [currentMaxValue])


    useEffect(() => {
        localStorage.setItem("StartValueSettings", JSON.stringify(currentStartValue))
    }, [currentStartValue])

    useEffect(() => {
        changeStartValue(currentStartValue)
        changeIsSettingsCorrectValue(currentStartValue >= currentMaxValue)
    }, [currentMaxValue, currentStartValue, changeIsSettingsCorrectValue]);


    const onChangeMinValueSettingsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateMinValueSettings(+e.currentTarget.value)
        setCurrentStartValue(+e.currentTarget.value)
    }

    const onChangeMaxValueSettingsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateMaxValueSettings(+e.currentTarget.value)
        setCurrentMaxValue(+e.currentTarget.value)
    }


    return (
        <div className={className}>
            <label className={s.label}> max value:
                <input
                    className={currentStartValue >= currentMaxValue ? s.warningInput : ""}
                    type="number"
                    value={currentMaxValue}
                    onChange={onChangeMaxValueSettingsHandler}
                />
            </label>
            <label> start value:
                <input
                    className={currentStartValue >= currentMaxValue ? s.warningInput : ""}
                    type="number"
                    value={currentStartValue}
                    onChange={onChangeMinValueSettingsHandler}
                />
            </label>
        </div>
    );
};
