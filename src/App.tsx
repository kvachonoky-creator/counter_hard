import './App.css'
import {useState} from "react";
import {Counter} from "./Counter.tsx";

function App() {

    const [number, setNumber] = useState<number>(0);

    return (
        <div className="app">
            <Counter
                number={number}
                incNumber={() => setNumber(number + 1)}
                resNumber={() => setNumber(0)}
            />
        </div>
    )
}

export default App
