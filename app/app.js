/** MODELS **/
Ext.regModel('Contestant', {
    fields: [
        { name: 'Name', type: 'string' },
        { name: 'id', type: 'int' }
    ],
    proxy: {
        type: 'localstorage',
        id: 'contestant-list'
    }
});

Ext.regModel('Prize', {
    fields: [
        { name: 'Name', type: 'string' },
        { name: 'id', type: 'int' }
    ],
    proxy: {
        type: 'localstorage',
        id: 'prize-list'
    }
});


/** DATA STORES **/
Ext.regStore('Contestants', { model: 'Contestant' });
Ext.regStore('Prizes', { model: 'Prize' });


Ext.setup({
    statusBarStyle: 'black',
    onReady: function() {
/** Contestant Handlers **/
        function clearContestants() {
            var contestantStore = contestantList.getStore();
            contestantStore.removeAll();
            contestantStore.proxy.clear();
        }

        function promptUserForName() {
            Ext.Msg.prompt(
                'Enter your name',
                'Please enter your name.',
                addContestant,
                null,
                false,
                null,
                {
                    focus: true,
                    autocapitalize: true
                }
            );
        }

        function addContestant(button, name) {
            if (name === '') { return false; }

            var newContestant = Ext.ModelMgr.create({
                Name: name
            }, 'Contestant');

            var contestantStore = contestantList.getStore();

            contestantStore.add(newContestant);
            contestantStore.sync();
        }

        function announceWinner() {
            var contestantStore = contestantList.getStore(),
                prizeStore = prizeList.getStore();

            if (contestantStore.getCount() < 1) {
                Ext.Msg.alert('Error', 'No more Contestants left!');
            }
            else if (prizeStore.getCount() < 1) {
                Ext.Msg.alert('Error', 'No more prizes left!');
            }
            else {
                var prize = prizeStore.getAt(prizeStore.getCount()-1).get('Name'),
                    winnerIndex = Math.floor(Math.random()*contestantStore.getCount()),
                    winner = contestantStore.getAt(winnerIndex).get('Name');

                Ext.Msg.alert(
                    'The winner is...',
                    winner + ' has won the prize: ' + prize + '!'
                );

                contestantStore.removeAt(winnerIndex);
                contestantStore.sync();

                prizeStore.removeAt(prizeStore.getCount()-1);
                prizeStore.sync();
            }
        }

        var contestantList = new Ext.List({
            emptyText: 'No Contestants!',
            itemTpl: '{Name}',
            store: 'Contestants',

            listeners: {
                'render': function(thisComponent) {
                    thisComponent.getStore().load();
                }
            }
        });


/** PRIZE HANDLERS **/
        function clearPrizes() {
            var prizeStore = prizeList.getStore();
            prizeStore.removeAll();
            prizeStore.proxy.clear();
        }

        function promptUserForPrize() {
            Ext.Msg.prompt(
                'Enter your Prize',
                'Enter the name of the prize.',
                addPrize,
                null,
                false,
                null,
                {
                    focus: true,
                    autocapitalize: true
                }
            );
        }

        function addPrize(button, name) {
            if (name === '') { return false; }

            var newPrize = Ext.ModelMgr.create({
                Name: name
            }, 'Prize');

            var prizeStore = prizeList.getStore();

            prizeStore.add(newPrize);
            prizeStore.sync();
        }

        var prizeList = new Ext.List({
            emptyText: 'No Prizes!',
            itemTpl: '{Name}',
            store: 'Prizes',

            listeners: {
                'render': function(thisComponent) {
                    thisComponent.getStore().load();
                }
            }
        });


        var tabPanel = new Ext.TabPanel({
            defaults: {
                scroll: 'vertical'
            },
            fullscreen: true,
            tabBar: {
                dock: 'bottom',
                layout: { pack: 'center' }
            },

            items: [{
                xtype: 'panel',
                iconCls: 'bookmarks',
                items: [ contestantList ],
                layout: 'fit',
                title: 'Contestants',

                dockedItems: [{
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [{
                        text: 'Add Contestant',
                        handler: promptUserForName
                    }]
                },{
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [{
                        text: 'Clear List',
                        handler: clearContestants
                    }, {
                        xtype: 'spacer'
                    },{
                        text: 'Call Winner!',
                        handler: announceWinner
                    }]
                }]
            }, {
                xtype: 'panel',
                iconCls: 'info',
                items: [ prizeList ],
                layout: 'fit',
                title: 'Prizes',

                dockedItems: [{
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [{
                        text: 'Add Prize',
                        handler: promptUserForPrize
                    }]
                },{
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [{
                        text: 'Clear Prizes',
                        handler: clearPrizes
                    }]
                }]
            }]
        });
    }
});