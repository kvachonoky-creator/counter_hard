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

    const [currentMaxValue, setCurrentMaxValue] = useState<number>(maxInitValue)
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


    changeStartValue(currentStartValue)
    changeMaxInitValue(currentMaxValue)

console.log(currentMaxValue);




    const onChangeMinValueSettingsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateMinValueSettings(+e.currentTarget.value)
        setCurrentStartValue(+e.currentTarget.value)
    }

    const onChangeMaxValueSettingsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateMaxValueSettings(+e.currentTarget.value)
        setCurrentMaxValue(+e.currentTarget.value)
    }

    changeIsSettingsCorrectValue(currentStartValue >= currentMaxValue)


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
