import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

interface ChartProps {
    theme: boolean;
}

export function Marketing({ theme }: ChartProps) {

    const options: ApexOptions = {
        theme: {
            mode: theme ? 'dark' : 'light',
        },
        chart: {
            height: 390,
            type: 'radialBar',
            background: 'transparent'
        },
        plotOptions: {
            radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 270,
                hollow: {
                    margin: 5,
                    size: '30%',
                    background: 'transparent',
                    image: undefined,
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        show: false,
                    }
                }
            }
        },
        colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
        labels: ['CAC*', 'ROI*', 'Leads inbound', 'Leads outbound'],
        legend: {
            show: true,
            floating: true,
            fontSize: '16px',
            position: 'left',
            offsetY: 15,
            labels: {
                useSeriesColors: true,
            },
            itemMargin: {
                vertical: 3
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    show: false
                }
            }
        }]
    };

    const series = [76, 67, 61, 90]

    return (
        <ReactApexChart
            options={options}
            series={series}
            type="radialBar"
            width="100%"
        />
    );
}