'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();

    app.models.Devices.nestRemoting('subscriptions');
    app.models.Service.nestRemoting('messages');

    var User = app.models.User;

    var methodNames = ['upsert','updateAll',
    'updateAttributes','createChangeStream','replace','replaceById',
    'upsertWithWhere','replaceOrCreate', 'count', 'findOne', 'exists',
    'prototype.__count__accessTokens','prototype.__updateById__accessTokens',
    'prototype.__get__accessTokens'
    ];

    methodNames.forEach(function(methodName) {
        disableMethods(User,methodName)
    });

    function disableMethods(model,methodName)
    {
        if(methodName!='updateAttributes')
            model.disableRemoteMethodByName(methodName, true);
        else
            model.disableRemoteMethodByName(methodName, false); 
    }
});
