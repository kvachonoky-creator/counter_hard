import { useEffect, useState } from "react";
import { Counter } from "../components/counter/Counter.tsx";
import s from "./App.module.scss"


function App() {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [number, setNumber] = useState<number>(startValue);
    const [isSet, setIsSet] = useState<boolean>(false);
    const [isSettingsCorrectValue, setIsSettingsCorrectValue] = useState<boolean>(false);

    useEffect(() => {
        let localStorageNumbertValue = localStorage.getItem("counterNumber");
        if (localStorageNumbertValue) {
            setNumber(JSON.parse(localStorageNumbertValue));
        }


        let localStorageStartValue = localStorage.getItem("StartValueSettings")
        if (localStorageStartValue) {
            setStartValue(JSON.parse(localStorageStartValue))
        }

        let localStorageMaxValue = localStorage.getItem("MaxValueSettings")
        if (localStorageMaxValue) {
            setMaxValue(JSON.parse(localStorageMaxValue));
        }

    },
        [])

    useEffect(() => {
        localStorage.setItem("counterNumber", JSON.stringify(number));
    }, [number])

    useEffect(() => {
        localStorage.setItem("StartValueSettings", JSON.stringify(startValue));
    }, [startValue])


    useEffect(() => {
        localStorage.setItem("MaxValueSettings", JSON.stringify(maxValue));
    }, [maxValue])


    const incNumberHandler = () => number < maxValue && setNumber(number + 1)

    const resNumberHandler = () => setNumber(startValue)
    const changeSet = () => setIsSet(!isSet)

    const updateMinValueSettings = (value: number) => {setNumber(value); setStartValue(value)}
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
            />
        </div>
    )
}

export default App
