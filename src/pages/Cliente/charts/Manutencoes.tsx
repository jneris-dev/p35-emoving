import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const options: ApexOptions = {
    chart: {
        height: 350,
        type: 'line',
    },
    stroke: {
        width: [0, 4]
    },
    colors: ["#FF1654", "#444580"],
    dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
    },
    labels: ['2017', '2018', '2019', '2020', '2021'],
};

const series = [
    {
        name: 'Mercado tradicional',
        type: 'column',
        data: [300, 440, 505, 414, 671]
    }, {
        name: 'E-Moving',
        type: 'line',
        data: [250, 320, 450, 400, 510]
    }
]

export function Manutencoes() {
    return (
        <ReactApexChart
            options={options}
            series={series}
            type="line"
            width="100%"
        />
    );
}