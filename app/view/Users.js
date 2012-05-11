Ext.define('PrizePatrol.view.Users', {
    extend : 'Ext.Container',
    alias  : 'widget.pp-users',

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
                title  : '',
                items  : [
                    {
                        xtype : 'button',
                        ui    : 'back',
                        text  : 'Back'
                    }
                ]
            },
            {
                xtype  : 'toolbar',
                docked : 'bottom',
                items  : [
                    {
                        xtype  : 'button',
                        itemId : 'mybutton',
                        ui     : 'confirm',
                        text   : 'Pick Winner'
                    }
                ]
            },
            {
                xtype   : 'list',
                itemTpl : [
                    '<div>',
                    '<tpl if="photo">',
                    '<img src="http://src.sencha.io/50/{photo}" alt="" style="margin-right: 10px;" />',
                    '</tpl>',
                    '{name}',
                    '</div>'
                ],
                store   : 'UserStore'
            }
        ]
    }

});