import {Button} from "./Button.tsx";
import {max, min} from "./App.tsx";

export type ButtonsBoxType = {
    number: number;
    isSet: boolean;
    incNumber: () => void
    resNumber: () => void
    changeSet: () => void
}

export const ButtonsBox = ({
                               number,
                               isSet,
                               incNumber,
                               resNumber,
                               changeSet,
                           }: ButtonsBoxType) => {

        const incNumberHandler = () => number < max && incNumber()
        const resNumberHandler = () => resNumber()
        const setSettingsHandler = () => changeSet()
        return (
            <div className={isSet ? "btn-wrap-hidden-expect-last" : "btn-wrap"}>
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
                <Button onClick={setSettingsHandler} title={"set"}
                />
            </div>
        );
    }
;
