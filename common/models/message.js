'use strict';

module.exports = function(Message) {

    var methodNames = ['upsert', 'deleteById','updateAll',
    'updateAttributes','createChangeStream','replace','replaceById',
    'upsertWithWhere','replaceOrCreate', 'count', 'findOne', 'exists',
    'prototype.__delete__answer','prototype.__updateById__answer',
    ,'prototype.__findById__answer', 'find',
    'create','prototype.patchAttributes','prototype.__count__answer'
    ];

    methodNames.forEach(function(methodName) {
        disableMethods(Message,methodName)
    });

    function disableMethods(model,methodName)
    {
        if(methodName!='updateAttributes')
            model.disableRemoteMethodByName(methodName, true);
        else
            model.disableRemoteMethodByName(methodName, false); 
    }

    Message.disableRemoteMethodByName('prototype.__create__answer');
};


//fertig disabled