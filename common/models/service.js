'use strict';

module.exports = function(Service) {

    var methodNames = ['upsert','updateAll',
    'updateAttributes','createChangeStream','replace','replaceById',
    'upsertWithWhere','replaceOrCreate', 'count', 'findOne', 'exists',
    'prototype.__delete__actions','prototype.__delete__messages',
    'prototype.__count__actions','prototype.__count__messages',
    'prototype.__updateById__messages'
    ];

    methodNames.forEach(function(methodName) {
        disableMethods(Service,methodName)
    });

    function disableMethods(model,methodName)
    {
        if(methodName!='updateAttributes')
            model.disableRemoteMethodByName(methodName, true);
        else
            model.disableRemoteMethodByName(methodName, false); 
    }
//fertig disabled
    
};
/*
    "subscriptions": {
      "type": "hasMany",
      "model": "Subscription",
      "foreignKey": "serviceId"
    }

*/