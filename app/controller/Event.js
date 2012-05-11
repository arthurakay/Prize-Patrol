Ext.define('PrizePatrol.controller.Event', {
    extend: 'Ext.app.Controller',
    config: {
        control: {
            'pp-events > list' : {
                itemtap: 'itemTapHandler'
            }
        }
    },

    itemTapHandler : function(thisView, index, target, record, event, options) {
        var recordId = record.get('id');
        var userList = Ext.ComponentQuery.query('pp-users')[0];

        //get the Users store, reload after changing URL
        var userStore = Ext.data.StoreManager.lookup('UserStore');
        userStore.getProxy().setUrl(PrizePatrol.MeetupApiUtil.getUsersUrl(recordId));
        userStore.load();

        //set the toolbar title
        userList.down('toolbar').setTitle(record.get('name'));

        //switch the card
        PrizePatrol.viewport.setActiveItem(userList);
    }
});