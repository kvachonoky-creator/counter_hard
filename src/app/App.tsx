import { useEffect, useState } from "react";
import { Counter } from "../components/counter/Counter.tsx";
import s from "./App.module.scss"


function App() {

    let startValue: number = 0
    let maxInitValue: number = 5

    let [maxValue, setMaxValue] = useState<number>(maxInitValue)
    const [number, setNumber] = useState<number>(startValue);
    const [isSet, setIsSet] = useState<boolean>(false);
    const [isSettingsCorrectValue, setisSettingsCorrectValue] = useState<boolean>(false);

    useEffect(() => {
        let localStorageStartValue = localStorage.getItem("counterNumber");
        localStorageStartValue && setNumber(JSON.parse(localStorageStartValue));
    },
        [])

    useEffect(() => {
        localStorage.setItem("counterNumber", JSON.stringify(number));
    }, [number])

    const incNumberHandler = () => number < maxValue && setNumber(number + 1)

    const resNumberHandler = () => setNumber(startValue)
    const changeSet = () => setIsSet(!isSet)
    const updateMinValueSettings = (value: number) => setNumber(value)
    const updateMaxValueSettings = (value: number) => setMaxValue(value)
    const changeIsSettingsCorrectValue = (value: boolean) => setisSettingsCorrectValue(value)


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
            />
        </div>
    )
}

export default App
