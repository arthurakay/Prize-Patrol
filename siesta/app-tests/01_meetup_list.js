StartTest(function (t) {
    t.diag('Testing to see if list of upcoming meetings is correctly loaded from Meetup.com');

    var store = Ext.getStore('EventStore');

    t.chain(

        function (next) {
            t.is((typeof store), 'object', 'EventStore is an object');

            t.isNot(store, null, 'EventStore is not null');

            t.isNot(store, undefined, 'EventStore is not undefined');

            next();
        },

        {
            waitFor : 3000
        },

        function (next) {
            t.isGreater(store.getCount(), 0, 'EventStore should have more than 0 records');

            next();
        }

    );
});