export type ButtonType = {
    onClick: () => void;
    className?: string;
    title: string;
    disabled?: boolean;
}

export const Button = ({
                           onClick,
                           className,
                           title,
                           disabled
                       }: ButtonType) => {
    return (
        <button
            onClick={() => onClick()}
            className={className}
            title={title}
            disabled={disabled}>
            {title}
        </button>
    );
};

