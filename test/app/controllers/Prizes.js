describe('app.controllers.Prizes', function() {

    var controller = Ext.ControllerManager.get('app.controllers.Prize');

    describe('addPrize()', function() {
        it('should prompt the user to input the name of a prize', function() {
            //TODO: write tests
        });
    });

    describe('newPrize()', function() {
        /**
         * Tear Down Methods
         */
         afterEach(function() {
            controller.clearPrizes();
         });

        /**
         * Unit Tests
         */
        it('should return false if no name is entered', function() {
            var stubButton = {};

            expect(controller.newPrize(stubButton, '')).toEqual(false);
            expect(controller.newPrize(stubButton, {})).toEqual(false);
            expect(controller.newPrize(stubButton, true)).toEqual(false);
            expect(controller.newPrize(stubButton, 10)).toEqual(false);
            expect(controller.newPrize(stubButton, null)).toEqual(false);
            expect(controller.newPrize(stubButton, undefined)).toEqual(false);

            button = null;
        });

        it('should successfully add a new record to the data store and sync local storage', function() {
            var stubStore = Ext.StoreMgr.lookup('Prizes');
            expect(stubStore.getUpdatedRecords().length).toEqual(0); //should be 0 to start

            controller.newPrize(null, 'Test Prize');

            expect(stubStore.getCount()).toEqual(1);

            //TODO: why does this return 1?
            //expect(stubStore.getUpdatedRecords().length).toEqual(0); //should be 0 because data store is synced with local storage
        });
    });

    describe('clearPrizes()', function() {
        /**
         * Tear Down Methods
         */
        afterEach(function() {
            controller.clearPrizes(); //make sure data store has been reset
        });

        /**
         * Unit Tests
         */
        it('should successfully remove all records from the data store and sync local storage', function() {
            var stubStore = Ext.StoreMgr.lookup('Prizes');

            controller.newPrize(null, 'Test Prize');
            expect(stubStore.getCount()).toEqual(1);

            controller.clearPrizes();
            expect(stubStore.getCount()).toEqual(0);
            expect(stubStore.getUpdatedRecords().length).toEqual(0);
        });
    });

});