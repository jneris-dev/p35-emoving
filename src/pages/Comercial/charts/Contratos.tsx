import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

interface ChartProps {
    theme: boolean;
}

export function Contratos({ theme }: ChartProps) {

    const options: ApexOptions = {
        theme: {
            mode: theme ? 'dark' : 'light',
        },
        chart: {
            type: 'bar',
            height: 430
        },
        plotOptions: {
            bar: {
                horizontal: true,
                dataLabels: {
                    position: 'top',
                },
            }
        },
        dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
                fontSize: '12px',
                colors: ['#fff']
            }
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
        },
        tooltip: {
            shared: true,
            intersect: false
        },
        xaxis: {
            categories: [2019, 2020, 2021],
        }
    };

    const series = [
        {
            name: 'Propostas enviadas',
            data: [44, 55, 41]
        },
        {
            name: 'Contratos enviados',
            data: [53, 32, 33]
        },
        {
            name: 'Contratos assinados',
            data: [13, 44, 32]
        }
    ]

    return (
        <ReactApexChart
            options={options}
            series={series}
            type="bar"
            width="100%"
        />
    );
}