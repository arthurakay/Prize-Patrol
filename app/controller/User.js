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
        var winner = store.getAt(index);
        var img = '';

        if (winner.get('photo')) {
            img = '<img src="http://src.sencha.io/200/' + winner.get('photo') + '" />';
        }

        Ext.Msg.alert(
            'Winner',
            winner.get('name') + ' has won a prize!<br />' + img
        );

        store.removeAt(index);
    },

    onBackHandler : function() {
        PrizePatrol.viewport.setActiveItem(0);
    }

});