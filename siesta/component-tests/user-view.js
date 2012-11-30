StartTest(function (t) {
    t.diag('Testing to see if "Users" view works correctly');

    var rsvpStore = Ext.create('PrizePatrol.store.Users', {
        data : [
            { id : 1, name : 'Foo' },
            { id : 2, name : 'Bar' },
            { id : 3, name : 'Smee' }
        ]
    });

    var view = Ext.create('PrizePatrol.view.Users', {
        store      : rsvpStore,
        fullscreen : true
    });

    t.chain(
        {
            waitFor : 3000
        },

        function(next) {
            var button = Ext.ComponentQuery.query('button#mybutton')[0];
            debugger;
            t.click(button.element.dom, next);
        }
    );
});