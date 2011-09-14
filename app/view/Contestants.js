app.views.Contestants = Ext.extend(Ext.Panel, {

    iconCls : 'bookmarks',
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
            }]
        },{
            xtype : 'toolbar',
            dock  : 'bottom',
            items : [{
                text    : 'Clear List',
                handler : function() {
                    Ext.dispatch({
                        controller : 'app.controller.Contestant',
                        action     : 'clearContestants'
                    });
                }
            }, {
                xtype: 'spacer'
            },{
                text    : 'Call Winner!',
                ui      : 'submit',
                handler : function() {
                    Ext.dispatch({
                        controller : 'app.controller.Contestant',
                        action     : 'announceWinner'
                    });
                }
            }]
        }];
    }
});
Ext.reg('contestant_view', app.views.Contestants);