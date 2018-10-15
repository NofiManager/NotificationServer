'use strict';

module.exports = function(Subscription) {

    var methodNames = ['upsert', 'deleteById','updateAll',
    'updateAttributes','createChangeStream','replace','replaceById',
    'upsertWithWhere','replaceOrCreate', 'count', 'findOne', 'exists'
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