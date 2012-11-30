StartTest(function (t) {
    t.diag('Testing to see if "itemtap" event works correctly');

    var store = Ext.getStore('EventStore');
    var rsvpStore = Ext.getStore('UserStore');

    t.chain(
        {
            //let the API load before trying to tap on the list
            waitFor : 3000
        },

        function (next) {
            var list = Ext.ComponentQuery.query('list')[0];
            t.click(list.element.down('.x-list-item').dom, next);
        },

        {
            //let the animation finish... we should also allow time for the API to return data
            waitFor : 3000
        },

        function (next) {
            t.isGreater(rsvpStore.getCount(), 0, 'UserStore should have more than 0 records');

            next();
        }

    );
});