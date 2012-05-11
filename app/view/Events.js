Ext.define('PrizePatrol.view.Events', {
    extend : 'Ext.Container',
    alias : 'widget.pp-events',

    requires : [
        'Ext.dataview.List'
    ],

    config : {
        layout : {
            type : 'fit'
        },
        items  : [
            {
                xtype  : 'toolbar',
                docked : 'top',
                title  : 'Sencha Chicago User Group'
            },
            {
                xtype   : 'list',
                itemTpl : [
                    '<div>{name}</div>'
                ],
                store   : 'EventStore'
            }
        ]
    }

});