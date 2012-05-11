Ext.define('PrizePatrol.MeetupApiUtil', {
    singleton : true,

    /**
     *
     */
    apiKey : '26707c51352322312176e2f42502d3c',

    /**
     *
     */
    groupId : 'Chicago-Sencha-User-Group',

    /**
     *
     * @param eventId
     * @return {String}
     */
    getUsersUrl : function (eventId) {
        var queryString = Ext.Object.toQueryString({
            sign     : true,
            key      : this.apiKey,
            event_id : eventId,
            order    : 'event',
            rsvp     : 'yes',
            format   : 'json',
            page     : 200
        });

        return 'http://api.meetup.com/2/rsvps?' + queryString;
    },

    /**
     *
     * @return {String}
     */
    getEventsUrl : function () {
        var queryString = Ext.Object.toQueryString({
            sign          : true,
            key           : this.apiKey,
            group_urlname : this.groupId,
            format        : 'json',
            page          : 200
        });

        return 'http://api.meetup.com/2/events?' + queryString;
    }
});