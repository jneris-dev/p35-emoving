import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

interface ChartProps {
    theme: boolean;
}

export function Reunioes({ theme }: ChartProps) {

    const options: ApexOptions = {
        theme: {
            mode: theme ? 'dark' : 'light',
        },
        chart: {
            type: 'pie',
        },
        legend: {
            position: 'bottom'
        },
        labels: ['Reuniões agendadas', 'Reuniões realizadas'],
    };

    const series = [55, 45]

    return (
        <ReactApexChart
            options={options}
            series={series}
            type="pie"
            width="100%"
        />
    );
}