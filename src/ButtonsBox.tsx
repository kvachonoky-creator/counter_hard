import {Button} from "./Button.tsx";
import {max, min} from "./App.tsx";

export type ButtonsBoxType = {
    number: number;
    incNumber: () => void
    resNumber: () => void
}

export const ButtonsBox = ({
                               incNumber,
                               resNumber,
                               number
                           }: ButtonsBoxType) => {

        const incNumberHandler = () => number < max && incNumber()


        const resNumberHandler = () => resNumber()


        const setSettingsHandler = () => {

        }
        return (
            <div className={"btn-wrap"}>
                <Button onClick={incNumberHandler}
                        title={"inc"}
                        className={number === max ? "dis-btn" : ""}
                        disabled={number === max}
                />
                <Button onClick={resNumberHandler}
                        className={number === min ? "dis-btn" : ""}
                        disabled={number === min}
                        title={"reset"}
                />
                <Button onClick={setSettingsHandler} title={"set"}/>
            </div>
        );
    }
;
