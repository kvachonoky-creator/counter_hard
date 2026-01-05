import { Button } from "../button/Button.tsx";


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
    maxValue,
    minValue,
    isSet,
    incNumber,
    resNumber,
    changeSet,
}: ButtonsBoxType) => {

    const incNumberHandler = () => incNumber()
    const resNumberHandler = () => resNumber()
    const setSettingsHandler = () => changeSet()
    return (
        <div className={isSet ? "btn-wrap-hidden-expect-last" : "btn-wrap"}>
            <Button onClick={incNumberHandler}
                title={"inc"}
                className={number === maxValue ? "dis-btn" : ""}
                disabled={number === maxValue}
            />
            <Button onClick={resNumberHandler}
                className={number === minValue ? "dis-btn" : ""}
                disabled={number === minValue}
                title={"reset"}
            />
            <Button onClick={setSettingsHandler} title={"set"}
            />
        </div>
    );
}
    ;
