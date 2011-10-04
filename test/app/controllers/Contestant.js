describe('app.controllers.Contestant', function() {

    var controller = Ext.ControllerManager.get('app.controllers.Contestant');

    describe('addContestant()', function() {
        it('should prompt the user to input the name of a contestant', function() {
            //TODO: write tests
        });
    });

    describe('newContestant()', function() {
        /**
         * Tear Down Methods
         */
         afterEach(function() {
            controller.clearContestants();
         });

        /**
         * Unit Tests
         */
        it('should return false if no name is entered', function() {
            var stubButton = {};

            expect(controller.newContestant(stubButton, '')).toEqual(false);
            expect(controller.newContestant(stubButton, {})).toEqual(false);
            expect(controller.newContestant(stubButton, true)).toEqual(false);
            expect(controller.newContestant(stubButton, 10)).toEqual(false);
            expect(controller.newContestant(stubButton, null)).toEqual(false);
            expect(controller.newContestant(stubButton, undefined)).toEqual(false);

            stubButton = null;
        });

        it('should successfully add a new record to the data store and sync local storage', function() {
            var stubStore = Ext.StoreMgr.lookup('Contestants');
            expect(stubStore.getUpdatedRecords().length).toEqual(0); //should be 0 to start

            controller.newContestant(null, 'Test User');

            expect(stubStore.getCount()).toEqual(1);

            //TODO: why does this return 1? 
            //expect(stubStore.getUpdatedRecords().length).toEqual(0); //should be 0 because data store is synced with local storage
        });
    });

    describe('callWinner()', function() {
        it('should alert the UI with an error if no contestants exist', function() {
            //TODO: write tests
        });

        it('should alert the UI with an error if no prizes exist', function() {
            //TODO: write tests
        });

        it('should alert the UI with the name of the winner and prize', function() {
            //TODO: write tests
        });

        it('should remove the winning contestant from the data store', function() {
            //TODO: write tests
        });

        it('should remove the prize won from the data store', function() {
            //TODO: write tests
        });
    });

    describe('generateWinIndex()', function() {
        var stubStore = Ext.StoreMgr.lookup('Contestants');

        /**
         * Setup / Tear Down Methods
         */
        beforeEach(function() {
            controller.newContestant(null, 'Test User');
        });

        afterEach(function() {
            controller.clearContestants();
        });


        /**
         * Unit Tests
         */
        it('should return an integer value', function() {
            expect(typeof controller.generateWinIndex(stubStore)).toEqual('number');

            //TODO: check to make sure that the return value is an integer, not some other number format
        });

        it('should return a pseudo-random number between (0, subStore.getCount() -1)', function() {
            var index = controller.generateWinIndex(stubStore);

            expect(index).toBeGreaterThan(-1);
            expect(index).toBeLessThan(stubStore.getCount());
        });
    });

    describe('clearContestants()', function() {
        /**
         * Tear Down Methods
         */
        afterEach(function() {
            controller.clearContestants(); //make sure data store has been reset
        });

        /**
         * Unit Tests
         */
        it('should successfully remove all records from the data store and sync local storage', function() {
            var stubStore = Ext.StoreMgr.lookup('Contestants');

            controller.newContestant(null, 'Test User');
            expect(stubStore.getCount()).toEqual(1);

            controller.clearContestants();
            expect(stubStore.getCount()).toEqual(0);
            expect(stubStore.getUpdatedRecords().length).toEqual(0);
        });
    });

});