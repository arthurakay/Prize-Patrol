Ext.regModel('Contestant', {
    fields: [
        { name: 'Name', type: 'string' },
        { name: 'id', type: 'int' }
    ],
    proxy: {
        type: 'localstorage',
        id: 'contestant-list'
    }
});