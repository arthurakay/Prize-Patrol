Ext.regApplication({
    name: 'app',

    launch: function() {
        this.ui = new Ext.TabPanel({
            defaults   : { scroll: 'vertical' },
            fullscreen : true,

            tabBar     : {
                dock: 'bottom',
                layout: { pack: 'center' }
            },

            items      : [
                { xtype : 'contestant_view' },
                { xtype : 'prize_view' }
            ]
        });
    }
});