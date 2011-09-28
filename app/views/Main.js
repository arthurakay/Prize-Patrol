app.views.Main = Ext.extend(Ext.TabPanel, {
    defaults   : { scroll : 'vertical' },
    fullscreen : true,

    initComponent : function() {
        var me = this;

        Ext.apply(me, {
            items  : me.buildItems(),
            tabBar : {
                dock   : 'bottom',
                layout : { pack : 'center' }
            }
        });

        app.views.Main.superclass.initComponent.call(me);
    },

    buildItems : function() {
        return [
            { xtype : 'contestant_view' },
            { xtype : 'prize_view' }
        ];
    }
});