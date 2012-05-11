Ext.define('PrizePatrol.store.Events', {
    extend   : 'Ext.data.Store',
    requires : [
        'Ext.data.proxy.JsonP',
        'PrizePatrol.model.Event',
        'PrizePatrol.MeetupApiUtil'
    ],

    config : {
        autoLoad : true,
        autoSync : false,
        model    : 'PrizePatrol.model.Event',
        pageSize : 0,
        storeId  : 'EventStore',
        proxy    : {
            type               : 'jsonp',
            enablePagingParams : false,
            noCache            : false,
            url                : PrizePatrol.MeetupApiUtil.getEventsUrl(),
            autoAppendParams   : false,
            reader             : {
                type         : 'json',
                rootProperty : 'results'
            }
        }
    }
});