import { ButtonsBox } from "../buttonBox/ButtonsBox.tsx";
import s from "./Counter.module.scss"

type CounterType = {
    value: number
    maxValue: number
    startValue: number
    isSet: boolean
    isSettingsCorrectValue: boolean
    incNumber: () => void
    resNumber: () => void
    updateMinValueSettings: (value: number) => void
    updateMaxValueSettings: (value: number) => void
    changeIsSettingsCorrectValue: (value: boolean) => void
}

export const Counter = ({
    value,
    maxValue,
    startValue,
    isSet,
    isSettingsCorrectValue,
    incNumber,
    resNumber,
}: CounterType) => {


    return (
        <div className={s.counter}>
            <div> {isSet
                ? <span
                    className={isSettingsCorrectValue ? `${s.text} ${s.inCorrect}` : s.text}>
                    {isSettingsCorrectValue ? `Incorrect value!` : `enter values and press 'set'`}
                </span>
                : <span
                    className={value === maxValue ? s.max : ""}>
                    {value}
                </span>
            }
            </div>
            <ButtonsBox
                isSet={isSet}
                isSettingsCorrectValue={isSettingsCorrectValue}
                value={value}
                maxValue={maxValue}
                startValue={startValue}
                resNumber={resNumber}
                incNumber={incNumber}
            />
        </div>
    );
};
