import { Button } from "./button/Button.tsx";
import s from "./ButtonsBox.module.scss"


export type ButtonsBoxType = {
    value: number
    maxValue: number
    startValue: number
    isSet: boolean
    isSettingsCorrectValue: boolean
    incNumber: () => void
    resNumber: () => void
}

export const ButtonsBox = ({
    value,
    isSet,
    maxValue,
    startValue,
    incNumber,
    resNumber,
}: ButtonsBoxType) => {

    const incNumberHandler = () => incNumber()
    const resNumberHandler = () => resNumber()
    return (
        <div>
            <Button
                onClick={incNumberHandler}
                title={"inc"}
                className={value === maxValue || isSet ? s.disBtn : ""}
                disabled={value === maxValue || isSet}
            />
            <Button
                onClick={resNumberHandler}
                className={value === startValue || isSet ? s.disBtn : ""}
                disabled={value === startValue || isSet}
                title={"reset"}
            />
        </div>
    );
}
    ;
