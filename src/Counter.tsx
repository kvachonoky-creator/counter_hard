import {ButtonsBox} from "./ButtonsBox.tsx";
import {max} from "./App.tsx";
import {Settings} from "./Settings.tsx";

type CounterType = {
    number: number;
    isSet: boolean;
    incNumber: () => void
    resNumber: () => void
    changeSet: () => void;
}

export const Counter = ({
                            number,
                            isSet,
                            incNumber,
                            resNumber,
                            changeSet,
                        }: CounterType) => {

    return (
        <div className="counter">
            <Settings className={isSet ? "settings" : "settings none"}/>
            <div className={isSet ? "settings none" : ""}>
                <span className={number === max ? "max" : ""}>{number}</span>
            </div>
            <ButtonsBox
                isSet = {isSet}
                number={number}
                resNumber={resNumber}
                incNumber={incNumber}
                changeSet={changeSet}
            />
        </div>
    );
};
