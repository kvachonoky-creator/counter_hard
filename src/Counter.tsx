import {Button} from "./Button.tsx";

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
    const max = 5
    const min = 0
    const incNumberHandler = () => {
        if (number < max) {
            incNumber()
        }
    }

    return (
        <div className="counter">
            <span className={number === max ? "max" : ""}>{number}</span>
            <div className={"btn-wrap"}>
                <Button
                    className={number === max ? "dis-btn" : ""}
                    disabled={number === max}
                    title={"inc"}
                    onClick={incNumberHandler}/>
                <Button
                    className={number === min ? "dis-btn" : ""}
                    disabled={number === min}
                    title={"reset"}
                    onClick={() => resNumber()}/>
            </div>
        </div>
    );
};
