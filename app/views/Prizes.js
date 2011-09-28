app.views.Prizes = Ext.extend(Ext.Panel, {

    iconCls : 'favorites',
    layout  : 'fit',
    title   : 'Prizes',

    initComponent : function() {
        var me = this;

        Ext.apply(me, {
            items       : me.buildItems(),
            dockedItems : me.buildDocks()
        });

        app.views.Prizes.superclass.initComponent.call(me);
    },

    buildItems : function() {
        return [
            new Ext.List({
                emptyText : 'No Prizes!',
                itemTpl   : '{Name}',
                store     : 'Prizes'
            })
        ]
    },

    buildDocks : function() {
        var me = this;

        return [{
            xtype : 'toolbar',
            dock  : 'top',
            items : [
                {
                    xtype   : 'button',
                    text    : 'Add Prize',
                    handler : me.addPrize
                },

                { xtype : 'spacer' },

                {
                    xtype   : 'button',
                    text    : 'Clear Prizes',
                    ui      : 'decline',
                    handler : me.clearPrizes
                }
            ]
        }];
    },

    addPrize : function() {
        Ext.dispatch({
            controller : 'app.controllers.Prize',
            action     : 'addPrize'
        });
    },

    clearPrizes : function() {
        Ext.dispatch({
            controller : 'app.controllers.Prize',
            action     : 'clearPrizes'
        });
    }

});
Ext.reg('prize_view', app.views.Prizes);