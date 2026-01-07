import {ChangeEvent, useState} from "react";
import s from "./Settings.module.scss"

type SettingsType = {
    maxValue: number
    minValue: number
    className?: string
    updateMinValueSettings: (value: number) => void
    updateMaxValueSettings: (value: number) => void
}

export const Settings = ({
                             className,
                             updateMinValueSettings,
                             updateMaxValueSettings
                         }: SettingsType) => {

    const minValueInput = 0
    const maxValueInput = 5

    const [currentMaxValue, setCurrentMaxValue] = useState<number>(maxValueInput)
    const [currentStartValue, setCurrentStartValue] = useState<number>(0)


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
