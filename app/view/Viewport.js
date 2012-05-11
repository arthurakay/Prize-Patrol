Ext.define('PrizePatrol.view.Viewport', {
    extend : 'Ext.Container',
    alias  : 'pp-viewport',

    requires : [
        'PrizePatrol.view.Users',
        'PrizePatrol.view.Events'
    ],

    config : {
        layout : {
            type      : 'card',
            animation : 'slide'
        },

        items : [
            {
                xtype : 'pp-events'
            },
            {
                xtype : 'pp-users'
            }
        ]
    }
});