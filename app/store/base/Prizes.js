/*
 * File: app/store/base/Prizes.js
 * Date: Mon Jan 23 2012 12:27:27 GMT-0600 (CST)
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you save.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.base.Prizes', {
    extend: 'Ext.data.Store',
    requires: [
        'MyApp.model.Prize'
    ],

    config: {
        autoLoad: true,
        autoSync: true,
        clearOnPageLoad: false,
        model: 'MyApp.model.Prize',
        storeId: 'Prizes',
        proxy: {
            type: 'localstorage',
            reader: {
                type: 'json'
            }
        }
    }
});