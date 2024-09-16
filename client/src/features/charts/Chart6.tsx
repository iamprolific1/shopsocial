import { Component } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// interface Iprops {}
interface IState {
    options: ApexOptions,
    series: {name: string, data: number[]}[]
}

interface IProps {}
export default class Chart6 extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            series: [
                {
                    name: 'Average Production Rate',
                    data: [5, 3, 7, 2, 4, 6]
                }
            ],
            options: {
                colors: ['#FF5454'],
                chart: {
                    toolbar: {
                        show: false,
                    },
                    height: 120,
                    type: 'line',
                    zoom: {
                        enabled: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth',
                    width: 2,
                },
                title: {
                    text: '',
                },
                xaxis: {
                    labels: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    }
                },
                yaxis: {
                    labels: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                },
                grid: {
                    show: false,
                },
                fill: {
                    type: 'solid',
                    opacity: 1,
                },
            }as ApexOptions // assert option type as ApexOptions
        }
    }

    render() {
        return (
            <div className='chart-container'>
                <Chart 
                    options={this.state.options}
                    series={this.state.series}
                    type='line'
                    height={150}
                    width={150}
                />
            </div>
        )
    }
}