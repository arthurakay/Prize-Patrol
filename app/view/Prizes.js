app.views.Prizes = Ext.extend(Ext.Panel, {

    iconCls : 'favorites',
    layout  : 'fit',
    title   : 'Prizes',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            items       : me.buildList(),
            dockedItems : me.buildToolbars()
        });

        app.views.Prizes.superclass.initComponent.call(me);
    },

    buildList: function() {
        return [
            new Ext.List({
                emptyText : 'No Prizes!',
                itemTpl   : '{Name}',
                store     : 'Prizes'

            //    listeners: {
            //        'render': function(thisComponent) {
            //            thisComponent.getStore().load();
            //        }
            //    }
            })
        ];
    },

    buildToolbars: function() {
        return [{
            xtype : 'toolbar',
            dock  : 'top',
            items : [{
                text    : 'Add Prize',
                handler : function() {
                    Ext.dispatch({
                        controller : 'app.controller.Prize',
                        action     : 'promptUserForPrize'
                    });
                }
            }, {
                xtype: 'spacer'
            },{
                text    : 'Clear Prizes',
                ui      : 'decline',
                handler : function() {
                    Ext.dispatch({
                        controller : 'app.controller.Prize',
                        action     : 'clearPrizes'
                    });
                }
            }]
        }];
    }
});
Ext.reg('prize_view', app.views.Prizes);