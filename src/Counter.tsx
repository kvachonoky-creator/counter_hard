import { ButtonsBox } from "./ButtonsBox.tsx";
import { Settings } from "./Settings.tsx";

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
        <div className="counter">
            <Settings
                maxValue={maxValue}
                minValue={minValue}
                className={isSet ? "settings" : "settings none"}
                updateMinValueSettings={updateMinValueSettings}
                updateMaxValueSettings={updateMaxValueSettings}
            />
            <div className={isSet ? "settings none" : ""}>
                <span className={number === maxValue ? "max" : ""}>{number}</span>
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
