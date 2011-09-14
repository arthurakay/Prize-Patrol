app.views.Contestants = Ext.extend(Ext.Panel, {

    iconCls : 'team',
    layout  : 'fit',
    title   : 'Contestants',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            items       : me.buildList(),
            dockedItems : me.buildToolbars()
        });

        app.views.Contestants.superclass.initComponent.call(me);
    },

    buildList: function() {
        return [
            new Ext.List({
                emptyText : 'No Contestants!',
                itemTpl   : '{Name}',
                store     : 'Contestants'

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
                text    : 'Add Contestant',
                handler : function() {
                    Ext.dispatch({
                        controller : 'app.controller.Contestant',
                        action     : 'promptUserForName'
                    });
                }
            }, {
                xtype: 'spacer'
            },{
                text    : 'Call Winner!',
                ui      : 'confirm',
                handler : function() {
                    Ext.dispatch({
                        controller : 'app.controller.Contestant',
                        action     : 'announceWinner'
                    });
                }
            },{
                text    : 'Clear List',
                ui      : 'decline',
                handler : function() {
                    Ext.dispatch({
                        controller : 'app.controller.Contestant',
                        action     : 'clearContestants'
                    });
                }
            }]
        }];
    }
});
Ext.reg('contestant_view', app.views.Contestants);