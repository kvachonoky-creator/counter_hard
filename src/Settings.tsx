import { ChangeEvent } from "react";
type SettingsType = {
    maxValue: number
    minValue: number
    className?: string
    updateMinValueSettings: (value: number) => void
    updateMaxValueSettings: (value: number) => void
}

export const Settings = ({ maxValue,
    minValue,
    className,
    updateMinValueSettings,
    updateMaxValueSettings
}: SettingsType) => {

    // const minValueInput = 0
    // const maxValueInput = 5

    const onChangeMinValueSettingsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateMinValueSettings(+e.currentTarget.value)
    }

    const onChangeMaxValueSettingsHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateMaxValueSettings(+e.currentTarget.value)
    }


    return (
        <div className={className}>
            <label> max value:
                <input type="number"
                    onChange={onChangeMaxValueSettingsHandler}
                    min={minValue}
                    disabled={}
                // max={maxValueInput}
                />
            </label>
            <label> min value:
                <input type="number"
                    onChange={onChangeMinValueSettingsHandler}
                    disabled={false}
                    min={minValue}
                // max={maxValueInput}
                />
            </label>
        </div>
    );
};
