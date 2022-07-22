import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const options: ApexOptions = {
    chart: {
        id: "basic-bar",
        type: "bar",
        events: {
            beforeMount: function () {
                return (
                    <p>Loading...</p>
                )
            }
        }
    },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    }
};

const series = [
    {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
]

export function BarChart() {
    return (
        <ReactApexChart
            options={options}
            series={series}
            type="bar"
            width="100%"
        />
    );
}