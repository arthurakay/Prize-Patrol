Ext.regController('app.controller.Contestant', {

    clearContestants: function (){
        var contestantStore = app.ui.down('contestant_view > list').getStore();
        contestantStore.removeAll();
        contestantStore.proxy.clear();
    },

    promptUserForName: function(button, name) {
        var me = this;

        Ext.Msg.prompt(
            'Enter your name',
            'Please enter your name.',
            me.addContestant,
            null,
            false,
            null,
            {
                focus          : true,
                autocapitalize : true
            }
        );
    },

    addContestant: function(button, name) {
        if (name === '') { return false; }

        var newContestant = Ext.ModelMgr.create({
            Name: name
        }, 'Contestant');

        var contestantStore = app.ui.down('contestant_view > list').getStore();

        contestantStore.add(newContestant);
        contestantStore.sync();
    },

    announceWinner: function() {
        var contestantStore = app.ui.down('contestant_view > list').getStore(),
            prizeStore      = app.ui.down('prize_view > list').getStore();

        if (contestantStore.getCount() < 1) {
            Ext.Msg.alert('Error', 'No more Contestants left!');
        }
        else if (prizeStore.getCount() < 1) {
            Ext.Msg.alert('Error', 'No more prizes left!');
        }
        else {
            var prize       = prizeStore.getAt(prizeStore.getCount()-1).get('Name'),
                winnerIndex = Math.floor(Math.random() * contestantStore.getCount()),
                winner      = contestantStore.getAt(winnerIndex).get('Name');

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
});