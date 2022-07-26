import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

interface ChartProps {
    theme: boolean;
}

export function KMCO2({ theme }: ChartProps) {

    const options: ApexOptions = {
        theme: {
            mode: theme ? 'dark' : 'light',
        },
        chart: {
            height: 350,
            type: 'line',
            stacked: false,
            background: 'transparent'
        },
        stroke: {
            width: [0, 2, 5],
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                columnWidth: '50%'
            }
        },
        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
            }
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dez'],
        markers: {
            size: 0
        },
    };

    const series = [
        {
            name: 'KM',
            type: 'column',
            data: [23, 30, 22, 40, 13, 22, 37, 21, 44, 22, 30, 18]
        }, {
            name: 'CO2',
            type: 'area',
            data: [44, 55, 41, 67, 32, 43, 51, 41, 56, 35, 43, 30]
        }
    ]

    return (
        <ReactApexChart
            options={options}
            series={series}
            type="line"
            width="100%"
        />
    );
}