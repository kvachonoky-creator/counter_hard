import { Button } from "../button/Button.tsx";
import s from "./ButtonsBox.module.scss"


export type ButtonsBoxType = {
    number: number
    maxValue: number
    minValue: number
    isSet: boolean
    incNumber: () => void
    resNumber: () => void
    changeSet: () => void
}

export const ButtonsBox = ({
    number,
    isSet,
    maxValue,
    minValue,
    incNumber,
    resNumber,
    changeSet,
}: ButtonsBoxType) => {

    const incNumberHandler = () => incNumber()
    const resNumberHandler = () => resNumber()
    const setSettingsHandler = () => changeSet()
    return (
        <div>
            <Button onClick={incNumberHandler}
                title={"inc"}
                className={number === maxValue ? s.disBtn : ""}
                disabled={number === maxValue}
                hidden={isSet}
            />
            <Button onClick={resNumberHandler}
                className={number === minValue ? s.disBtn : ""}
                disabled={number === minValue}
                title={"reset"}
                hidden={isSet}
            />
            <Button onClick={setSettingsHandler} title={"set"}
            />
        </div>
    );
}
    ;
