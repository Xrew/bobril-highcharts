import * as b from 'bobril';
import "bobril-flex-ie10";
import * as m from 'bobril-m';
import * as Container from './components/container';
import * as Layout from './components/layout';
import * as BHighchart from '../index';

// All definitions of charts are copied from http://www.highcharts.com/demo
m.initRobotoFonts();

// *********************************************************************************
// ************************* Example of bobril-highcharts usage ***********************
// *********************************************************************************
b.init(() => {
    return [
        Layout.create({
            header: 'bobril-highcharts',
            description: [
                'Wrapper of Highcharts library for Bobril. Data definitions of charts were taken in original ',
                {tag: 'a', attrs: {href: 'http://www.highcharts.com/demo'}, children: 'Highcharts samples'}, '.',
                b.styledDiv('You will find there a more detailed explanation of all properties used in examples.', {display: 'block'}),
                b.styledDiv('Examples below are just for imagination. All opportunities of library are discussed in documentation.', {display: 'block'})
            ],
            examples: [
                Container.create({
                    zDepth: 4,
                    content: BHighchart.create({
                        updateData: (options: BHighchart.IHighchartsOptions) => {
                            // You can change anything in highcharts options
                            options = updateChartData(options);
                            return options;
                        },
                        options: getDynamicalChartOptions()
                    })
                }),
                Container.create({
                    zDepth: 4,
                    content: BHighchart.create({
                        options: getBarChartOptions()
                    })
                }),
                Container.create({
                    zDepth: 4,
                    content: BHighchart.create({
                        options: getAreaChartOptions()
                    })
                }),
                Container.create({
                    zDepth: 4,
                    content: BHighchart.create({
                        options: getPieChartOptions()
                    })
                })
            ]
        })
    ]
});

// *********************************************************************************
// ******************************** Data definition ********************************
// *********************************************************************************
function getBarChartOptions() {
    return {

        title: {
            text: 'Solar Employment Growth by Sector, 2010-2016'
        },

        subtitle: {
            text: 'Source: thesolarfoundation.com'
        },

        yAxis: {
            title: {
                text: 'Number of Employees'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                pointStart: 2010
            }
        },

        series: [{
            name: 'Installation',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
            name: 'Manufacturing',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
            name: 'Sales & Distribution',
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }, {
            name: 'Project Development',
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        }, {
            name: 'Other',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }]

    }
}

function getAreaChartOptions() : BHighchart.IHighchartsOptions{
    return {
        chart: {
            type: 'area'
        },
        title: {
            text: 'US and USSR nuclear stockpiles'
        },
        subtitle: {
            text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
            'thebulletin.metapress.com</a>'
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return (this  as any).value; // clean, unformatted number for year
                }
            }
        },
        yAxis: {
            title: {
                text: 'Nuclear weapon states'
            },
            labels: {
                formatter: function () {
                    return (this  as any).value/ 1000 + 'k';
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
        },
        plotOptions: {
            area: {
                pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'USA',
            data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
                1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
        }, {
            name: 'USSR/Russia',
            data: [null, null, null, null, null, null, null, null, null, null,
                5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                21000, 20000, 19000, 18000, 18000, 17000, 16000]
        }]
    };
}

function getPieChartOptions() {
    return {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares January, 2015 to May, 2015'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Microsoft Internet Explorer',
                y: 56.33
            }, {
                name: 'Chrome',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Firefox',
                y: 10.38
            }, {
                name: 'Safari',
                y: 4.77
            }, {
                name: 'Opera',
                y: 0.91
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2
            }]
        }]
    };
}

function getDynamicalChartOptions() {
    return {
        chart: {
            events: {
                load:  () => {
                    setInterval(() => {
                        b.invalidate()
                    }, 1000);
                }
            }
        },

        rangeSelector: {
            buttons: [{
                count: 1,
                type: 'minute',
                text: '1M'
            }, {
                count: 5,
                type: 'minute',
                text: '5M'
            }, {
                type: 'all',
                text: 'All'
            }],
            inputEnabled: false,
            selected: 0
        },

        title: {
            text: 'Live random data'
        },

        exporting: {
            enabled: false
        },

        series: [{
            name: 'Random data',
            data: (() => {
                // generate an array of random data
                let data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -20; i <= 0; i += 1) {
                    data.push([
                        time + i * 1000,
                        Math.round(Math.random() * 100)
                    ]);
                }
                return data;
            })()
        }]
    };
}

function updateChartData(opts: BHighchart.IHighchartsOptions): BHighchart.IHighchartsOptions {
    // set up the updating of the chart each second
    let x = (new Date()).getTime(), // current time
        y = Math.round(Math.random() * 100);

    opts.series[0] = b.assign(opts.series[0], {data: [...opts.series[0].data, [x, y]]});

    return opts;
}