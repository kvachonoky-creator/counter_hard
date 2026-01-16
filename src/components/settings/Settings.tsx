import { ChangeEvent, useEffect, useState } from "react";
import s from "./Settings.module.scss"
import { Button } from "../buttonBox/button/Button";

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

    useEffect(() => {
        changeIsSettingsCorrectValue(!isCorrect)
    }, [currentMaxValue, currentStartValue])

    useEffect(() => {
        setCurrentMaxValue(maxValue)
        setCurrentStartValue(startValue)
    }, [maxValue, startValue])

    const onChangeMinValueSettingsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 0) {
            updateMinValueSettings(+e.currentTarget.value)
        }
        setCurrentStartValue(+e.currentTarget.value)
        changeIsSet(true)
    }

    const onChangeMaxValueSettingsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 1) {
            updateMaxValueSettings(+e.currentTarget.value)
        }
        setCurrentMaxValue(+e.currentTarget.value)
        changeIsSet(true)
    }

    const onClickHandler = () => changeIsSet(false)

    return (
        <div className={s.settings}>
            <div>
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
            <div>
                <Button
                    onClick={onClickHandler}
                    className={(isSet && !isCorrect) || !isSet ? s.disBtn : ""}
                    title={"set"}
                    disabled={(isSet && !isCorrect) || !isSet}
                />
            </div>

        </div>

    );
};
