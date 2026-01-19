import { useEffect, useState } from "react";
import { Counter } from "../components/counter/Counter.tsx";
import s from "./App.module.scss"
import { Settings } from "../components/settings/Settings.tsx";
import React from "react";


function App() {
    const INITIAL_START_VALUE = 0
    const INITIAL_MAX_VAUE = 5
    
    const [startValue, setStartValue] = useState<number>(INITIAL_START_VALUE)
    const [maxValue, setMaxValue] = useState<number>(INITIAL_MAX_VAUE)
    const [value, setValue] = useState<number>(startValue);
    const [isSet, setIsSet] = useState<boolean>(false);
    const [isSettingsCorrectValue, setIsSettingsCorrectValue] = useState<boolean>(false);

    useEffect(() => {
        let localStorageNumbertValue = localStorage.getItem("Value");
        if (localStorageNumbertValue) {
            setValue(JSON.parse(localStorageNumbertValue));
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
        localStorage.setItem("StartValueSettings", JSON.stringify(startValue));
        localStorage.setItem("Value", JSON.stringify(value));
        localStorage.setItem("MaxValueSettings", JSON.stringify(maxValue))
    }, [startValue, value, maxValue])

    const incNumberHandler = () => value < maxValue && setValue(value + 1)
    const resNumberHandler = () => setValue(startValue)
    const updateMinValueSettings = (value: number) => { setValue(value); setStartValue(value) }
    const updateMaxValueSettings = (value: number) => setMaxValue(value)
    const changeIsSet = (value: boolean) => setIsSet(value)
    const changeIsSettingsCorrectValue = (value: boolean) => setIsSettingsCorrectValue(value)

    return (
        <div className={s.app}>

            <Settings
                startValue={startValue}
                maxValue={maxValue}
                isSet={isSet}
                updateMinValueSettings={updateMinValueSettings}
                updateMaxValueSettings={updateMaxValueSettings}
                changeIsSet={changeIsSet}
                changeIsSettingsCorrectValue={changeIsSettingsCorrectValue}
            />

            <Counter
                value={value}
                maxValue={maxValue}
                startValue={startValue}
                isSet={isSet}
                isSettingsCorrectValue={isSettingsCorrectValue}
                incNumber={incNumberHandler}
                resNumber={resNumberHandler}
                updateMinValueSettings={updateMinValueSettings}
                updateMaxValueSettings={updateMaxValueSettings}
                changeIsSettingsCorrectValue={changeIsSettingsCorrectValue}
            />
        </div>
    )
}

export default App
