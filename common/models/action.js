'use strict';

module.exports = function(Action) {

    var methodNames = ['upsert', 'deleteById','updateAll',
    'updateAttributes','createChangeStream','replace','replaceById',
    'upsertWithWhere','replaceOrCreate', 'count', 'findOne', 
    'prototype.__delete__Service','prototype.__destroy__Service','prototype.__update__Service', 'exists'
    ];

    methodNames.forEach(function(methodName) {
        disableMethods(Action,methodName)
    });

    function disableMethods(model,methodName)
    {
        if(methodName!='updateAttributes')
            model.disableRemoteMethodByName(methodName, true);
        else
            model.disableRemoteMethodByName(methodName, true); 
    }
    var Service = Service;
    //Service.disableRemoteMethodByName('prototype.__get__tags');
    //Service.disableRemoteMethodByName('prototype.__create__tags');
    //Service.disableRemoteMethodByName('prototype.__destroyById__accessTokens'); // DELETE
    //Service.disableRemoteMethodByName('prototype.__updateById__accessTokens'); // PUT
    
    //disableMethods(Service,'prototype.__get__tags');

    //Action.disableRemoteMethodByName('__create__Services',true)
    /* ,
    "subscriptions": {
      "type": "hasMany",
      "model" : "Subscription",
      "foreignKey": "messageId",
      "through": "Pushmessage"
    }


     "messages": {
      "type": "hasMany",
      "model" : "Message",
      "foreignKey": "subscriptionId",
      "through": "Pushmessage"
    } */
};


