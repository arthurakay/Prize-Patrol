app.views.Contestants = Ext.extend(Ext.Panel, {

    iconCls : 'team',
    layout  : 'fit',
    title   : 'Contestants',

    initComponent : function() {
        var me = this;

        Ext.apply(me, {
            items       : me.buildItems(),
            dockedItems : me.buildDocks()
        });

        app.views.Contestants.superclass.initComponent.call(me);
    },

    buildItems : function() {
        return [
            new Ext.List({
                emptyText : 'No Contestants!',
                itemTpl   : '{Name}',
                store     : 'Contestants'
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
                    text    : 'Add Contestant',
                    handler : me.addContestant
                },

                { xtype : 'spacer' },

                {
                    xtype   : 'button',
                    text    : 'Call Winner!',
                    ui      : 'confirm',
                    handler : me.callWinner
                },

                {
                    xtype   : 'button',
                    text    : 'Clear List',
                    ui      : 'decline',
                    handler : me.clearContestants
                }
            ]
        }];
    },

    addContestant : function() {
        Ext.dispatch({
            controller : 'app.controllers.Contestant',
            action     : 'addContestant'
        });
    },

    callWinner : function() {
        Ext.dispatch({
            controller : 'app.controllers.Contestant',
            action     : 'callWinner'
        });
    },

    clearContestants : function() {
        Ext.dispatch({
            controller : 'app.controllers.Contestant',
            action     : 'clearContestants'
        });
    }

});
Ext.reg('contestant_view', app.views.Contestants);