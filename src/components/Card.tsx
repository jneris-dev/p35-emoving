type Props = {
    children?: JSX.Element | JSX.Element[],
    width: string[],
    label?: string;
    description?: string;
};

export function Card(props: Props) {
    var newPropsWith = props.width.join(" ");

    return (
        <div className={`bg-white rounded drop-shadow-sm p-4 min-h-full ${newPropsWith}`}>
            {props.label &&
                <strong className="text-lg leading-relaxed">
                    {props.label}
                </strong>
            }
            {props.description &&
                <p className="text-md text-zinc-500 mb-5">
                    {props.description}
                </p>
            }
            {props.children}
        </div>
    );
}