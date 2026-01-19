import React from "react";
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

    const classIncButton = value === maxValue || isSet ? s.disBtn : ""
    const disabledIncButton = value === maxValue || isSet
    const classResButton = value === startValue || isSet ? s.disBtn : ""
    const disabledResButton = value === startValue || isSet

    const incNumberHandler = () => incNumber()
    const resNumberHandler = () => resNumber()
    return (
        <div>
            <Button
                onClick={incNumberHandler}
                title={"inc"}
                className={classIncButton}
                disabled={disabledIncButton}
            />
            <Button
                onClick={resNumberHandler}
                className={classResButton}
                disabled={disabledResButton}
                title={"reset"}
            />
        </div>
    );
}
    ;
