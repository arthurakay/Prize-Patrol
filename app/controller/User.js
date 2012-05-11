Ext.define('PrizePatrol.controller.User', {
    extend: 'Ext.app.Controller',
    config: {
        control: {
            "button#mybutton": {
                tap: 'onMybuttonTap'
            },
            "button[ui=back]": {
                tap: 'onBackHandler'
            }
        }
    },

    onMybuttonTap: function(button, e, options) {
        var store = Ext.data.StoreManager.lookup('UserStore');

        var index = Math.floor(Math.random() * store.getCount());

        Ext.Msg.alert(store.getAt(index).get('name'));

        store.removeAt(index);
    },

    onBackHandler : function() {
        PrizePatrol.viewport.setActiveItem(0);
    }

});