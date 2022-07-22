import { TrendDown, TrendUp } from "phosphor-react";

interface Props {
    label: string;
    data: string;
    rate: string;
    description: string;
    status: string;
}

export function Numeric(props: Props) {
    return (
        <div className="flex flex-col h-full max-h-250px gap-3">
            <label className="text-2x font-medium">
                {props.label}
            </label>
            <strong className={`text-5xl font-medium flex flex-row gap-2 items-center ${props.status === 'positive' ? 'text-teal-600' : 'text-red-500'}`}>
                {props.status === 'positive' ?
                    <TrendUp size={28} weight="light" />
                    :
                    <TrendDown size={28} weight="light" />
                }
                {props.data}
            </strong>
            <small className="font-medium text-zinc-500">
                <span className={`${props.status === 'positive' ? 'text-teal-600' : 'text-red-500'}`}>
                    {props.rate}
                </span> {props.description}
            </small>
        </div>
    );
}