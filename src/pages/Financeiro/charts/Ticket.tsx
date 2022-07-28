import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

interface ChartProps {
    theme: boolean;
}

export function Ticket({ theme }: ChartProps) {

    const options: ApexOptions = {
        theme: {
            mode: theme ? 'dark' : 'light',
            palette: 'palette2'
        },
        chart: {
            type: 'line',
            background: 'transparent',
            stacked: false
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [4, 4, 4]
        },
        xaxis: {
            categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
        },
        yaxis: [{
            title: {
                text: 'Column',
            },

        }, {
            opposite: true,
            title: {
                text: 'Line'
            }
        }]
    };

    const series = [
        {
            name: 'Column A',
            type: 'column',
            data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5]
        },
        {
            name: "Column B",
            type: 'column',
            data: [10, 19, 27, 26, 34, 35, 40, 38]
        },
        {
            name: "Line C",
            type: 'line',
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
        },
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