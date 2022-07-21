import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const options: ApexOptions = {
    chart: {
        width: 380,
        type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
}

const series = [44, 55, 13, 43, 22]

export function PieChart() {
    return (
        <ReactApexChart
            options={options}
            series={series}
            type="pie"
            width="100%"
        />
    );
}