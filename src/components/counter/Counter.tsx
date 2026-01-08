import { ButtonsBox } from "../buttonBox/ButtonsBox.tsx";
import { Settings } from "../settings/Settings.tsx";
import s from "./Counter.module.scss"

type CounterType = {
    number: number
    maxValue: number
    startValue: number
    isSet: boolean
    isSettingsCorrectValue: boolean
    incNumber: () => void
    resNumber: () => void
    changeSet: () => void
    updateMinValueSettings: (value: number) => void
    updateMaxValueSettings: (value: number) => void
    changeIsSettingsCorrectValue: (value: boolean) => void
}

export const Counter = ({
    number,
    maxValue,
    startValue,
    isSet,
    isSettingsCorrectValue,
    incNumber,
    resNumber,
    changeSet,
    updateMinValueSettings,
    updateMaxValueSettings,
    changeIsSettingsCorrectValue
}: CounterType) => {

    return (
        <div className={s.counter}>
            <Settings
                maxValue={maxValue}
                className={isSet ? s.settings : `${s.settings} ${s.none}`}
                updateMinValueSettings={updateMinValueSettings}
                updateMaxValueSettings={updateMaxValueSettings}
                changeIsSettingsCorrectValue={changeIsSettingsCorrectValue}
            />
            <div className={isSet ? `${s.settings} ${s.none}` : ""}>
                <span className={number === maxValue ? s.max : ""}>{number}</span>
            </div>
            <ButtonsBox
                isSet={isSet}
                isSettingsCorrectValue={isSettingsCorrectValue}
                number={number}
                maxValue={maxValue}
                startValue={startValue}
                resNumber={resNumber}
                incNumber={incNumber}
                changeSet={changeSet}
            />
        </div>
    );
};
