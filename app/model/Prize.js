Ext.regModel('Prize', {
    fields: [
        { name: 'Name', type: 'string' },
        { name: 'id', type: 'int' }
    ],
    proxy: {
        type: 'localstorage',
        id: 'prize-list'
    }
});