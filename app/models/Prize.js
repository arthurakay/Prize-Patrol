Ext.regModel('Prize', {
    fields : [
        { name : 'id'   },
        { name : 'Name' }
    ],

    proxy : {
        type : 'localstorage',
        id   : 'prize-list'
    }
});