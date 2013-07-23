Ext.define('PrizePatrol.view.Viewport', {
    extend : 'Ext.navigation.View',
    alias  : 'pp-viewport',

    requires : [
        'PrizePatrol.view.Users',
        'PrizePatrol.view.Events'
    ],

    config : {
        items : [
            {
                xtype : 'pp-events'
            }
        ]
    }
});