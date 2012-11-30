var harness = Siesta.Harness.Browser;

harness.configure({
    title   : 'Prize Patrol - Test Suite',

    hostPageUrl : '../../index.html',

    preload : [
        // no files to preload
    ]
});

harness.start(
    {
        group : 'Test Group A',

        items : [
            {
                url         : '01_meetup_list.js'
            },

            {
                title       : 'Testing "itemtap" event',
                url         : '02_list_tap.js'
            },

            '03_pick_winner.js'
        ]
    }
);

