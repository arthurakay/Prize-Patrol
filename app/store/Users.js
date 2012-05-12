Ext.define('PrizePatrol.store.Users', {
    extend   : 'Ext.data.Store',
    requires : [
        'Ext.data.proxy.JsonP',
        'PrizePatrol.model.User',
        'PrizePatrol.MeetupApiUtil'
    ],

    config : {
        model    : 'PrizePatrol.model.User',
        storeId  : 'UserStore',
        proxy    : {
            type               : 'jsonp',
            enablePagingParams : false,
            noCache            : false,
            url                : PrizePatrol.MeetupApiUtil.getUsersUrl(),
            autoAppendParams   : false,
            reader             : {
                type         : 'json',
                rootProperty : 'results'
            }
        }
    }
});