var harness = Siesta.Harness.Browser.SenchaTouch;

harness.configure({
    title   : 'Prize Patrol - Component Tests',
    preload : [
        '../../sdk/sencha-touch-all.js',
        '../../sdk/resources/css/sencha-touch.css'
    ]
});

harness.start(
    {
        group : 'Individual Components',
        items : [
            {
                url         : 'user-view.js',
                preload: [
                    '../../sdk/sencha-touch-all.js',
                    '../../sdk/resources/css/sencha-touch.css',
                    '../../app/model/User.js',
                    '../../app/MeetupApiUtil.js',
                    '../../app/store/Users.js',
                    '../../app/view/Users.js'
                ]
            }
        ]
    }
);

