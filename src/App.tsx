import './App.css'
import { useState } from "react";
import { Counter } from "./counter/Counter.tsx";


function App() {

    let minValue: number = 0

    let [maxValue, setMaxValue] = useState<number>(5)
    const [number, setNumber] = useState<number>(minValue);
    const [isSet, setIsSet] = useState<boolean>(false);

    const incNumberHandler = () => number < maxValue && setNumber(number + 1)
    const resNumberHandler = () => setNumber(minValue)
    const changeSet = () => setIsSet(!isSet)
    const updateMinValueSettings = (value: number) => setNumber(value)
    const updateMaxValueSettings = (value: number) => setMaxValue(value)


    return (
        <div className="app">
            <Counter
                number={number}
                maxValue={maxValue}
                minValue={minValue}
                isSet={isSet}
                incNumber={incNumberHandler}
                resNumber={resNumberHandler}
                changeSet={changeSet}
                updateMinValueSettings={updateMinValueSettings}
                updateMaxValueSettings={updateMaxValueSettings}
            />
        </div>
    )
}

export default App
