import {ButtonsBox} from "./ButtonsBox.tsx";
import {max} from "./App.tsx";

type CounterType = {
    number: number;
    incNumber: () => void
    resNumber: () => void
}

export const Counter = ({
                            number,
                            incNumber,
                            resNumber
                        }: CounterType) => {


    return (
        <div className="counter">
            <span className={number === max ? "max" : ""}>{number}</span>
            <ButtonsBox
                resNumber={resNumber}
                incNumber={incNumber}
                number={number}/>
        </div>
    );
};
