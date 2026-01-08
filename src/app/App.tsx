import {useEffect, useState} from "react";
import {Counter} from "../components/counter/Counter.tsx";
import s from "./App.module.scss"


function App() {

    const [startValue, setStartValue] = useState<number>(0)

    let [maxValue, setMaxValue] = useState<number>(5)
    const [number, setNumber] = useState<number>(startValue);
    const [isSet, setIsSet] = useState<boolean>(false);
    const [isSettingsCorrectValue, setIsSettingsCorrectValue] = useState<boolean>(false);

    useEffect(() => {
            let localStorageStartValue = localStorage.getItem("counterNumber");
            localStorageStartValue && setNumber(JSON.parse(localStorageStartValue));

            let maxValue = localStorage.getItem("MaxValueSettings")
            maxValue && setMaxValue(JSON.parse(maxValue));
        },
        [])

    useEffect(() => {
        localStorage.setItem("counterNumber", JSON.stringify(number));
    }, [number])

    const incNumberHandler = () => number < maxValue && setNumber(number + 1)

    const resNumberHandler = () => setNumber(startValue)
    const changeSet = () => setIsSet(!isSet)
    const changeStartValue = (value: number) => setStartValue(value)

    const updateMinValueSettings = (value: number) => setNumber(value)
    const updateMaxValueSettings = (value: number) => setMaxValue(value)
    const changeIsSettingsCorrectValue = (value: boolean) => setIsSettingsCorrectValue(value)

    return (
        <div className={s.app}>
            <Counter
                number={number}
                maxValue={maxValue}
                startValue={startValue}
                isSet={isSet}
                isSettingsCorrectValue={isSettingsCorrectValue}
                incNumber={incNumberHandler}
                resNumber={resNumberHandler}
                changeSet={changeSet}
                updateMinValueSettings={updateMinValueSettings}
                updateMaxValueSettings={updateMaxValueSettings}
                changeIsSettingsCorrectValue={changeIsSettingsCorrectValue}
                changeStartValue={changeStartValue}
            />
        </div>
    )
}

export default App
