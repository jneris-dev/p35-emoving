import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

interface ChartProps {
    theme: boolean;
}

export function Outbound({ theme }: ChartProps) {

    const options: ApexOptions = {
        theme: {
            mode: theme ? 'dark' : 'light',
            palette: 'palette3'
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
        labels: [
            'Leads outbound',
            'Reuniões agendadas',
            'Reuniões realizadas',
            'Propostas enviadas',
            'Contratos enviados',
            'Contratos assinados'
        ],
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
            },
            formatter: function (seriesName, opts) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
            },
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

    const series = [56, 87, 46, 86, 23, 98]

    return (
        <ReactApexChart
            options={options}
            series={series}
            type="radialBar"
            width="100%"
        />
    );
}