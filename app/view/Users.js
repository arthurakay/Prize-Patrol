Ext.define('PrizePatrol.view.Users', {
    extend : 'Ext.Container',
    alias  : 'widget.pp-users',

    requires : [
        'PrizePatrol.store.Users'
    ],

    config : {
        layout : {
            type : 'fit'
        },
        items  : [
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
                xtype    : 'list',
                infinite : true,
                itemTpl  : [
                    '<div style="height: 30px;">',
                    '<tpl if="photo">',
                    '<img src="http://src.sencha.io/50/{photo}" alt="" style="margin-right: 10px;" height="25" />',
                    '</tpl>',
                    '{name}',
                    '</div>'
                ]
            }
        ]
    }

});