/*
 * File: app/view/ui/PrizePanel.js
 * Date: Mon Jan 23 2012 17:08:07 GMT-0600 (CST)
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you save.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.ui.PrizePanel', {
    extend: 'Ext.Container',

    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'list',
                itemTpl: [
                    '<div>List Item {string}</div>'
                ],
                store: 'Prizes'
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'addPrize',
                        ui: 'action',
                        text: 'Add Prize'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        itemId: 'clearPrizes',
                        ui: 'decline',
                        text: 'Clear'
                    }
                ]
            }
        ]
    }

});