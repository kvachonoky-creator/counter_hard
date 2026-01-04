import './App.css'
import {useState} from "react";
import {Counter} from "./Counter.tsx";

export const max = 5
export const min = 0

function App() {

    const [number, setNumber] = useState<number>(0);

    const incNumberHandler = () => number < 5 && setNumber(number + 1)


    const resNumberHandler = () => setNumber(0)


    return (
        <div className="app">
            <Counter
                number={number}
                incNumber={incNumberHandler}
                resNumber={resNumberHandler}
            />
        </div>
    )
}

export default App
