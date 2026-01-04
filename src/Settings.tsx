import {max, min} from "./App.tsx";

type SettingsType = {
    className?: string;
}

export const Settings = ({className}: SettingsType) => {
    return (
        <div className={className}>
            <label> max value:
                <input type="number"
                       min={min}
                       max={max}/>
            </label>
            <label> min value:
                <input type="number"
                       min={min}
                       max={max}/>
            </label>
        </div>
    );
};
