Ext.define('PrizePatrol.model.Event', {
    extend : 'Ext.data.Model',
    config : {
        fields : [
            {
                mapping : 'id',
                name    : 'id',
                type    : 'string'
            },
            {
                mapping : 'name',
                name    : 'name',
                type    : 'string'
            },
            {
                mapping : 'time',
                name    : 'date'
            }
        ]
    }
});