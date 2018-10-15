'use strict';

module.exports = function(Subscription) {

    var methodNames = ['upsert', 'deleteById','updateAll',
    'updateAttributes','createChangeStream','replace','replaceById',
    'upsertWithWhere','replaceOrCreate', 'count', 'findOne', 'exists',
    'prototype.__count__messages','prototype.____messages','prototype.__create__messages',
    'prototype.__delete__messages','prototype.__updateById__messages','prototype.__exists__messages',
    'prototype.__unlink__messages','prototype.__link__messages'
    ];

    methodNames.forEach(function(methodName) {
        disableMethods(Subscription,methodName)
    });

    function disableMethods(model,methodName)
    {
        if(methodName!='updateAttributes')
            model.disableRemoteMethodByName(methodName, true);
        else
            model.disableRemoteMethodByName(methodName, false); 
    }

}


// delte und post deaktivieren