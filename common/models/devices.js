'use strict';

module.exports = function(Device) {

    var methodNames = ['upsert', 'deleteById','updateAll',
    'updateAttributes','createChangeStream','replace','replaceById',
    'upsertWithWhere','replaceOrCreate', 'count', 'findOne', 'exists',
    'prototype.__count__answer','prototype.__count__subscriptions'
    ];

    methodNames.forEach(function(methodName) {
        disableMethods(Device,methodName)
    });

    function disableMethods(model,methodName)
    {
        if(methodName!='updateAttributes')
            model.disableRemoteMethodByName(methodName, true);
        else
            model.disableRemoteMethodByName(methodName, false); 
    }
    //Device.on('attached', function() {
        //Device.
    //});
    /*

    "subscriptions": {
      "type": "hasMany",
      "model": "Subscription",
      "foreignKey": "deviceId"
    },
    */
};
