import * as b from 'bobril';
import * as m from 'bobril-m';

const containerWidth = 700;

interface IData extends m.IPaperData {
    content: b.IBobrilChildren;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createDerivedComponent<IData, m.IPaperData>(m.Paper, {
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            d.content && d.content
        ];

        b.style(me, containerStyle);
    }
});

const containerStyle = b.styleDef({
    width: containerWidth,
    marginBottom: 30,
    marginLeft: 30
});