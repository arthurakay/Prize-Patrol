Ext.define('PrizePatrol.controller.Event', {
    extend : 'Ext.app.Controller',
    config : {
        control : {
            'pp-events' : {
                itemtap : 'itemTapHandler'
            }
        }
    },

    itemTapHandler : function (thisView, index, target, record, event, options) {
        var recordId = record.get('id');

        var userList = Ext.create('PrizePatrol.view.Users', {
            title : Ext.String.ellipsis(record.get('name'), 20, true)
        });

        //get the Users store, reload after changing URL
        var userStore = Ext.create('PrizePatrol.store.Users');
        userStore.getProxy().setUrl(PrizePatrol.MeetupApiUtil.getUsersUrl(recordId));
        userStore.load();

        userList.down('list').setStore(userStore);

        var navView = Ext.Viewport.down('navigationview');
        navView.push(userList);
    }
});