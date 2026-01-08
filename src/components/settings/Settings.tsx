import { ChangeEvent, useEffect, useState } from "react";
import s from "./Settings.module.scss"

type SettingsType = {
    maxValue: number
    startValue: number
    maxInitValue: number
    className?: string
    changeStartValue: (value: number) => void
    changeMaxInitValue: (value: number) => void
    updateMinValueSettings: (value: number) => void
    updateMaxValueSettings: (value: number) => void
    changeIsSettingsCorrectValue: (value: boolean) => void
}

export const Settings = ({
    className,
    startValue,
    maxInitValue,
    changeStartValue,
    changeMaxInitValue,
    updateMinValueSettings,
    updateMaxValueSettings,
    changeIsSettingsCorrectValue
}: SettingsType) => {

    const minValueInput = 0
    const maxValueInput = 5

    const [currentMaxValue, setCurrentMaxValue] = useState<number>(startValue)
    const [currentStartValue, setCurrentStartValue] = useState<number>(maxInitValue)


    useEffect(() => {
        let localStorageMaxValue = localStorage.getItem("maxValueInput")
        localStorageMaxValue && setCurrentMaxValue(JSON.parse(localStorageMaxValue))
    }, [])
    useEffect(() => {
        let localStorageStartValue = localStorage.getItem("minValueInput")
        localStorageStartValue && setCurrentStartValue(JSON.parse(localStorageStartValue))
    }, [])

    useEffect(() => {
        localStorage.setItem("maxValueInput", JSON.stringify(currentMaxValue))
    }, [currentMaxValue])
    useEffect(() => {
        localStorage.setItem("minValueInput", JSON.stringify(currentStartValue))
    }, [currentStartValue])


    const onChangeMinValueSettingsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateMinValueSettings(+e.currentTarget.value)
        setCurrentStartValue(+e.currentTarget.value)
    }

    const onChangeMaxValueSettingsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateMaxValueSettings(+e.currentTarget.value)
        setCurrentMaxValue(+e.currentTarget.value)
    }

    changeIsSettingsCorrectValue(currentStartValue >= currentMaxValue)

    changeStartValue(currentStartValue)
    changeMaxInitValue(currentMaxValue)

    return (
        <div className={className}>
            <label className={s.label}> max value:
                <input
                    className={currentStartValue >= currentMaxValue ? s.warningInput : ""}
                    type="number"
                    value={currentMaxValue}
                    onChange={onChangeMaxValueSettingsHandler}
                    min={minValueInput}
                    max={maxValueInput}
                />
            </label>
            <label> start value:
                <input
                    className={currentStartValue >= currentMaxValue ? s.warningInput : ""}
                    type="number"
                    value={currentStartValue}
                    onChange={onChangeMinValueSettingsHandler}
                    min={minValueInput}
                    max={maxValueInput}
                />
            </label>
        </div>
    );
};
