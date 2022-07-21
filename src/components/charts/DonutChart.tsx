import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const options: ApexOptions = {
    chart: {
        type: 'donut',
    },
    legend: {
        position: 'right'
    }
}

const series = [44, 55, 41, 17, 15]

export function DonutChart() {
    return (
        <ReactApexChart
            options={options}
            series={series}
            type="donut"
            width="100%"
        />
    );
}