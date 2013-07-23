Ext.define('PrizePatrol.view.Events', {
    extend : 'Ext.dataview.List',
    alias  : 'widget.pp-events',

    requires : [
        'Ext.dataview.List'
    ],

    config : {

        title : 'Sencha Chicago User Group',

        store   : 'EventStore',

        itemTpl : new Ext.XTemplate(
            '<p>',
            '{name}<br />',
            '{date:date("D m/d/Y")}',
            '</p>'
        )
    }

});