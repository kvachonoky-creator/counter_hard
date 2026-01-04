import './App.css'
import {useState} from "react";
import {Counter} from "./Counter.tsx";

export let max = 5
export let min = 0

function App() {

    const [number, setNumber] = useState<number>(0);
    const [isSet, setIsSet] = useState<boolean>(false);


    const incNumberHandler = () => number < 5 && setNumber(number + 1)
    const resNumberHandler = () => setNumber(0)
    const changeSet = () => setIsSet(!isSet)

    return (
        <div className="app">
            <Counter
                number={number}
                isSet={isSet}
                incNumber={incNumberHandler}
                resNumber={resNumberHandler}
                changeSet = {changeSet}
            />
        </div>
    )
}

export default App
