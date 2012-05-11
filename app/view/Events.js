Ext.define('PrizePatrol.view.Events', {
    extend : 'Ext.Container',
    alias  : 'widget.pp-events',

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
                store   : 'EventStore',
                itemTpl : new Ext.XTemplate(
                    '<p>',
                    '{name}<br />',
                    '{date:date("j/d/Y")}',
                    '</p>'
                )
            }
        ]
    }

});