import { ButtonsBox } from "../buttonBox/ButtonsBox.tsx";
import { Settings } from "../settings/Settings.tsx";
import s from "./Counter.module.scss"

type CounterType = {
    number: number
    maxValue: number
    minValue: number
    isSet: boolean
    incNumber: () => void
    resNumber: () => void
    changeSet: () => void
    updateMinValueSettings: (value: number) => void
    updateMaxValueSettings: (value: number) => void
}

export const Counter = ({
    number,
    maxValue,
    minValue,
    isSet,
    incNumber,
    resNumber,
    changeSet,
    updateMinValueSettings,
    updateMaxValueSettings
}: CounterType) => {

    return (
        <div className={s.counter}>
            <Settings
                maxValue={maxValue}
                minValue={minValue}
                className={isSet ? s.settings : `${s.settings} ${s.none}`}
                updateMinValueSettings={updateMinValueSettings}
                updateMaxValueSettings={updateMaxValueSettings}
            />
            <div className={isSet ? `${s.settings} ${s.none}` : ""}>
                <span className={number === maxValue ? s.max : ""}>{number}</span>
            </div>
            <ButtonsBox
                isSet={isSet}
                number={number}
                maxValue={maxValue}
                minValue={minValue}
                resNumber={resNumber}
                incNumber={incNumber}
                changeSet={changeSet}
            />
        </div>
    );
};
