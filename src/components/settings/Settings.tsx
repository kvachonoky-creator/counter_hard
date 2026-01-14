import { ChangeEvent, useEffect, useState } from "react";
import s from "./Settings.module.scss"

type SettingsType = {
    maxValue: number
    startValue: number
    className?: string
    updateMinValueSettings: (value: number) => void
    updateMaxValueSettings: (value: number) => void
    changeIsSettingsCorrectValue: (value: boolean) => void
}

export const Settings = ({
    className,
    startValue,
    maxValue,
    updateMinValueSettings,
    updateMaxValueSettings,
    changeIsSettingsCorrectValue
}: SettingsType) => {


    const [currentMaxValue, setCurrentMaxValue] = useState<number>(maxValue)
    const [currentStartValue, setCurrentStartValue] = useState<number>(startValue)


    useEffect(() => {
        const isCorrect = currentStartValue >= 0 && currentMaxValue > currentStartValue && currentMaxValue >= 1
        changeIsSettingsCorrectValue(!isCorrect)
    }, [currentMaxValue, currentStartValue])

    useEffect(() => {
        setCurrentMaxValue(maxValue)
        setCurrentStartValue(startValue)
    }, [maxValue, startValue])


    const onChangeMinValueSettingsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 0) {
            updateMinValueSettings(+e.currentTarget.value)
            setCurrentStartValue(+e.currentTarget.value)
        } else {
            setCurrentStartValue(+e.currentTarget.value)
        }

    }

    const onChangeMaxValueSettingsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 1) {
            updateMaxValueSettings(+e.currentTarget.value)
            setCurrentMaxValue(+e.currentTarget.value)
        } else {
            setCurrentMaxValue(+e.currentTarget.value)
        }
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
                    className={currentStartValue >= currentMaxValue || currentStartValue < 0 ? s.warningInput : ""}
                    type="number"
                    value={currentStartValue}
                    onChange={onChangeMinValueSettingsHandler}
                />
            </label>
        </div>
    );
};
