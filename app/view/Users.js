Ext.define('PrizePatrol.view.Users', {
    extend : 'Ext.Container',

    requires : [
        'Ext.dataview.List'
    ],

    config : {
        id     : 'foobar',
        layout : {
            type : 'fit'
        },
        cls    : [
            'comeclass'
        ],
        items  : [
            {
                xtype  : 'toolbar',
                docked : 'top',
                title  : 'Sencha Chicago'
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
                    '<div>{name}</div>'
                ],
                store   : 'UserStore'
            }
        ]
    }

});