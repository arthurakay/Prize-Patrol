Ext.define('PrizePatrol.store.Users', {
    extend   : 'Ext.data.Store',
    requires : [
        'Ext.data.proxy.JsonP',
        'PrizePatrol.model.User'
    ],

    config : {
        autoLoad : true,
        autoSync : false,
        model    : 'PrizePatrol.model.User',
        pageSize : 0,
        storeId  : 'UserStore',
        proxy    : {
            type               : 'jsonp',
            enablePagingParams : false,
            noCache            : false,
            url                : 'http://api.meetup.com/2/rsvps?sign=true&key=26707c51352322312176e2f42502d3c&event_id=56651502&order=event&rsvp=yes&desc=false&offset=0&format=json&page=200&fields=&sig_id=8883015&sig=12689c1ac561bb22dd1570f3a354dc81fe1a36dc',
            autoAppendParams   : false,
            reader             : {
                type         : 'json',
                rootProperty : 'results'
            }
        }
    }
});