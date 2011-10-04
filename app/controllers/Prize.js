Ext.regController('app.controllers.Prize', {

    addPrize: function() {
        var me = this;

        Ext.Msg.prompt(
            'Enter your Prize',
            'Enter the name of the prize.',
            me.newPrize,
            null,
            false,
            null,
            {
                focus: true,
                autocapitalize: true
            }
        );
    },

    newPrize : function(button, name) {
        if (!name || typeof name !== 'string' || name === '') { return false; }

        var newPrize = Ext.ModelMgr.create({
            Name: name
        }, 'Prize');

        var prizeStore = Ext.StoreMgr.lookup('Prizes');

        prizeStore.add(newPrize);
        prizeStore.sync();
    },

    clearPrizes: function() {
        var prizeStore = Ext.StoreMgr.lookup('Prizes');
        
        prizeStore.removeAll();
        prizeStore.proxy.clear();
    }

});