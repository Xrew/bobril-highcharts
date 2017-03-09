import * as b from 'bobril';

b.asset('node_modules/highcharts/highcharts.js');

declare var Highcharts: any;

export interface IHighchartsOptions {
    accessibility?: any;
    chart?: any;
    colors?: any;
    credits?: any;
    data?: any;
    defs?: any;
    drilldown?: any;
    exporting?: any;
    labels?: any;
    legend?: any;
    loading?: any;
    navigation?: any;
    noData?: any;
    pane?: any;
    plotOptions?: any;
    responsive?: any;
    series?: any;
    subtitle?: any;
    title?: any;
    tooltip?: any;
    xAxis?: any;
    yAxis?: any;
    zAxis?: any;
}

interface IData {
    options: IHighchartsOptions;
    updateData?: (options: IHighchartsOptions) => IHighchartsOptions;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
    chart: any;
}

export const create = b.createComponent<IData>({
    init(ctx: IContext) {
        ctx.chart = null;
    },

    render(ctx: IContext) {
        if (ctx.chart && ctx.data.updateData) {
            const updatedOpts = ctx.data.updateData(ctx.data.options);
            ctx.chart.update(updatedOpts);
        }
    },

    postInitDom(ctx: IContext, me: b.IBobrilCacheNode) {
        ctx.chart = Highcharts.chart(me.element, ctx.data.options);
    }
});