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
    colors: [function ({ value, seriesIndex, w }: any) {
        if (value <= 6) {
            return '#e5353a'
        } else if (value >= 9 || value > 8) {
            return '#7ec92f'
        } else {
            return '#fec03b'
        }
    }],
    xaxis: {
        categories: ['T1 - 2020', 'T2 - 2020', 'T3 - 2020', 'T1 - 2021', 'T2 - 2021', 'T3 - 2021', 'T1 - 2022', 'T2 - 2022']
    }
};

const series = [
    {
        name: "Nota NPS",
        data: [5.8, 7, 6.25, 7.5, 8.5, 9, 8.25, 8.5]
    }
]

export function NPSTrimestre() {
    return (
        <ReactApexChart
            options={options}
            series={series}
            type="bar"
            width="100%"
        />
    );
}