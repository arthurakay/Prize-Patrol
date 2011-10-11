Ext.regController('app.controllers.Contestant', {

    addContestant : function() {
        var me = this;

        Ext.Msg.prompt(
            'Enter your name',
            'Please enter your name.',
            me.newContestant,
            null,
            false,
            null,
            {
                focus          : true,
                autocapitalize : true
            }
        );
    },

    newContestant : function(button, name) {
        if (!name || typeof name !== 'string' || name === '') { return false; }

        var newContestant = Ext.ModelMgr.create({
            Name: name
        }, 'Contestant');

        var contestantStore = Ext.StoreMgr.lookup('Contestants');

        contestantStore.add(newContestant);
        contestantStore.sync();
    },

    callWinner : function() {
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
                winnerIndex = this.generateWinIndex(contestantStore),
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
    },

    generateWinIndex : function(contestantStore) {
        //TODO Improve random number generator so that it never returns value of store.length
        return Math.floor(Math.random() * contestantStore.getCount());
    },

    clearContestants : function() {
        var contestantStore = Ext.StoreMgr.lookup('Contestants');
        
        contestantStore.removeAll();
        contestantStore.proxy.clear();
    }

});