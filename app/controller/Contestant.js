/*
 * File: app/controller/Contestant.js
 * Date: Mon Jan 23 2012 15:44:23 GMT-0600 (CST)
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * You should implement event handling and custom methods in this
 * class.
 */

Ext.define('MyApp.controller.Contestant', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'Contestant'
        ],
        stores: [
            'Contestants'
        ],
        control: {
            "contestants button[ui=action]": {
                tap: 'addContestant'
            },
            "contestants button[ui=confirm]": {
                tap: 'announceWinner'
            },
            "contestants button[ui=decline]": {
                tap: 'clearContestants'
            }
        }
    },

    addContestant: function(button, e, options) {

    },

    announceWinner: function(button, e, options) {

    },

    clearContestants: function(button, e, options) {
        var contestantStore = this.getContestantsStore();

        contestantStore.removeAll();
        contestantStore.proxy.clear();
    }

});