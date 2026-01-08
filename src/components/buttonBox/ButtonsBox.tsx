import { Button } from "../button/Button.tsx";
import s from "./ButtonsBox.module.scss"


export type ButtonsBoxType = {
    number: number
    maxValue: number
    startValue: number
    isSet: boolean
    isSettingsCorrectValue: boolean
    incNumber: () => void
    resNumber: () => void
    changeSet: () => void
}

export const ButtonsBox = ({
    number,
    isSet,
    isSettingsCorrectValue,
    maxValue,
    startValue,
    incNumber,
    resNumber,
    changeSet,
}: ButtonsBoxType) => {

    const incNumberHandler = () => incNumber()
    const resNumberHandler = () => resNumber()
    const setSettingsHandler = () => changeSet()
    return (
        <div>
            <Button
                onClick={incNumberHandler}
                title={"inc"}
                className={number === maxValue ? s.disBtn : ""}
                disabled={number === maxValue}
                hidden={isSet}
            />
            <Button
                onClick={resNumberHandler}
                className={number === startValue ? s.disBtn : ""}
                disabled={number === startValue}
                title={"reset"}
                hidden={isSet}
            />
            <Button
                onClick={setSettingsHandler}
                className={isSettingsCorrectValue ? s.disBtn : ""}
                title={"set"}
                disabled={isSettingsCorrectValue}
            />
        </div>
    );
}
    ;
