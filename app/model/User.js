Ext.define('PrizePatrol.model.User', {
    extend : 'Ext.data.Model',
    config : {
        fields : [
            {
                mapping : 'member.member_id',
                name    : 'id',
                type    : 'string'
            },
            {
                mapping : 'member.name',
                name    : 'name',
                type    : 'string'
            },
            {
                mapping : 'member_photo.photo_link',
                name    : 'photo'
            }
        ]
    }
});