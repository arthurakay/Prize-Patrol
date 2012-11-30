StartTest(function (t) {
    t.diag('Testing "Pick Winner" functionality');

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

        {
            action : 'click',
            target : function() {
                var btn = Ext.ComponentQuery.query('button#mybutton')[0];

                return btn.element.dom;
            }
        },

        {
            waitFor : 500 //allow the animation to happen
        },

        function (next) {
            var win = Ext.ComponentQuery.query('sheet')[0];

            t.is(win.isHidden(), false, 'A winner has been chosen!');
        }

    );
});