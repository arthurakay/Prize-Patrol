Ext.regModel('Contestant', {
    fields : [
        { name : 'id'   },
        { name : 'Name' }
    ],

    proxy : {
        type : 'localstorage',
        id   : 'contestant-list'
    }
});